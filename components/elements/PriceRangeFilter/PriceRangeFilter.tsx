import { Slider } from "@mui/material";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { filterByPriceRange } from "@/redux/features/categoryItemPageSlice";

const PriceRangeFilter = ({ price, setPrice }: { price: number[]; setPrice: (price: number[]) => void }) => {
    const dispatch = useDispatch();
    const handleChange = (event: any) => setPrice(event?.target?.value);

    return (
        <div className={styles.filter}>
            <h3>Filter by price</h3>
            <Slider
                style={{
                    marginTop: "10px",
                }}
                valueLabelDisplay="auto"
                getAriaLabel={() => "Temperature range"}
                value={price}
                onChange={handleChange}
                max={25000}
            />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
                <button onClick={() => dispatch(filterByPriceRange(price))}>Filter</button>
                <p style={{
                    whiteSpace: 'nowrap',
                    color: '#646a7c',
                    fontSize: '14px',
                }}> 
                    Price: {price[0]}$ - {price[1]}$
                </p>
            </div>
        </div>
    );
};

export default PriceRangeFilter;
