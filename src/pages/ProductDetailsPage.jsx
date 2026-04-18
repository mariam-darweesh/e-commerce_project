import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PageContainer from "../components/layout/PageContainer";
import LoadingState from "../components/ui/LoadingState";
import ErrorState from "../components/ui/ErrorState";
import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { addItem } = useCart();

  if (loading) {
    return (
      <Layout>
        <PageContainer>
          <LoadingState text="Loading product..." />
        </PageContainer>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <PageContainer>
          <ErrorState message={error} />
        </PageContainer>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <PageContainer>
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h1 className="text-2xl font-bold">Product not found</h1>
            <p className="mt-2 text-gray-600">
              The product you are looking for does not exist.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Back to Products
            </Link>
          </div>
        </PageContainer>
      </Layout>
    );
  }

  const productImage = product.images?.[0] || product.thumbnail;

  return (
    <Layout>
      <PageContainer>
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-[320px] items-center justify-center rounded-2xl bg-gray-50 md:h-[420px]">
              <img
                src={productImage}
                alt={product.title}
                className="max-h-[85%] max-w-[85%] object-contain"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-medium capitalize text-blue-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {product.title}
            </h1>

            {product.rating && (
              <p className="mt-3 text-sm text-gray-600">
                ⭐ {product.rating} / 5
              </p>
            )}

            <p className="mt-5 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mt-8 text-3xl font-bold text-gray-900">
              ${product.price}
            </p>

            <button
              onClick={() => addItem(product)}
              className="mt-8 inline-flex w-fit items-center rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </PageContainer>
    </Layout>
  );
}