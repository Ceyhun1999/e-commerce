import styles from "./sectionProducts.module.css";
import SectionCat from "./SectionCat/SectionCat";
import SectionProductsSlider from "./SectionProductsSlider/SectionProductsSlider";
import { getProducts } from "@/services/getProducts";

const SectionProducts = async ({ title }: { title: string }) => {
    const products = await getProducts();
    return (
        <section className={styles.sectionProducts}>
            <div className={styles.sectionProducts__title}>
                <h2>{title}</h2>
                <SectionCat />
            </div>
            <SectionProductsSlider products={products} />
        </section>
    );
};

export default SectionProducts;
