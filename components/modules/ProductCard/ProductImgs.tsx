import Image from "next/image";
import React from "react";

const ProductImages = ({ name, images }: { name: string; images: string[] }) => {
    return (
        <div className="relative h-[250px]">
            <Image
                style={{
                    objectFit: "contain",
                    width: "100%",
                    position: "relative",
                    top: 0,
                    height: "250px",
                }}
                src={images[0]}
                width={250}
                height={250}
                alt={name}
            />
            <Image
                className="z-[2] top-0 right-[-110%] duration-300 group-hover:right-0 object-contain absolute w-full h-full"
                src={images[1]}
                width={250}
                height={250}
                alt={name}
            />
        </div>
    );
};

export default ProductImages;
