"use client";

import { addToCart } from "@/redux/dummySlice";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { ProductType } from "type";
import { toast } from "react-hot-toast";

const AddToCartButton = ({
  product,
  className,
}: {
  product: ProductType;
  className?: string;
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart(product));
    toast.success(`${product.title.slice(0, 10)}... added successfully!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "bg-transparent border border-skyColor text-black rounded-full py-1.5 px-10 hover:bg-skyColor hover:text-white duration-300 my-2",
        className
      )}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
