import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useCart from "../hooks/useCart";

export default function CartPage() {
  const {
    cartItems,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Your Cart</h1>

          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="rounded-xl border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-gray-600">
              Add some products to get started.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="mt-1 text-sm text-gray-600">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-10 w-10 rounded-xl border border-gray-300 hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-10 w-10 rounded-xl border border-gray-300 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <div className="min-w-24 text-right">
                    <p className="font-bold text-blue-600">
                      ${item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-sm font-medium text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${totalPrice}
                </span>
              </div>

              <Link
                to="/checkout"
                className="mt-6 block rounded-2xl bg-gray-900 px-6 py-3 text-center font-semibold text-white hover:bg-black"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}