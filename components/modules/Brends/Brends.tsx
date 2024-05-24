import styles from "./brends.module.css";
import { brendsData } from "@/constants";

const Brends = () => {
    return (
        <section className={styles.brends}>
            <div className="container">
                <h2 className={styles.brends__title}>Our Brands</h2>
                <div className={styles.brends__content}>
                    {brendsData.map(({ id, img }) => (
                        <div key={id}>
                            <img src={img} alt="Brend" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brends;
