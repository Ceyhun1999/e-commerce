const ProductPrice = ({ price }: { price: number | number[] }) => {
    return (
        <span className="text-[#646a7c]">
            <span
                style={{
                    textDecoration: `${Array.isArray(price) && "line-through"}`,
                    paddingRight: "10px",
                }}
            >
                {typeof price === "object" && Array.isArray(price) ? price[0] : price}$
            </span>
            {Array.isArray(price) && <span className="text-[#ff324d]">${price[1]}$</span>}
        </span>
    );
};

export default ProductPrice;
