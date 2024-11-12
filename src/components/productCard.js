import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

export default function ProductCard(props) {
  const { productId = 0, productPicture = "/gambar_sayur.jpeg", productName = "Tanpa Nama", productPrice = "10000", location = "Indonesia", company = "PT Tanpa Nama", addToCart } = props;

  const handleAddToCart = () => {
    addToCart({ productId, productPicture, productName, productPrice, location, company });
  };

  return (
    <div className="min-w-28 w-full max-w-40 h-64 rounded-lg shadow-md hover:shadow-2xl relative group">
      {/* Gambar Produk */}
      <div className="flex justify-center items-center w-full h-1/2 relative">
        <Image className="p-2 rounded-2xl" src={productPicture} alt="Product Picture" fill={true} />
      </div>

      {/* Hover Overlay */}
      <div className="absolute rounded-lg top-0 left-0 w-full h-1/2 bg-white opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out z-10"></div>
      <div className="absolute top-0 left-0 flex justify-center items-center w-full h-1/2">
        <button onClick={handleAddToCart} className="bg-gradient-to-b from-cyan-800 to-cyan-600 hover:bg-gradient-to-b hover:from-teal-500 hover:to-teal-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 z-10 hover:bg-cyan-600">
          Add to Cart
        </button>
      </div>

      {/* Informasi Produk */}
      <div className="flex flex-col justify-between items-start w-full h-1/2 p-2 pt-2 pb-4 z-20">
        <div className="flex w-full">
          <h5 className="text-base font-semibold text-cyan-800 truncate">{productName}</h5>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-base font-bold text-gray-600 truncate">{productPrice}</span>
        </div>
        <div className="flex items-center gap-1 w-full">
          <IoLocationOutline className="text-sm font-light text-gray-600" />
          <h5 className="text-xs font-light text-gray-600 truncate">{location}</h5>
        </div>
        <div className="flex items-center gap-1 w-full">
          <HiOutlineBuildingOffice className="text-sm font-light text-gray-600" />
          <h5 className="text-xs font-light text-gray-600 truncate">{company}</h5>
        </div>
      </div>
    </div>
  );
}
