import useProducts from "../hooks/useProducts";
import PageContainer from "../components/layout/PageContainer";
import ProductFilters from "../components/products/ProductFilters";

export default function ProductsPage() {
  const { loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <PageContainer>
        <main className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="mb-6 text-3xl font-bold">Products</h1>

          {loading && <p className="text-gray-600">Loading products...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && <ProductFilters />}
        </main>
      </PageContainer>
    </div>
  );
}
