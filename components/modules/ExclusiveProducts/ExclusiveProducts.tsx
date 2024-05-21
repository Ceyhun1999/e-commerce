import { getProducts } from "@/services/getProducts";
import { Suspense } from "react";

import SectionProducts from "../SectionProducts/SectionProducts";
function Loading() {
    return <h2>🌀 Loading...</h2>;
}

const ExclusiveProducts = async () => {
    const products = await getProducts();
    return <SectionProducts title="Exclusive Products" products={products} />;
};

export default ExclusiveProducts;
