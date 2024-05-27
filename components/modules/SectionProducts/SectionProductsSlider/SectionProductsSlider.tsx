"use client";

import Image from "next/image";
import styles from "./sectionProductsSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Pagination } from "swiper/modules";
import { BsCart4 } from "react-icons/bs";
import { CiZoomIn } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/getProducts";
import Loading from "@/components/Loading";

const SectionProductsSlider = ({ category }: { category: string }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const products = await getProducts(category);
                setProducts(products);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        fetchData();
    }, [category]);

    if (loading) {
        return <Loading height={400} />;
    }

    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            modules={[Pagination]}
            style={{
                marginBottom: "50px",
                padding: "20px",
            }}
            className={styles.productsSlider}
        >
            {products?.map((item) => (
                <SwiperSlide key={item.id} className={styles.productSlide}>
                    <ul className={styles.slideCart__actions}>
                        <li>
                            <BsCart4 size={18} />
                        </li>
                        <li>
                            <IoIosHeartEmpty size={18} />
                        </li>
                        <li>
                            <CiZoomIn size={20} />
                        </li>
                    </ul>
                    <div>
                        <Image
                            style={{
                                objectFit: "contain",
                            }}
                            src={item.imgs[0]}
                            width={250}
                            height={250}
                            alt={item.name}
                        />
                        <Image
                            className={styles.img2}
                            style={{
                                objectFit: "contain",
                                position: "absolute",
                            }}
                            src={item.imgs[1]}
                            width={250}
                            height={250}
                            alt={item.name}
                        />
                        <div style={{ padding: "0 20px 20px 20px" }}>
                            <h3 className={styles.productName}>{item.name}</h3>
                            <span className={styles.productPrice}>
                                <span
                                    style={{
                                        textDecoration: `${item.price instanceof Array && "line-through"}`,
                                        paddingRight: "10px",
                                    }}
                                >
                                    {item.price instanceof Array ? item.price[0] : item.price}$
                                </span>
                                {item.price instanceof Array && (
                                    <span style={{ color: "#FF324D" }}>${item.price[1]}$</span>
                                )}
                            </span>
                            <div>
                                {Array.from({ length: item.star }).map((_, index) => (
                                    <MdOutlineStar key={index} size={18} color="#F6BC3E" />
                                ))}

                                {Array.from({ length: 5 - item.star }).map((_, index) => (
                                    <MdOutlineStarBorder key={index + item.star} size={18} color="#cccccc" />
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SectionProductsSlider;
