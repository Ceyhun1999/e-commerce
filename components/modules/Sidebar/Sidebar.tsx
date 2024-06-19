import { categories } from "@/constants";
import { IoMenuOutline } from "react-icons/io5";

import Link from "next/link";

const Sidebar = () => {
    return (
        <nav className="min-w-72 bg-white shadow-custom">
            <ul>
                <li className="flex items-center gap-3 py-5 px-4 bg-[#ff324d] font-medium text-white text-lg ">
                    <IoMenuOutline size={30} color="#fff" />
                    All Categories
                </li>
                {categories.map(({ title, icon, categoryName }, index) => (
                    <li key={title + index}>
                        <Link
                            className="uppercase text-left w-full flex items-center justify-start gap-3 font-light py-3 px-4 text-sm text-black"
                            href={`/electronic/${categoryName.toLowerCase()}`}
                        >
                            {icon}
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
