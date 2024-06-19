"use client";

import Link from "next/link";
import styles from "./style.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import TestProducts from "@/components/modules/TestProducts/TestProducts";
import { categories } from "@/constants";
import { IProductItem } from "@/types";
import PriceRangeFilter from "@/components/elements/PriceRangeFilter/PriceRangeFilter";
import React, { useState } from "react";
import SortHandler from "@/components/elements/SortHandler/SortHandler";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const CategoryItemPage = ({ category, data }: { category: string; data: IProductItem[] }) => {
    const [price, setPrice] = useState<number[]>([0, 20000]);
    const modalStatus = useSelector((state: RootState) => state.categoryItemPageReducer.modalProductStatus);
    const modalProductData = useSelector((state: RootState) => state.categoryItemPageReducer.modalProductData);

    return (
        <section>
            <div className={styles.breadcrumb}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <h2> Category: {category}</h2>
                </div>
            </div>
            <div
                className="container"
                style={{
                    maxWidth: "1200px",
                    padding: "70px 0",
                    display: "grid",
                    gridTemplateColumns: "20% 80%",
                    gap: "50px",
                }}
            >
                <div className={styles.category}>
                    <div>
                        <h3>Product Categories</h3>
                        <ul>
                            {categories.map(({ title, categoryName }, index) => (
                                <li key={title + index}>
                                    <Link href={`/electronic/${categoryName.toLowerCase()}`} scroll={false}>
                                        <IoMdArrowDropright />
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <PriceRangeFilter price={price} setPrice={setPrice} />
                </div>
                <div>
                    <SortHandler />
                    <TestProducts data={data} />
                </div>
            </div>
            <Modal open={modalStatus} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <Swiper slidesPerView={1}>
                            {modalProductData?.imgs.map((img) => {
                                return (
                                    <SwiperSlide>
                                        <Image  src={img} alt="Slide img"/>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </section>
    );
};

export default CategoryItemPage;
