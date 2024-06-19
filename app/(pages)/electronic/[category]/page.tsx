import CategoryItemPage from "@/components/pages/CategoryItemPage/CategoryItemPage";

const getProducts = async (category: string) => {
    const response = await fetch(`http://localhost:3001/products?category=${category}`, {
        cache: "no-cache",
    });
    const data = await response.json();
    return data;
};
const Electronic = async ({ params: { category } }: { params: { category: string } }) => {
    const data = await getProducts(category);
    return <CategoryItemPage data={data} category={category} />;
};

export default Electronic;
