import Image from "next/image";

export default function CartCard(props) {
  const { productPicture, productName, productPrice, quantity, productId, addToCart, removeFromCart } = props;

  const increaseQuantity = () => {
    addToCart({ productId, productPicture, productName, productPrice });
  };

  const decreaseQuantity = () => {
    removeFromCart(productId);
  };

  return (
    <div className="flex w-full min-h-20 justify-start gap-2 p-2">
      <div className="flex justify-center items-center w-2/5 h-full relative">
        <Image src={productPicture} alt="Product Picture" fill={true}/>
      </div>
      <div>
        <h5 className="text-sm font-medium text-cyan-800 truncate">{productName}</h5>
        <span className="text-sm font-medium text-gray-600 truncate">{productPrice}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={decreaseQuantity}
            className="w-4 h-4 bg-gradient-to-b from-cyan-800 to-cyan-600 hover:bg-gradient-to-b hover:from-teal-500 hover:to-teal-500 text-white rounded-full flex justify-center items-center"
          >
            -
          </button>
          <span className="text-sm font-medium text-gray-700">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="w-4 h-4 bg-gradient-to-b from-cyan-800 to-cyan-600 hover:bg-gradient-to-b hover:from-teal-500 hover:to-teal-500 text-white rounded-full flex justify-center items-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
