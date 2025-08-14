import { Form, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";

export async function action({ request }: Route.ActionArgs) {
  await sleep(3000);
  const data = await request.formData();
  //data.get("title")

  console.log("Server Action Data:");
  console.log(data);
  return { ok: true, message: "todo bien desde el serverAction" };
}

export async function clientAction({
  serverAction,
  request,
}: Route.ClientActionArgs) {
  await sleep(1500);

  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData);
  // can still call the server action if needed
  const data = await serverAction();
  //return data;
  return { message: "Hello from the client action! - Client", data, allData };
}

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
  const navigation = useNavigation();
  const isPosting = navigation.state === "submitting";

  console.log(isPosting);

  return (
    <div>
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <NavLink
        to="/auth/testing-args/ABC-123"
        className={({ isPending }) =>
          isPending
            ? "mt-3 text-red-500 underline text-2xl"
            : "mt-3 text-blue-500 underline text-2xl"
        }
      >
        Go to Testing Args Page
      </NavLink>
      <Form className="mt-6 flex flex-col gap-4 w-80" method="post">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          name="age"
          placeholder="Edad"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={isPosting}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
        >
          {isPosting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
}
