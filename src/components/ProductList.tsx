"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { ProductType } from "type"; 

//  Props arayüzü tanımla (eğer dışarıdan props alacaksan)
interface ProductListProps {
  products?: ProductType[]; // Opsiyonel olarak dışarıdan ürün listesi alabilir
}

//  Bileşen tanımı (props varsa alır, yoksa kendi API çağrısını yapar)
const ProductList: React.FC<ProductListProps> = ({ products: initialProducts }) => {
  const [products, setProducts] = useState<ProductType[]>(initialProducts || []); // Eğer props'tan ürün geldiyse kullan, yoksa boş dizi
  const [loading, setLoading] = useState<boolean>(!initialProducts); // ✅ Yükleme durumunu yönet
  const [error, setError] = useState<string | null>(null); // Hata mesajını yönet

  useEffect(() => {
    if (!initialProducts) { // Eğer `products` props olarak gelmemişse API çağrısı yap
      axios.get("https://dummyjson.com/products")
        .then((res) => {
          console.log("API Yanıtı:", res.data);
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error(" Ürünler yüklenirken hata oluştu:", error);
          setError("Ürünleri yüklerken hata oluştu.");
          setLoading(false);
        });
    }
  }, [initialProducts]);

  if (loading) return <p className="text-center text-lg">Ürünler yükleniyor...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-4">
      {products.length > 0 ? (
        products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))
      ) : (
        <p className="text-center text-lg">Ürün bulunamadı.</p>
      )}
    </div>
  );
};

export default ProductList;
