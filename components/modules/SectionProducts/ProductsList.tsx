"use client";

import { useEffect, useState } from "react";

import { getProducts } from "@/services/getProducts";
import { IProductItem } from "@/types";

import Loading from "@/components/Loading";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<IProductItem[]>([]);
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
        return <Loading height={"100vh"} />;
    }

    return (
        <div className="grid gap-5 grid-cols-5">
            {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
