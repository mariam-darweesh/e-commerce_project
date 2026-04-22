const BASE_URL = "https://dummyjson.com/products";

export async function getProducts() {
    const response = await fetch(BASE_URL);

    if(!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}
