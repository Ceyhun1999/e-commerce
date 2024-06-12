import Search from "@/components/elements/Search/Search";
import styles from "./header.module.css";
import User from "./User/User";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner} container`}>
                <Link href={"/"}>
                    <img src="/img/blackLogo.png" alt="Logo" />
                </Link>
                <Search />
                <User />
            </div>
        </header>
    );
};

export default Header;
