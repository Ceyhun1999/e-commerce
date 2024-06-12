import axios from "axios";

export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const response = await axios("http://localhost:3001/products");
    const data = await response.data;
    return data;
}
