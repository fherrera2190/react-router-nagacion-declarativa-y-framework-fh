import { Link } from "react-router";
import type { Route } from "./+types/testing-page";

export async function loader() {
  return {
    message: "Hello from the loader! - Server",
  };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  // call the server loader
  const serverData = await serverLoader();
  // And/or fetch data on the client
  //const data = getDataFromClient();
  // Return the data to expose through useLoaderData()
  return {
    message: "Hello from the client loader! - Client",
    serverData,
  };
}

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <Link
        to="/auth/testing-args"
        className="text-blue-500 underline text-2xl"
      >
        Go to Testing Args Page
      </Link>
    </div>
  );
}
