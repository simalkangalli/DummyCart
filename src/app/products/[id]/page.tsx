"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Container from "@components/Container";
import ProductImages from "@components/ProductImages";
import { ProductType } from "type";
import ProductPrice from "@components/ProductPrice";
import { MdStar } from "react-icons/md";
import AddToCartButton from "@components/AddToCartButton";

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
            {/* Ürün Görselleri */}
            <ProductImages images={product?.images || []} />

            {/* Ürün Detayları */}
            <div className="mt-10 flex flex-col gap-4">
                {/* Ürün Başlığı */}
                <h2 className="text-3xl font-bold">{product?.title}</h2>

                {/* Fiyat ve Yıldızlı Değerlendirme */}
                <div className="flex items-center justify-between gap-5">
                    <ProductPrice product={product} />
                    <div className="flex items-center gap-2">
                        {/* Yıldızlı Puanlama */}
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
                </div>

                {/* Ürün Açıklamaları */}
                <div className="flex flex-col gap-2 text-gray-700 text-sm">
                    <p className="tracking-wide">{product?.description}</p>
                    <p className="text-base">{product?.warrantyInformation ?? "Warranty information not available"}</p>

                    {/* Brand ve Category Bilgileri */}
                    <p><strong>Brand:</strong> <span className="font-medium">{product?.brand}</span></p>
                    <p><strong>Category:</strong> <span className="font-medium capitalize">{product?.category}</span></p>

                    {/* Tags Bilgileri */}
                    <p><strong>Tags:</strong> {product?.tags?.length ? (
                        product.tags.map((item, _index) => (
                            <span key={_index}>
                                {item}{_index < product.tags.length - 1 && ', '}
                            </span>
                        ))
                    ) : "No tags available"}
                    </p>

                    {/* Sepete Ekle Butonu */}
                    <AddToCartButton product={product} className="rounded-md uppercase font-semibold" />
                </div>
            </div>

            {/* Kullanıcı Yorumları */}
            {product?.reviews?.length > 0 && (
                <div className="p-10 bg-[#f7f7f7] md:col-span-2 flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-gray-800">Customer Reviews</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {product.reviews.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 border border-gray-300 rounded-md shadow-sm 
                                hover:border-amazonOrangeDark hover:bg-white duration-200 flex flex-col gap-2"
                            >
                                <p className="text-base font-semibold">{item?.comment}</p>
                                <div className="text-xs text-gray-600">
                                    <p className="font-semibold">{item?.reviewerName}</p>
                                    <p className="italic">{item?.reviewerEmail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    );
};

export default SingleProductPage;
