import type { Route } from "./+types/home";

import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bienvenido a React Router!!!!" },
    { name: "description", content: "Bienvenido a React Router!!!!" },
  ];
}

export async function loader() {
  //De esta manera no se carga el componente
  return redirect("/chat");
}

export default function Home() {
  //De esta manera si se carga el componente
  //return <Navigate to="/chat" />;
  return (
    <div>
      <h1 className="text-4xl font-thin">Bienvenido a React Router!</h1>
      <p className="text-lg">
        Este es un proyecto de React Router creado con el comando de Vite.
      </p>
    </div>
  );
}
