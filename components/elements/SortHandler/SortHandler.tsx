import { useDispatch } from "react-redux";
import styles from "./style.module.css";
import { sortProducts } from "@/redux/features/categoryItemPageSlice";

const SortHandler = () => {
    const dispatch = useDispatch();

    return (
        <select className={styles.select} onChange={(e) => dispatch(sortProducts(e.target.value))}>
            <option value="rating">Sort by popularity</option>
            <option value="lowHigh">Sort by price: low to high</option>
            <option value="highLow">Sort by price: high to low</option>
            <option value="">4</option>
        </select>
    );
};

export default SortHandler;
