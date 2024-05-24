"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./mainSlider.module.css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const MainSlider = () => {
    const [state, setState] = useState(0);
    const handleSlideChange = (swiper: any) => setState(swiper.activeIndex);
    return (
        <Swiper
            effect={"fade"}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className={styles.mainSlider}
            speed={500}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
        >
            <SwiperSlide className={styles.swiper__slide}>
                <div className={`${state === 0 ? styles.animation : ""}`}>
                    <h4>Get up to 50% off Today Only!</h4>
                    <h3>Dual Camera 20MP</h3>
                    <p>
                        <span
                            style={{
                                color: "#FF324D",
                            }}
                        >
                            $45.00
                        </span>
                        <span> $55.25</span>
                    </p>
                    <Link href={""}>Shop now</Link>
                </div>
                <Image src="/img/sliderImg1.jpg" alt="" fill />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <div className={`${state === 1 ? styles.animation : ""}`}>
                    <h4>50% off in all products</h4>
                    <h3>Smart Watches</h3>
                    <p>
                        <span
                            style={{
                                color: "#FF324D",
                            }}
                        >
                            $45.00
                        </span>
                        <span> $55.25</span>
                    </p>
                    <Link href={""}>Shop now</Link>
                </div>
                <Image src="/img/sliderImg2.jpg" alt="" fill />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <div className={`${state === 2 ? styles.animation : ""}`}>
                    <h4>Taking your Viewing Experience to Next Level</h4>
                    <h3>Beat Headphone </h3>
                    <p>
                        <span
                            style={{
                                color: "#FF324D",
                            }}
                        >
                            $45.00
                        </span>
                        <span> $55.25</span>
                    </p>
                    <Link href={""}>Shop now</Link>
                </div>
                <Image src="/img/sliderImg3.jpg" alt="" fill />
            </SwiperSlide>
        </Swiper>
    );
};

export default MainSlider;
