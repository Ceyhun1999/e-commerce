import { Suspense } from "react";
import SectionProducts from "../SectionProducts/SectionProducts";

function Loading() {
    return <h2>🌀 Loading...</h2>;
}

const ExclusiveProducts = () => {
    return (
        <Suspense fallback={<Loading />}>
            <SectionProducts title="Exclusive Products" />
        </Suspense>
    );
};

export default ExclusiveProducts;
