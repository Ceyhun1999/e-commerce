import Image from "next/image";
import styles from "./style.module.css";
import { CiZoomIn } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const ProductCard = ({item}) => {
    return (
        <div key={item.id} className={styles.productsItem}>
            <ul className={styles.productsItem__actions}>
                <li>
                    <BsCart4 size={18} />
                </li>
                <li>
                    <IoIosHeartEmpty size={18} />
                </li>
                <li>
                    <CiZoomIn size={20} />
                </li>
            </ul>
            <div>
                <div className={styles.productsImg}>
                    <Image
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            position: "relative",
                            top: 0,
                        }}
                        src={item.imgs[0]}
                        width={250}
                        height={250}
                        alt={item.name}
                    />
                    <Image
                        className={styles.img2}
                        style={{
                            objectFit: "contain",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                        }}
                        src={item.imgs[1]}
                        width={250}
                        height={250}
                        alt={item.name}
                    />
                </div>
                <div style={{ padding: "0 20px 20px 20px" }}>
                    <h3 className={styles.productName}>{item.name}</h3>
                    <span className={styles.productPrice}>
                        <span
                            style={{
                                textDecoration: `${item.price instanceof Array && "line-through"}`,
                                paddingRight: "10px",
                            }}
                        >
                            {item.price instanceof Array ? item.price[0] : item.price}$
                        </span>
                        {item.price instanceof Array && <span style={{ color: "#FF324D" }}>${item.price[1]}$</span>}
                    </span>
                    <div>
                        {Array.from({ length: item.star }).map((_, index) => (
                            <MdOutlineStar key={index} size={18} color="#F6BC3E" />
                        ))}

                        {Array.from({ length: 5 - item.star }).map((_, index) => (
                            <MdOutlineStarBorder key={index + item.star} size={18} color="#cccccc" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
