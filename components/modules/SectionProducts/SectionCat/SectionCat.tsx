import { catSectionData } from "@/constants";
import styles from "./sectionCat.module.css";

const SectionCat = ({ onHandleChangeCategory }: { onHandleChangeCategory: (category: string) => void }) => {
    return (
        <ul className={styles.sectionCat}>
            {catSectionData.map(({ id, category }) => (
                <li key={id} onClick={() => onHandleChangeCategory(category)}>
                    {category}
                </li>
            ))}
        </ul>
    );
};

export default SectionCat;
