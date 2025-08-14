import { Link } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";

export function meta() {
  return [
    { title: "Support Chat" },
    {
      property: "og:title",
      content: "Support Chat",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    // {
    //   rel: "icon",
    //   href: "/favicon.png",
    //   type: "image/png",
    // },
    // {
    //   rel: "stylesheet",
    //   href: "https://example.com/some/styles.css",
    // },
    // {
    //   rel: "preload",
    //   href: "/images/banner.jpg",
    //   as: "image",
    // },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  console.log({ params, msg: "serverLoader" });

  return { hola: "Mundo" };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  console.log({ params, msg: "CientLoader" });
  await sleep(1500);
  return { hola: "Nemesis", id: params.id };
}

export function HydrateFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
        <p className="text-xl font-semibold text-purple-700">Loading Game...</p>
      </div>
    </div>
  );
}

clientLoader.hydrate = true as const;

export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { id } = params;
  console.log(">>>>>>>>>>>>>>>>>", id);

  return (
    <div>
      <h1 className="text-3xl font-bold">Testing Args Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <Link to="/auth/testing" className="text-blue-500 underline text-2xl">
        Go to Testing Page
      </Link>
    </div>
  );
}
