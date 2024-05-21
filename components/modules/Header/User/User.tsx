import { CiShoppingCart, CiUser } from "react-icons/ci";
import styles from "./user.module.css";

const User = () => {
    return (
        <div className={styles.user__block}>
            <CiUser size={25} />
            <div className={styles.cart}>
                <CiShoppingCart size={25} />
                <span>0</span>
            </div>
        </div>
    );
};

export default User;
