import { IBrendsItem, ICategoryItem } from "@/types";
import { CiCamera, CiMobile3 } from "react-icons/ci";
import { GiHeadphones, GiWatch } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoLogoGameControllerB } from "react-icons/io";
import { LuFileAudio } from "react-icons/lu";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { TfiPrinter } from "react-icons/tfi";

export const categories: ICategoryItem[] = [
    {
        title: "Computer",
        icon: <HiOutlineComputerDesktop size={25} color="#767b8b" />,
    },
    {
        title: "Mobile & Tablet",
        icon: <CiMobile3 size={25} color="#767b8b" />,
    },
    {
        title: "Camera",
        icon: <CiCamera size={25} color="#767b8b" />,
    },
    {
        title: "Accessories",
        icon: <TbBrandSocketIo size={25} color="#767b8b" />,
    },
    {
        title: "Headphones",
        icon: <GiHeadphones size={25} color="#767b8b" />,
    },
    {
        title: "Gaming",
        icon: <IoLogoGameControllerB size={25} color="#767b8b" />,
    },
    {
        title: "Watches",
        icon: <GiWatch size={25} color="#767b8b" />,
    },
    {
        title: "Home Audio & Theater",
        icon: <LuFileAudio size={25} color="#767b8b" />,
    },
    {
        title: "TV & Smart Box",
        icon: <MdOutlineSmartDisplay size={25} color="#767b8b" />,
    },
    {
        title: "Printer",
        icon: <TfiPrinter size={25} color="#767b8b" />,
    },
];

export const brendsData: IBrendsItem[] = [
    {
        img: "/img/brend1.png",
        id: 1,
    },
    {
        img: "/img/brend2.png",
        id: 2,
    },
    {
        img: "/img/brend3.png",
        id: 3,
    },
    {
        img: "/img/brend4.png",
        id: 4,
    }
];
