"use client";

import Image from "next/image";
import styles from "./sectionProductsSlider.module.css";

import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { CiZoomIn } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/getProducts";
import Loading from "@/components/Loading";
import ProductCard from "../../ProductCard/ProductCard";

const SectionProductsSlider = ({ category }: { category: string }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const products = await getProducts();
                if (!ignore) {
                    setProducts(products);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        let ignore = false;
        fetchData();

        return () => {
            ignore = true;
        };
    }, [category]);

    if (loading) {
        return <Loading height={400} />;
    }

    return (
        <div className={styles.products}>
            {products?.map((item) => (
                <ProductCard key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default SectionProductsSlider;
