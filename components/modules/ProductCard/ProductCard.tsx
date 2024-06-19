import { IProductItem } from "@/types";
import ProductButtons from "./ProductButtons";
import ProductImages from "./ProductImgs";
import ProductStars from "./ProductStars";
import ProductPrice from "./ProductPrice";

const ProductCard = ({ product }: { product: IProductItem }) => {
    return (
        <div
            key={product.id}
            className="group shadow-boxShadowProductCard flex justify-center items-center flex-col relative overflow-hidden"
        >
            <ProductButtons product={product} />
            <div>
                <ProductImages name={product.name} images={product.imgs} />
                <div className="pl-5 pb-5 pr-5">
                    <h3 className="font-medium text-[#292b2c]">{product.name}</h3>
                    <ProductPrice price={product.price} />
                    <ProductStars star={product.star} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
