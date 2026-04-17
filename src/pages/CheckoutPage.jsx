import PageContainer from "../components/layout/PageContainer";
export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <PageContainer>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

        <form className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Address</label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Enter your address"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">City</label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Enter your city"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Postal Code
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Enter postal code"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Place Order
          </button>
        </form>
      </main>
     </PageContainer>
    </div>
  );
}