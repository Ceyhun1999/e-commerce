import styles from "./sectionProducts.module.css";
import SectionCat from "./SectionCat/SectionCat";
import { getProducts } from "@/services/getProducts";

const SectionProducts = async ({ title }: { title: string }) => {
    const products = await getProducts();
    return (
        <section className={styles.sectionProducts}>
            <div className={styles.sectionProducts__title}>
                <h2>{title}</h2>
                <SectionCat />
            </div>
            {products.map((item: any, index) => (
                <div key={item.name + index}>{item.title}</div>
            ))}
        </section>
    );
};

export default SectionProducts;
