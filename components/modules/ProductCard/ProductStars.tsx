import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const ProductStars = ({ star }: { star: number }) => {
    return (
        <div className="flex">
            {Array.from({ length: star }).map((_, index) => (
                <MdOutlineStar key={index} size={18} color="#f6bc3e" />
            ))}

            {Array.from({ length: 5 - star }).map((_, index) => (
                <MdOutlineStarBorder key={index + star} size={18} color="#cccccc" />
            ))}
        </div>
    );
};

export default ProductStars;
