import useProducts from "../hooks/useProducts";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductsList from "../components/products/ProductsList";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold">Products</h1>

        {loading && <p className="text-gray-600">Loading products...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && <ProductsList products={products} />}
      </main>

      <Footer />
    </div>
  );
}


// import { useEffect, useMemo, useState } from "react";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("default");


//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//           setLoading(true);
//           setError("");

//           const response = await fetch("https://dummyjson.com/products");
//           if (!response.ok) {
//             throw new Error("Failed to fetch products");
//           }

//           const data = await response.json();
//           setProducts(data.products || []);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//             finally{
//                 setLoading(false);
//             }
//     }

//     fetchProducts();
//   }, []);   

//     const categories =useMemo(() => {
//     const allCategories = products.map((product) => product.category);
//         return ["all", ...new Set(allCategories)];
//     }, [products]);

//     const filteredAndSortedProducts = useMemo(() => {
//         let result = [...products];

//         if(selectedCategory !== "all"){
//             result = result.filter((product) => product.category === selectedCategory)
//         }
//         if(searchTerm.trim() !== "") {
//             result = result.filter((product) => 
//                 product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
//             );
//         }
//         if(sortBy === "price-low-high"){
//             result.sort((a, b) => a.price - b.price)
//         } else if (sortBy === "price-high-low"){
//             result.sort((a, b) => b.price - a.price)
//         } else if(sortBy === "rating"){
//             result.sort((a, b) => b.rating - a.rating)
//         }

//         return result;
//     }, [products, selectedCategory, searchTerm]);

//     return(
//         <div style={{padding: '24px', maxWidth:'1100px', margin: '0 auto' }}>
//             <h1>Products</h1>

//             <div style={{display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap'}}>
//                 <input 
//                     type="text" 
//                     placeholder="Search products..." 
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     style={{padding: '8px', minWidth: '220px'}}
//                 />

//                 <select 
//                     value={selectedCategory}
//                     onChange={(e) => setSelectedCategory(e.target.value)}
//                     style={{padding: '8px', minWidth: '160px'}}
//                     >
//                         {categories.map((category) => (
//                             <option key={category} value={category}>
//                                 {category}
//                             </option>
//                         ))}
//                 </select>
//                 <select 
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     style={{padding: '8px', minWidth: '160px'}}
//                 >
//                     <option value="default">Default</option>
//                     <option value="price-low-high">Price: Low to High</option>
//                     <option value="price-high-low">Price: High to Low</option>
//                     <option value="rating">Top Rated</option>
//                 </select>
//             </div>

//             {loading && <p>Loading products...</p>}
//             {error && <p style={{color: 'red'}}>Error: {error}</p>}

//             {!loading && !error && (
//                 <>
//                     <p>
//                         Showing <strong>{filteredAndSortedProducts.length}</strong> products
//                     </p>
//                     <div 
//                         style={{
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//                             gap: '16px'
//                         }}>
//                             {filteredAndSortedProducts.map((product) => (
//                                 <div  
//                                     key={product.id}
//                                     style={{
//                                         border: "1px solid #ddd",
//                                         borderRadius: "12px",
//                                         padding: "16px",
//                                     }}>
//                                            <img
//                                                 src={product.thumbnail}
//                                                 alt={product.title}
//                                                 style={{
//                                                     width: "100%",
//                                                     height: "160px",
//                                                     objectFit: "cover",
//                                                     borderRadius: "8px",
//                                                     marginBottom: "12px",
//                                                 }}
//                                             />

//                                             <h3 style={{ margin: "0 0 8px" }}>{product.title}</h3>
//                                             <p style={{ margin: "0 0 8px", color: "#666" }}>
//                                                 {product.category}
//                                             </p>
//                                             <p style={{ margin: "0 0 8px" }}>${product.price}</p>
//                                             <p style={{ margin: "0 0 12px" }}>⭐ {product.rating}</p>

//                                             <button style={{ padding: "8px 12px" }}>
//                                                 Add to Cart
//                                             </button>
//                                     </div>
//                             ))}
//                         </div>
//                 </>)}
//         </div>
//     )



// }
