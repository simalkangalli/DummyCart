
{/*}

"use client";
import { useState } from "react";
import ProductBanner from "./ProductBanner";
import Pagination from "./Pagination";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  // Ürün nesnesinde başka özellikler varsa ekelenecek yer
}

interface PaginationProductListProps {
  products: Product[];
}

const PaginationProductList: React.FC<PaginationProductListProps> = ({ products }) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  const itemsPerPageFromBanner = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
      <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
      <Pagination itemsPerPage={itemsPerPage} product={products} />
    </div>
  );
};

export default PaginationProductList;
*/}
