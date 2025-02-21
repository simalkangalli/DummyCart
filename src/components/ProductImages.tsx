import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
}

const ProductImages = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");

  return (

    <div className="flex flex-col items-center justify-center min-h-[80vh] mt-20">
       
      {/* Büyük Görsel */}
      <div className="mb-6 flex justify-center">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Selected Product Image"
            width={500} // Büyük resim boyutu
            height={500}
            className="rounded-lg shadow-lg border border-gray-300"
          />
        )}
      </div>
       {/* Küçük Görseller */}
       <div className="flex gap-4 justify-between ">
        {images?.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`Thumbnail ${index}`}
            width={100} // Küçük resimler
            height={100}
            className={`cursor-pointer border-2 rounded-lg transition-all hover:scale-110 ${
              selectedImage === item ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </div>

    
     
    </div>
  );
};

export default ProductImages;
