"use client";

import styles from "./sectionProducts.module.css";
import SectionCat from "./SectionCat/SectionCat";
import SectionProductsSlider from "./SectionProductsSlider/SectionProductsSlider";
import { useState } from "react";

const SectionProducts = ({ title, catData }: { title: string; catData: string }) => {
    const [category, setCategory] = useState<string>(catData);
    const onHandleChangeCategory = (category: string) => setCategory(category);

    return (
        <section className={styles.sectionProducts}>
            <div className={styles.sectionProducts__title}>
                <h2>{title}</h2>
                <SectionCat onHandleChangeCategory={onHandleChangeCategory} />
            </div>
            <SectionProductsSlider category={category} />
        </section>
    );
};

export default SectionProducts;
