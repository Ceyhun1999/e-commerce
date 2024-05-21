import { IoMenuOutline } from "react-icons/io5";
import styles from "./style.module.css";
import { categories } from "@/constants";

const Sidebar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <IoMenuOutline size={30} color="#fff" />
                    All Categories
                </li>
                {categories.map(({ title, icon }, index) => (
                    <li key={title + index}>
                        {icon}
                        {title}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
