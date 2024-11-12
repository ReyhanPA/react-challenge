"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormCheckout from "@/components/formCheckout";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    floating_first_name: "",
    floating_last_name: "",
    floating_phone: "",
    floating_address: "",
    floating_email: "",
    floating_country: "",
    postal_code: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex-col pt-24 bg-white">
      <div className="flex justify-start px-4">
        <h1 className="text-lg font-semibold text-cyan-800">Checkout Form Validation</h1>
      </div>
      <FormCheckout
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
