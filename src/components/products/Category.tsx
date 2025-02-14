{/*}
import React, { useState, useEffect } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [categories, setCategories] = useState([]); // Kategorileri tutan state
  const [isLoading, setIsLoading] = useState(true); // Yüklenme durumu
  const [error, setError] = useState(null); // Hata durumu
  const [expandedCategory, setExpandedCategory] = useState(null); // Açılan kategori id'si

  // API'den kategorileri çek
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/categories");
        if (!response.ok) throw new Error("Veriler alınamadı!");
        const data = await response.json();
        
        // Gelen veriyi düzenleyerek her kategoriye `_id` ve `icons` ekliyoruz.
        const formattedCategories = data.map((category, index) => ({
          _id: index + 1, // API'de ID yok, biz oluşturuyoruz
          title: category, // API'den gelen kategori adı
          icons: true, // Tüm kategorilere + ikonu ekliyoruz
        }));

        setCategories(formattedCategories);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full">
      <NavTitle>Shop by Category</NavTitle>
      
     
      {isLoading && <p className="text-gray-500">Loading categories...</p>}

     
      {error && <p className="text-red-500">{error}</p>}

     
      {!isLoading && !error && (
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categories.map(({ _id, title, icons }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {icons && (
                <span
                  onClick={() =>
                    setExpandedCategory(expandedCategory === _id ? null : _id)
                  }
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;

*/}