import styles from "./banner.module.css";

const Banner = ({ children }) => {
    return (
        <div
            className={styles.banner}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            {children}
        </div>
    );
};

export default Banner;
