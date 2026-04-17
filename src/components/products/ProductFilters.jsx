import { useMemo, useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductsList from "./ProductsList";

export default function ProductFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const { products, loading, error } = useProducts();

  const categories = useMemo(() => {
    const allCategories = products.map((product) => product.category);
    return ["all", ...new Set(allCategories)];
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim() !== "") {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "price-low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name-a-z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-z-a") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [products, selectedCategory, searchTerm, sortBy]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6">
        <h3 className="mt-2 text-sm text-gray-600">
          Search, filter, and sort products from our collection.
        </h3>
      </div>

      <div className="mb-8 rounded-2xl bg-white p-4 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label
              htmlFor="search"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-gray-700 mr-4"
            >
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="sort"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {loading && <p className="text-gray-600">Loading products...</p>}

      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <>
          <p className="mb-6 text-sm text-gray-600">
            Showing{" "}
            <strong className="text-gray-900">
              {filteredAndSortedProducts.length}
            </strong>{" "}
            products
          </p>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <h2 className="text-xl font-semibold">No products found</h2>
              <p className="mt-2 text-gray-600">
                Try changing your search or category filter.
              </p>
            </div>
          ) : (
            <ProductsList products={filteredAndSortedProducts} />
          )}
        </>
      )}
    </section>
  );
}