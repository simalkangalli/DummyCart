import Image from "next/image";
import Link from "next/link";
import { ProductType } from "type";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: ProductType }) => {
    console.log("Product Data:", product); // Konsolda ürünü kontrol et
    
    return (
        <div className="border border-gray-400 hover:scale-105 hover:shadow-xl duration-200 rounded-md 
        group overflow-hidden relative">
            {/* image */}
            <Link href={`/products/${product.id}`}>
                <Image
                    src={product?.images?.[0] || "/placeholder.jpg"} // Eğer görsel yoksa placeholder göster
                    alt={product?.title || "Product Image"}
                    width={500}
                    height={500}
                    priority
                    className="w-64 h-48 object-contain hover:scale-110 duration-300"
                />
                <p className="absolute top-2 right-2 bg-green-500 text-white py-1 px-2 text-xs rounded-lg flex items-center">
                    {product?.discountPercentage ? `${product.discountPercentage}%` : "No Discount"}
                </p>
            </Link>
            
            {/* description */}
            <div className="border-t border-t-borderColor py-2 px-4 flex flex-col justify-between h-35">
              <p className="text-sm text-lightText capitalize font-medium">
                {product?.category}
              </p>
              <h2 className="font-semibold text-base line-clamp-2">
                {product?.title}
              </h2>
              <ProductPrice product={product}/>
            </div>

            <div className="flex justify-center">
                <AddToCartButton/> 
            </div>
        </div>
    );
};

export default ProductCard;
