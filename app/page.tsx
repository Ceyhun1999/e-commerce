import Sidebar from "@/components/modules/Sidebar/Sidebar";
import MainSlider from "@/components/modules/MainSlider/MainSlider";
import Banner from "@/components/modules/Banner/Banner";
import Brends from "@/components/modules/Brends/Brends";
import SectionProducts from "@/components/modules/SectionProducts/SectionProducts";

export default function Home() {
    return (
        <main className="container relative overflow-hidden">
            <div className="flex gap-5 pb-5 relative">
                <Sidebar />
                <MainSlider />
            </div>
            <SectionProducts title="Exclusive Products" categoryName="Best Sellers" />
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
