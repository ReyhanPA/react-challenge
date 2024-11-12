import Link from "next/link";
import React, { useState } from "react";
import FailToast from "./failToast";

export default function CheckoutButton(props) {
  const { cart } = props;
  const [showToast, setShowToast] = useState(false);

  const handleCheckout = () => {
    if (!cart || cart.length === 0) {
      setShowToast(true);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  }

  return (
    <div>
      {showToast && <FailToast handleCloseToast={handleCloseToast} />}

      <Link href={cart && cart.length > 0 ? "/checkout" : "/"} onClick={handleCheckout}>
        <div className="bg-gradient-to-b from-cyan-800 to-cyan-600 hover:bg-gradient-to-b hover:from-teal-500 hover:to-teal-500 text-white rounded-s-md p-1">
          <p className="text-center font-medium text-xs">Checkout</p>
        </div>
      </Link>
    </div>
  );
}
