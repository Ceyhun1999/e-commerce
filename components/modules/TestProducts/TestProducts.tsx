'use client'
import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const TestProducts = ({products}) => {
    const [data, setData] = useState(products)
    
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "30px" }}>
            {products.map((item) => (
                <ProductCard item={item} key={item.index} />
            ))}
        </div>
    );
};

export default TestProducts;
