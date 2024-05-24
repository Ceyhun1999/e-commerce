"use client";
import styles from "./banner.module.css";

const Banner = ({ children, className }: { children: React.ReactNode; className: string }) => {
    return (
        <section
            className={styles.banner}
            style={{
                display: "flex",
                flexDirection: `${className === "column" ? "column" : "row"}`,
                justifyContent: "space-between",
                alignItems: "center",
                gap: '40px'
            }}
        >
            {children}
        </section>
    );
};

export default Banner;
