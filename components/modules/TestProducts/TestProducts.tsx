"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { productDataReducer } from "@/redux/features/categoryItemPageSlice";
import { IProductItem } from "@/types";
import { RootState } from "@/redux/store";

const TestProducts = ({ data }: { data: IProductItem[] }) => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.categoryItemPageReducer.filteredProducts);

    useEffect(() => {
        dispatch(productDataReducer(data));
    }, [data]);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px" }}>
            {products?.map((item) => (
                <ProductCard item={item} key={item.id} />
            ))}
        </div>
    );
};

export default TestProducts;
