import { IoMdAddCircleOutline } from "react-icons/io";

export default function CartButton(props) {
  const { onClick, quantity = 0 } = props;
  return (
    <button onClick={onClick}>
      <div className="flex justify-center items-center gap-2 rounded-xl p-4 bg-gradient-to-b from-cyan-800 to-cyan-600 hover:bg-gradient-to-b hover:from-teal-500 hover:to-teal-500 fixed bottom-5 right-5 shadow-md cursor-pointer z-50">
        <IoMdAddCircleOutline className="text-white text-center font-medium text-xl" />
        <h1 className="text-white text-center font-medium text-base">Shopping Cart</h1>
        <div className="flex justify-center items-center absolute -top-2 -right-2 rounded-full w-6 h-6 bg-red-700">
          <p className="text-white text-center font-medium text-xs">
            {quantity}
          </p>
        </div>
      </div>
    </button>
  );
}
