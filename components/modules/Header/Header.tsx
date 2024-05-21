import Search from "@/components/elements/Search/Search";
import Image from "next/image";
import styles from "./header.module.css";
import User from "./User/User";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner} container`}>
                <Image src="/img/blackLogo.png" width={320} height={50} alt="Logo" />
                <Search />
                <User />
            </div>
        </header>
    );
};

export default Header;
