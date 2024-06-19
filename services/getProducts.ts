import axios from "axios";

export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const response = await axios("http://localhost:3001/products");
    const data = await response.data;
    return data;
}

export async function getSliderProducts() {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const response = await axios("http://localhost:3001/sliderProducts");
    const data = await response.data;
    return data;
}
