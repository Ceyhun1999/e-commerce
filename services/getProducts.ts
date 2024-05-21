import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios("https://jsonplaceholder.typicode.com/posts");
        const data = response.data;
        return data;
    } catch (error) {
        console.log('erro1');
    }
}
    