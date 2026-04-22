import { useEffect, useState } from "react";


export default function useProduct(id) {
    const [product, setProduct] = useState(null);
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => { 
        async function fetchProduct() {
            try {
                setLoading(true);
                setError('');

                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if(!response.ok) {
                    throw new Error("Failed to fetch product");
                }

                const data = await response.json();
                setProduct(data);
            } catch(err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }        
        }

        if(id){
            fetchProduct();
        }
    }, [id]);

    return { product, loading, error };
}