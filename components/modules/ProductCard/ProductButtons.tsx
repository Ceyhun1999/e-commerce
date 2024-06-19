import { openModal } from "@/redux/features/categoryItemPageSlice";
import { IProductItem } from "@/types";
import { BsCart4 } from "react-icons/bs";
import { CiZoomIn } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";

const ProductButtons = ({product} : {product: IProductItem}) => {
    const dispatch = useDispatch();

    return (
        <ul className="group-hover:opacity-100 group-hover:visible  absolute left-5 top-1/2 -translate-y-1/2 z-[3] flex flex-col gap-[10px] opacity-0 invisible duration-300">
            <li
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
                className="bg-white rounded-full group/li flex items-center justify-center px-2 py-2 duration-300 cursor-pointer hover:bg-[#ff324d]"
            >
                <BsCart4 className="duration-300  group-hover/li:text-white" size={18} />
            </li>
            <li
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
                className="bg-white rounded-full group/li flex items-center justify-center px-2 py-2 duration-300 cursor-pointer hover:bg-[#ff324d]"
            >
                <IoIosHeartEmpty className="duration-300 group-hover/li:text-white" size={18} />
            </li>
            <li
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
                className="bg-white rounded-full group/li flex items-center justify-center px-2 py-2 duration-300 cursor-pointer hover:bg-[#ff324d]"
            >
                <CiZoomIn
                    className="duration-300 group-hover/li:text-white"
                    size={20}
                    onClick={() => dispatch(openModal(product))}
                />
            </li>
        </ul>
    );
};

export default ProductButtons;
