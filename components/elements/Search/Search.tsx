"use client";

import { LuSearch } from "react-icons/lu";
import styles from "./search.module.css";
import { categories } from "@/constants";

const Search = () => {
    return (
        <div className={styles.search__block}>
            <div className={styles.select__block}>
                <select className={styles.select} name="" id="">
                    <option
                        style={{
                            color: "#666",
                        }}
                        value=""
                    >
                        All Category
                    </option>
                    {categories.map(({ title }, index) => (
                        <option key={title + index} value={title}>
                            {title}
                        </option>
                    ))}
                </select>
                <span className={styles.select__arrow}></span>
            </div>
            <div className={styles.input__block}>
                <input type="text" placeholder="Search" />
                <button>
                    <LuSearch color="#fff" size={20} />
                </button>
            </div>
        </div>
    );
};

export default Search;
