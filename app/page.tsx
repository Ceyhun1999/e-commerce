import Sidebar from "@/components/modules/Sidebar/Sidebar";
import MainSlider from "@/components/modules/MainSlider/MainSlider";
import Banner from "@/components/modules/Banner/Banner";
import ExclusiveProducts from "@/components/modules/ExclusiveProducts/ExclusiveProducts";
import Brends from "@/components/modules/Brends/Brends";

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
                <Banner className={"column"}>
                    <div>
                        <img src="/img/banner1.jpg" alt="Banner" />
                    </div>
                    <div>
                        <img src="/img/banner2.jpg" alt="Banner" />
                    </div>
                </Banner>
            </div>
            <ExclusiveProducts />
            <Banner className={"row"}>
                <div>
                    <img width={"100%"} src="/img/banner4.jpg" alt="Banner" />
                </div>
                <div>
                    <img width={"100%"} src="/img/banner5.jpg" alt="Banner" />
                </div>
                <div>
                    <img width={"100%"} src="/img/banner6.jpg" alt="Banner" />
                </div>
            </Banner>
            <Brends />
        </main>
    );
}
