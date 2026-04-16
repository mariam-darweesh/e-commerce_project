const BASE_URL = "https://dummyjson.com/products";

export async function getProducts() {
    const response = await fetch(BASE_URL);

    if(!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}

export async function getProductById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch the product");
    }
    return response.json();
}