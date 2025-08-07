import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { AuthLayout } from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";

import { lazy, Suspense } from "react";
import { sleep } from "./lib/sleep";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import { PrivateRoute } from "./auth/components/PrivateRoute";
import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "./fake/fake-data";
const ChatLayout = lazy(async () => {
  await sleep(2000);
  return import("./chat/layout/ChatLayout");
});

const ChatPage = lazy(async () => import("./chat/pages/ChatPage"));
const NoChatSelectedPage = lazy(
  async () => import("./chat/pages/NoChatSelectedPage")
);

export const AppRouter = () => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token");
      }

      return checkAuth(token);
    },
    retry: 0,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
        <Route
          path="/chat"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute isAuthenticated={!!user}>
                <ChatLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
