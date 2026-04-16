import ProductCard from "./productCard";

export default function ProductsList ({ products, onAddToCart }){
    if (!products.length) {
    return <p className="text-gray-600">No products found.</p>;
  }
  
    return(
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart} 
                />
            ))}
        </div>
    )
    
}