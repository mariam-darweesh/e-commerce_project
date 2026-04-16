import { Link } from 'react-router-dom';
import PageContainer from './PageContainer';
import useCart from "../../hooks/useCart";

export default function NavBar() {
    const { totalItems } = useCart();
    return (
        <header className='border-b bg-white'>
            <PageContainer>
                <div className="flex item-center justify-between py-4">
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        SHOPIFY 
                    </Link>

                    <nav className='hidden gap-6 md:flex'>
                        <Link to="/" className="text-md text-bold font-medium hover:text-blue-600">
                            Home
                        </Link>
                        <Link to="/products" className="text-md text-bold font-medium hover:text-blue-600">
                            Products
                        </Link>
                        <Link to="/cart" className="text-md text-bold font-medium hover:text-blue-600">
                            Cart
                        </Link>
                        <Link to="/checkout" className="text-md text-bold font-medium hover:text-blue-600">
                            Checkout
                        </Link>
                    </nav>

                    <Link to="/cart"  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700" >
                        Cart ({totalItems})
                    </Link>
                </div>
            </PageContainer>
        </header>
    )
}