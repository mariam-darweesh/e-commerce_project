import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductsList from "../components/products/ProductsList";
import useProducts from "../hooks/useProducts";

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
      <Navbar />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              New Collection
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Discover Products That Match Your Style
            </h1>

            <p className="mt-4 max-w-lg text-base text-gray-600">
              Browse trending products, great prices, and a smooth shopping
              experience.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                to="/products"
                className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="rounded-2xl border border-gray-300 bg-white px-6 py-3 font-semibold hover:bg-gray-100"
              >
                Explore Deals
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
              alt="Shopping banner"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

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

      <Footer />
    </div>
  );
}