import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";

export default function useProducts(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let ignore = false;

        async function fetchProducts (){
            try {
                setLoading(true);
                setError('');

                const data = await getProducts();

                if (!ignore){
                    setProducts(data.products || []);
                } 
            }
            catch (err){
                if(!ignore) {
                    setError(err.message || "something went wrong")
                }                
            } finally {
                if(!ignore){
                    setLoading(false);
                }
            }
        }

        fetchProducts();

        return () => {
            ignore = true;
        }
    }, []);
    return { products, loading, error };
}