import { useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import LoadingState from "../components/ui/LoadingState";
import ErrorState from "../components/ui/ErrorState";
import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";


export default function ProductDetailsPage() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { addItem } = useCart();

  if(loading) return <LoadingState text="Loading product..." />
  if(error) return <ErrorState message={error} />
  if(!product) return <div className="p-10 text-center">Product not found.</div>

  return (
    <main className="bg-gray-50 py-10">
      <PageContainer>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">{product.category}</p>
            <h1 className="mt-2 text-3xl font-bold">{product.title}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-6 text-2xl font-bold text-blue-600">${product.price}</p>

            <button
                onClick={() => addItem(product)}
                className="mt-6 rounded-2xl bg-gray-900 px-6 py-3 text-white hover:bg-black"
              >
                Add to Cart
              </button>
          </div>
        </div>
      </PageContainer>

    </main>
  )
}