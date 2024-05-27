import axios from "axios";

// Функция для создания задержки
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts(cat: string = "Best Sellers") {
    // Создаем задержку в 2 секунды (2000 миллисекунд)

    const response = await axios("http://localhost:3001/products", { cahce: "no-store" });
    const data = await response.data;
    const filteredData = data.filter((item) => {
        if (item.types.includes(cat)) {
            return true;
        }
    });
    return filteredData;
}
