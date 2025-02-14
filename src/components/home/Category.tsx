{/*}
"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";

// Kategori tipini tanımlama
interface Category {
  slug: string;
  name: string;
  url: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("https://dummyjson.com/products/categories");
        console.log(response.data); // API’den dönen veriyi incelemek 
        setCategories(response.data);

      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || error.message);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center flex-col gap-3">
          <AiOutlineLoading3Quarters className="text-3xl font-bold animate-spin" />
          <h1 className="text-2xl font-bold">Loading categories...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="text-2xl font-bold text-red-500">Error Occurred:</h1>
          <p className="text-white">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 flex">
     
      <div className="w-64 bg-zinc-900 text-white p-4 rounded-lg shadow-md h-fit sticky top-4">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/categories/${encodeURIComponent(category.slug)}`}>
                <p className="hover:text-gray-300 transition cursor-pointer capitalize">
                  {category.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

   
      <div className="flex-1 ml-6">
        <h1 className="text-3xl font-bold text-white mb-6">Product Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={`/categories/${encodeURIComponent(category.slug)}`}>
              <div className="bg-zinc-800 text-white p-4 rounded-lg shadow-md hover:bg-zinc-700 transition duration-300 cursor-pointer">
                <h2 className="text-xl font-semibold capitalize">{category.name}</h2>
                <p className="text-gray-400 mt-2">Explore {category.name} products →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

*/}