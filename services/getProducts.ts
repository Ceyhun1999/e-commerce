import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios("http://localhost:3001/products");
        const data = response.data;
        return data;
    } catch (error) {
        console.log('erro1');
    }
}
    