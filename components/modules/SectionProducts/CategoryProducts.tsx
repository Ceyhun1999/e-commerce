import { productsCategoryData } from "@/constants";

const CategoryProducts = ({ onHandleChangeCategory }: { onHandleChangeCategory: (category: string) => void }) => {
    return (
        <ul className="flex gap-5">
            {productsCategoryData.map(({ id, category }) => (
                <li
                    className="text-sm font-medium duration-300 cursor-pointer hover:text-[#ff324d]"
                    key={id}
                    onClick={() => onHandleChangeCategory(category)}
                >
                    {category}
                </li>
            ))}
        </ul>
    );
};

export default CategoryProducts;
