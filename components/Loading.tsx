"use client";

import Image from "next/image";

const Loading = ({ height }: { height: number }) => {

    return (
        <div
            style={{
                height: `${height}px`,
                color: "black",
                fontSize: "100px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                top: 0,
            }}
        >
            <Image src="/img/spinner.svg" width={400} height={400} alt="Loading" />
        </div>
    );
};

export default Loading;
