import { Link } from "react-router-dom";
import ProductsList from "../components/products/ProductsList";
import useProducts from "../hooks/useProducts";
import PageContainer from "../components/layout/PageContainer";
import Hero from "../components/home/Hero";

export default function HomePage() {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.slice(0, 4);

  const features = [
    { id: 1, title: "Free Shipping", text: "On all orders over $50" },
    { id: 2, title: "Secure Payment", text: "100% protected checkout" },
    { id: 3, title: "Easy Returns", text: "30-day return policy" },
    { id: 4, title: "24/7 Support", text: "We’re here to help" },
  ];

  return (
   <div className="min-h-screen bg-gray-50 text-gray-900">
    <PageContainer>
      <main>
        <Hero />
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <p className="text-sm text-gray-600">
                Hand-picked items from our latest collection.
              </p>
            </div>

            <Link
              to="/products"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View All
            </Link>
          </div>

          {loading && <p className="text-gray-600">Loading products...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && <ProductsList products={featuredProducts} />}
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.text}</p>
            </div>
          ))}
        </section>
      </main>
    </PageContainer>
  </div>
  );
}