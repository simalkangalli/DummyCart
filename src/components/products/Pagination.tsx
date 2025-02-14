{/*}
"use client";
import ProductCard from "@components/ProductCard";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductType } from "type";



interface ItemsProps {
  currentItems: ProductType[];
}

function Items({ currentItems }: ItemsProps) {
  return (
    <>
      {currentItems && currentItems.map((item) => (
        <div key={item.id} className="w-full">
         <ProductCard product={item} />


        </div>
      ))}
    </>
  );
}

interface PaginationProps {
  itemsPerPage: number;
  products: ProductType[];
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, products }) => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [itemStart, setItemStart] = useState<number>(1);

  // Boş ürün listesi için koruma ekleyelim
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = Array.isArray(products) ? products.slice(itemOffset, endOffset) : [];
  const pageCount = products.length > 0 ? Math.ceil(products.length / itemsPerPage) : 1;

  // Sayfa değişiminde çağrılan fonksiyon
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    setItemStart(newOffset + 1); // Başlangıç değerini 1 yaparak daha kullanıcı dostu hale getirdik
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />
        <p className="text-base font-normal text-lightText">
          Products from {itemStart} to {endOffset} of {products.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;


*/}