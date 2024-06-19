import { IProductItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface categoryItemPageState {
    products: IProductItem[];
    filteredProducts: IProductItem[];
    modalProductStatus: boolean;
    modalProductData: any;
}

const initialState: categoryItemPageState = {
    products: [],
    filteredProducts: [],
    modalProductStatus: false,
    modalProductData: {},
};

export const categoryItemPageSlice = createSlice({
    name: "categoryItemPage",
    initialState,
    reducers: {
        productDataReducer: (state, { payload }) => {
            state.products = payload;
            state.filteredProducts = payload;
        },

        filterByPriceRange: (state, { payload }) => {
            let filteredProducts = state.products.filter((product) => {
                if (Array.isArray(product.price)) {
                    if (product.price[0] >= payload[0] && product.price[0] <= payload[1]) {
                        return true;
                    }
                } else {
                    if (product.price >= payload[0] && product.price <= payload[1]) {
                        return true;
                    }
                }
            });
            state.filteredProducts = filteredProducts;
        },

        sortProducts: (state, { payload }) => {
            let sortedProducts;
            if (payload === "rating") {
                sortedProducts = state.filteredProducts.sort((a, b) => {
                    return b.star - a.star;
                });
            } else if (payload === "lowHigh" || payload === "highLow") {
                let newArray = state.filteredProducts.map((item) => {
                    if (Array.isArray(item.price)) {
                        return { ...item, price: item.price[1] };
                    } else {
                        return item;
                    }
                });
                let newArraySorted;
                if (payload === "lowHigh") {
                    newArraySorted = newArray.sort((a, b) => {
                        return a.price - b.price;
                    });
                } else {
                    newArraySorted = newArray.sort((a, b) => {
                        return b.price - a.price;
                    });
                }
                sortedProducts = newArraySorted.map((item1) =>
                    state.filteredProducts.find((item2) => item2.id === item1.id)
                );
            } else {
                sortedProducts = state.filteredProducts;
            }

            state.filteredProducts = sortedProducts;
        },

        openModal: (state, { payload }) => {
            state.modalProductStatus = true;
            console.log(payload);
            
            state.modalProductData = { ...payload };
        },
    },
});

export const { productDataReducer, filterByPriceRange, sortProducts, openModal } = categoryItemPageSlice.actions;
export default categoryItemPageSlice.reducer;
