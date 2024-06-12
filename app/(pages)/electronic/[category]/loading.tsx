import Image from "next/image";

const Loading = ({ height = 500 }: { height: number }) => {
    return (
        <div
            style={{
                height: `100vh`,
                color: "black",
                fontSize: "100px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                top: 0,
                position: 'absolute',
                background: '#fff'
                
            }}
        >
            <Image src="/img/spinner.svg" width={400} height={400} alt="Loading" />
        </div>
    );
};

export default Loading;
