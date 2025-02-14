

{/*}

"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import ProductCard from './ProductCard';




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
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null); // Hata durumunu sıfırla

            // Axios ile veri çekme
            const response = await axios.get("https://dummyjson.com/products");
            setProducts(response.data.products);

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || error.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex items-center justify-center flex-col gap-3">
                    <AiOutlineLoading3Quarters className="text-3xl font-bold animate-spin" />
                    <h1 className="text-2xl font-bold">Please wait, server is responding...</h1>
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
     

       
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-white py-6">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((item) => (
                    <Link href={`/products/${item.id}`} key={item.id}>
                        <div className="bg-zinc-900 shadow-lg border border-gray-700 p-4 rounded-xl hover:bg-zinc-800 transition duration-300">
                            <div className="flex items-center justify-center bg-zinc-950 p-2">
                                <Image
                                    className="w-52 h-auto object-cover rounded-md"
                                    src={item.images[0]}
                                    alt={item.title}
                                    width={208}
                                    height={208}
                                />
                            </div>
                            <div className="py-2">
                                <p className="text-white font-bold">{item.title}</p>
                                <p className="text-gray-300 text-sm">
                                    {item.description.slice(0, 80)}...

                                    
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-green-400 font-semibold">${item.price}</p>
                                <p className="text-gray-400 text-sm">{item.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;

*/}


