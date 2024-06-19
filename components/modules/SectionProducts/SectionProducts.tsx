"use client";

import { useState } from "react";

import CategoryProducts from "./CategoryProducts";
import ProductsList from "./ProductsList";

const SectionProducts = ({ title, categoryName }: { title: string; categoryName: string }) => {
    const [category, setCategory] = useState<string>(categoryName);
    const onHandleChangeCategory = (category: string) => setCategory(category);

    return (
        <section className="pl-4 w-full my-10 mx-0">
            <div className="w-full flex justify-between pb- border-t pt-5 pb-10 border-solid border-[#ddd] items-center">
                <h2 className="text-2xl">{title}</h2>
                <CategoryProducts onHandleChangeCategory={onHandleChangeCategory} />
            </div>
            <ProductsList category={category} />
        </section>
    );
};

export default SectionProducts;
