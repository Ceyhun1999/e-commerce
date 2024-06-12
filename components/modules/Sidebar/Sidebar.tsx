import { IoMenuOutline } from "react-icons/io5";
import styles from "./style.module.css";
import { categories } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <IoMenuOutline size={30} color="#fff" />
                    All Categories
                </li>
                {categories.map(({ title, icon,categoryName }, index) => (
                    <li key={title + index}>
                        <Link href={`/electronic/${categoryName.toLowerCase()}`}>
                            {icon}
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
