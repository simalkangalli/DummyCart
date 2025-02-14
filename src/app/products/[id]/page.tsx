"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Container from "@components/Container";
import ProductImages from "@components/ProductImages";
import { ProductType } from "type";
import ProductPrice from "@components/ProductPrice";
import { MdStar } from "react-icons/md";

const SingleProductPage = () => {
    const { id } = useParams(); // URL'den ID'yi al
    const [product, setProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                console.log("API Yanıtı:", res.data);
                setProduct(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Hatası:", err);
                setError("Ürün yüklenirken hata oluştu.");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center text-lg">Ürün yükleniyor...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!product) return <p className="text-center text-lg">Ürün bulunamadı.</p>;


   
    return (
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            {/* Ürün görselleri */}
            <ProductImages images={product.images} />

            {/* Ürün detayları */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold">{product?.title}</h2>

                <div className="flex flex-col gap-4"></div>

                {/* Fiyat ve Yıldızlı Değerlendirme */}
                <div className="flex items-center justify-between gap-5">
                    <ProductPrice product={product} />
                    <div className="flex items-center gap-1">
                        <div className="text-base text-lightText flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, _index) => {
                                const filled = _index + 1 <= Math.floor(product?.rating || 0);
                                const halfFilled = _index + 1 > Math.floor(product?.rating || 0) && _index + 1 <= Math.ceil(product?.rating || 0);

                                return (
                                    <MdStar
                                    key={_index}
                                    className={`${
                                      filled
                                        ? "text-[#fa8900]"
                                        : halfFilled
                                        ? "text-[#f7ca00]"
                                        : "text-lightText"
                                    }`}
                                  />
                                );
                              })}
                            </div>
                        <p className="text-base font-semibold">{`(${product?.rating?.toFixed(1)}) reviews`}</p>
                        <div>
                            <p className="text-sm tracking-wide">{product?.description} </p>
                            <p className="text-base">{product?.warrantyInformation} </p>

                        </div>
                       <p> Brand: <span className="font-medium">{product?.brand}</span> </p>
                       <p> Category: {" "}
                        <span className="font-medium capitalize">{product?.category}</span> </p>
                        <p>Tags: {product?.tags?.map((item,_index)=> (
                         <span key = {_index}>{item} {_index < product?.tags?.length -1 && ' , '}</span>
                        ))}</p>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SingleProductPage;
