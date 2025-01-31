import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Details for {id}</h1>
      {/* Ürün detayları */}
    </div>
  );
};

export default ProductDetail;
