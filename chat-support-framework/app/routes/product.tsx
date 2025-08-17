import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
  return { name: params.name.toLocaleUpperCase() };
}

const ProductPage = ({ loaderData }: Route.ComponentProps) => {
  const { name } = loaderData;
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Producto</h1>
      <p className="text-lg text-blue-600">{name}</p>
    </div>
  );
};

export default ProductPage;
