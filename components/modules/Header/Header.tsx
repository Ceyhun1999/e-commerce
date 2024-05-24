import Search from "@/components/elements/Search/Search";
import styles from "./header.module.css";
import User from "./User/User";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner} container`}>
                <img src="/img/blackLogo.png" alt="Logo" />
                <Search />
                <User />
            </div>
        </header>
    );
};

export default Header;
