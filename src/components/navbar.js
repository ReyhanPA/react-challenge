"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between h-20 w-full shadow-md fixed bg-white z-50">
      <div className="flex px-4 justify-center items-center">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={150} width={150} />
          </Link>
        </div>
      </div>
      {/* Menu Items >md */}
      <div className="md:flex md:justify-center md:items-center px-4">
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/">
              <h1 className="text-lg font-light text-cyan-800 hover:text-teal-500 duration-100">
                Catalog
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/weather">
              <h1 className="text-lg font-light text-cyan-800 hover:text-teal-500 duration-100">
                Weather
              </h1>
            </Link>
          </li>
        </ul>
      </div>
      {/* Toggle Menu */}
      <div className="flex px-4 md:hidden">
        {isMenuOpen ? (
          <div className="flex justify-center items-center text-3xl text-cyan-800 md:hidden">
            <LiaTimesSolid onClick={menuHandler} cursor={"pointer"} />
          </div>
        ) : (
          <div className="flex justify-center items-center text-3xl text-cyan-800 md:hidden">
            <RxHamburgerMenu onClick={menuHandler} cursor={"pointer"} />
          </div>
        )}        
      </div>
      {/* Menu Items <md */}
      {isMenuOpen && (
        <div className="md:hidden flex justify-center items-center h-28 w-32 absolute top-24 right-4 rounded-lg shadow-md bg-white z-50">
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/">
                <h1 className="text-lg text-center font-light text-cyan-800 hover:text-teal-500 duration-100">Catalog</h1>
              </Link>
            </li>
            <li>
              <Link href="/weather">
                <h1 className="text-lg text-center font-light text-cyan-800 hover:text-teal-500 duration-100">Weather</h1>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
