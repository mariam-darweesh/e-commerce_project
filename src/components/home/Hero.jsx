import { Link } from "react-router-dom";
export default function Hero(){
    return (
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
    )
}