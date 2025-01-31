"use client"
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

// Ürün tipini tanımlama
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setProducts(data.products);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
        setLoading(false);
      }
    };


    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center flex-col gap-3">
          <span>
            <AiOutlineLoading3Quarters className="text-3xl font-bold animate-spin" />
          </span>
          <h1 className="text-2xl font-bold">Please wait server is responding...</h1>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center flex-col gap-3">
          <span>
            <AiOutlineLoading3Quarters className="text-3xl font-bold animate-spin" />
          </span>
          <h1 className="text-2xl font-bold">Error has occurred.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative -top-5">
        <h1 className="text-3xl font-bold text-white py-6 -mt-50 ">Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <div className="bg-zinc-900 shadow-lg border border-gray-700 p-4 rounded-xl hover:bg-zinc-800">
              <div className="flex items-center justify-center bg-zinc-950">
                <img className="w-52 h-auto" src={item.images[0]} alt={item.title} />
              </div>
              <div className="py-1">
              
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-white">
                  {item.description.slice(0, 100)}{" "}
                  <span className="text-blue-500 text-sm font-semibold">
                    Details
                  </span>
                </p>
              </div>
              <div>
                <p className="text-white">{item.price}</p>
              </div>
              <div>
                
              </div>
              <div>
                <p className="text-white">{item.brand}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
