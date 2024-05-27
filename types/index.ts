import React from "react";

export interface ICategoryItem {
    title: string;
    icon: React.ReactNode;
}

export interface IProductItem {
    id: number;
    name: string;
    price: number;
    imgs: string[];
}

export interface IBrendsItem {
    img: string;
    id: number;
}

export interface ICatSectionItem {
    id: number;
    category: string;
}
