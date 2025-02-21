import Banner from "@components/Banner";

import ProductList from "@components/ProductList";
import axios from "axios";

export default async function Home() {
  const endpoint = `https://dummyjson.com/products`;

  try {
    //  API çağrısını Axios ile yapıyor
    const { data } = await axios.get(endpoint);

    console.log(" API Yanıtı:", data);

    return (
      <main>
        <Banner />
        {/*  API'den gelen ürünleri `ProductList` bileşenine gönderiyor */}
        <ProductList products={data.products} />
      </main>
    );
  } catch (error) {
    console.error(" API Hatası:", error);
    return (
      <main>
        <Banner />
        <p className="text-center text-red-500">Ürünler yüklenirken hata oluştu.</p>
        
      </main>
    );
  }
}
