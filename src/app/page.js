"use client";

import { useState } from "react";
import ProductCard from "@/components/productCard";
import products from "@/data/products";
import { formatPrice } from "@/utils/formatPrice";
import CartButton from "@/components/cartButton";
import CartCard from "@/components/cartCard";
import CheckoutButton from "@/components/checkoutButton";
import Footer from "@/components/footer";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.productId === product.productId);
  
      if (productExists) {
        return prevCart.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.reduce((updatedCart, product) => {
        if (product.productId === productId) {
          if (product.quantity > 1) {
            updatedCart.push({ ...product, quantity: product.quantity - 1 });
          }
        } else {
          updatedCart.push(product);
        }
        return updatedCart;
      }, []);
    });
  };
  
  const getCartQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const getCartPriceTotal = () => {
    return cart.reduce((total, product) => {
      const price = parseInt(product.productPrice.replace(/[^\d]/g, '')) || 0;  // Mengambil hanya angka dari harga (misalnya "Rp 10.000" -> 10000)
      const quantity = product.quantity || 0;
      return total + price * quantity;
    }, 0);
  };


  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="flex min-h-screen flex-col pt-24 bg-white">
      <div className="flex justify-start px-4">
        <h1 className="text-lg font-semibold text-cyan-800">Catalog</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            productPicture={product.productPicture}
            productName={product.productName}
            productPrice={formatPrice(product.productPrice)}
            location={product.location}
            company={product.company}
            addToCart={addToCart}
          />
        ))}
      </div>
      {showCart && (
        <div className="fixed top-32 right-0 flex-col rounded-lg border-2 border-cyan-800 bg-white shadow-xl flex justify-start w-56 h-96 z-50">
          <h1 className="text-lg font-semibold text-cyan-800 p-2">Cart</h1>
          <div className="flex flex-col overflow-y-scroll w-full h-full">
            {cart.map((product) => (
              <CartCard
                key={product.productId}
                productPicture={product.productPicture}
                productName={product.productName}
                productPrice={product.productPrice}
                quantity={product.quantity}
                productId={product.productId}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="flex justify-between items-center w-full">
            <h1 className="text-base font-semibold text-cyan-800 p-2">Total</h1>
            <h1 className="text-base font-semibold text-cyan-800 p-2">{formatPrice(getCartPriceTotal())}</h1>
          </div>
          <CheckoutButton cart={cart} />
        </div>
      )}
      <CartButton onClick={handleShowCart} quantity={getCartQuantity()} />
      <Footer/>
    </div>
  );
}
