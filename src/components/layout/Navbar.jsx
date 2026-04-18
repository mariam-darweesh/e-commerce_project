import { Link } from "react-router-dom";
import { Menu, ShoppingBag, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import useCart from "../../hooks/useCart";

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <ShoppingBag className="h-6 w-6 text-blue-600" />
          <span>Velora</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-md font-medium transition hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/products"
            className="text-md font-medium transition hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            to="/checkout"
            className="text-md font-medium transition hover:text-blue-600"
          >
            Checkout
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-900 px-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-xl border border-gray-300 p-2 transition hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-gray-100 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-gray-100 hover:text-blue-600"
            >
              Products
            </Link>

            <Link
              to="/checkout"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-gray-100 hover:text-blue-600"
            >
              Checkout
            </Link>

            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-gray-100 hover:text-blue-600"
            >
              Cart ({totalItems})
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
