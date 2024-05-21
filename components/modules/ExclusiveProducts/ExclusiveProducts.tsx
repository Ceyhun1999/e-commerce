import { getProducts } from "@/services/getProducts";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import SectionProducts from "../SectionProducts/SectionProducts";
function Loading() {
    return <h2>🌀 Loading...</h2>;
}

const ExclusiveProducts = async () => {
    return (
        <Suspense fallback={<Loading />}>
            <SectionProducts title="Exclusive Products" />
        </Suspense>
    );
};

export default ExclusiveProducts;
