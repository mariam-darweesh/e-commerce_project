import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">Page not found.</p>

      <Link
        to="/"
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}