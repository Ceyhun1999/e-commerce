import styles from "./sectionCat.module.css";

const SectionCat = () => {
    return (
        <ul className={styles.sectionCat}>
            <li>Best Sellers</li>
            <li>Featured</li>
            <li>New Arrival</li>
            <li>Special Offer</li>
        </ul>
    );
};

export default SectionCat;
