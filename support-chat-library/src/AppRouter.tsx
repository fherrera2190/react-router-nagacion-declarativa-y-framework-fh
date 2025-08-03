import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { AuthLayout } from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";
import ChatPage from "./chat/pages/ChatPage";
import { lazy, Suspense } from "react";
import { sleep } from "./lib/sleep";
const ChatLayout = lazy(async () => {
  await sleep(2000);
  return import("./chat/layout/ChatLayout");
});

export const AppRouter = () => {
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
            <Suspense fallback={<div>Loading...</div>}>
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<ChatPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
