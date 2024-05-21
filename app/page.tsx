import Sidebar from "@/components/modules/Sidebar/Sidebar";
import MainSlider from "@/components/modules/MainSlider/MainSlider";
import Banner from "@/components/modules/Banner/Banner";
import Image from "next/image";
import ExclusiveProducts from "@/components/modules/ExclusiveProducts/ExclusiveProducts";

export default function Home() {
    return (
        <main className="container" style={{ position: "relative", overflow: "hidden" }}>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    paddingBottom: "20px",
                }}
            >
                <Sidebar />
                <MainSlider />
                <Banner>
                    <div>
                        <Image src={"/img/menu_banner1.jpg"} alt="Banner" width={250} height={250} />
                    </div>
                    <div>
                        <Image src={"/img/menu_banner2.jpg"} alt="Banner" width={250} height={250} />
                    </div>
                </Banner>
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: "20px",
                }}
            >
                <Banner>
                    <div style={{ width: "100%" }}>
                        <Image src={"/img/banner3.jpg"} alt="Banner" width={300} height={400} />
                    </div>
                </Banner>
                <ExclusiveProducts />
            </div>
        </main>
    );
}
