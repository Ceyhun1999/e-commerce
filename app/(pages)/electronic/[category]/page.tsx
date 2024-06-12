import ProductCard from "@/components/modules/ProductCard/ProductCard";
import styles from "./style.module.css";
import { categories } from "@/constants";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import TestProducts from "@/components/modules/TestProducts/TestProducts";

const getProducts = async (category: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`http://localhost:3001/products?category=${category}`, {
        cache: 'no-cache'
    });
    const data = await response.json();
    return data;
}
const Electronic = async ({ params: { category } }: { params: { category: string } }) => {
    const products = await getProducts(category);

    return (
        <section>
            <div className={styles.breadcrumb}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <h2> Category: {category}</h2>
                </div>
            </div>
            <div className="container" style={{ maxWidth: "1200px", padding: "70px 0", display: 'flex', gap:'50px'}}>
                <div>
                    <h3>Product Categories</h3>
                    <ul className={styles.category}>
                        {categories.map(({ title,categoryName }, index) => (
                            <li key={title + index}>
                                <Link href={`/electronic/${categoryName.toLowerCase()}`} scroll={false}>
                                    <IoMdArrowDropright />
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <TestProducts products={products}/>
            </div>
        </section>
    );
};

export default Electronic;
