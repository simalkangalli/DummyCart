{/*
  
  "use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  tags: string[];
  images: string[];
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Fetching product with ID:", id);

        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log("API Response:", response.data);

        setProduct(response.data);
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

    if (id) {
      fetchSingleProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AiOutlineLoading3Quarters className="text-3xl animate-spin" />
        <h1 className="ml-4 text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-red-500">{error}</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {product && (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">Brand: {product.brand}</h2>
              <p className="mt-2">{product.description}</p>
              <p className="mt-4 text-lg font-bold">Price: ${product.price}</p>
              <p className="text-gray-400">Category: {product.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

*/}