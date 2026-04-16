import { Link } from "react-router-dom";
import useCart from '../../hooks/useCart'

export default function ProductCard({ product }){
  const { addItem } = useCart();
  
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="p-5">
        {/* <p className="text-sm text-gray-500">{product.category}</p> */}
        <Link to={`/products/${product.id}`}>
          <h3 className="mt-1 text-lg font-semibold">{product.title}</h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="mt-2 text-xl font-bold text-blue-600">${product.price}</p>

          <button
            onClick={() => addItem(product)}
            className="rounded-2xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  )
}