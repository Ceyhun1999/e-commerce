"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./mainSlider.module.css";
import { getSliderProducts } from "@/services/getProducts";
import { ISliderProduct } from "@/types";
import Loading from "@/components/Loading";

const MainSlider = () => {
    const [sliderProducts, setSliderProducts] = useState<ISliderProduct[]>([]);
    const [activeIndexSlide, setActiveIndexSlide] = useState(0);
    const [loading, setLoading] = useState<boolean>(true);
    const handleSlideChange = (swiper: any) => setActiveIndexSlide(swiper.activeIndex);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getSliderProducts();
                setSliderProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <Loading height={"100vh"} />;
    }

    return (
        <Swiper
            effect={"fade"}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            speed={500}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="bg-[##f5f5f5] w-full"
        >
            {sliderProducts.map(({ desc, name, img, price, id }) => (
                <SwiperSlide
                    className="!flex !items-center !pl-5 !justify-between !gap-5 !bg-[#f5f5f5] w-full"
                    key={id}
                >
                    <div className={`${activeIndexSlide === 0 ? styles.animation : ""}`}>
                        <h4 className="font-light mb-3 text-xl text-[#292b2c]">{desc}</h4>
                        <h3 className="mb-3 text-4xl text-[#292b2c]">{name}</h3>
                        <p className="text-2xl font-medium">
                            <span className="text-red-500 mr-2 inline-block">${price[0]}</span>
                            <span className="text-[#919191] line-through">${price[1]}</span>
                        </p>
                        <Link
                            className="text-white uppercase font-medium bg-[#FF324D] rounded-2xl px-8 py-4 inline-block mt-3 duration-300 border border-solid border-transparent hover:bg-white hover:text-[#FF324D]
                            hover:border-[#FF324D]"
                            href={""}
                        >
                            Shop now
                        </Link>
                    </div>
                    <Image width={600} height={600} src={img} alt={name} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSlider;
