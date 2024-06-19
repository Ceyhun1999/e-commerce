import React from "react";

export interface ICategoryItem {
    title: string;
    icon: React.ReactNode;
    categoryName: string;
}

export interface IProductItem {
    id: number;
    name: string;
    price: number | number[];
    imgs: string[];
    star: number;
}

export interface IBrendsItem {
    img: string;
    id: number;
}

export interface IProductsCategory {
    id: number;
    category: string;
}

export interface ISliderProduct {
    id: number;
    name: string;
    desc: string;
    price: number[];
    img: string;
}
