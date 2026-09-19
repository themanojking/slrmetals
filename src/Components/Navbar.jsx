import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { menuItems } from "../Utils/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-orange-100 bg-[#FFFDF8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl shadow-md shadow-orange-200">
            🫖
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
              SLR METALS
            </h1>

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
              Everyday Essentials
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="font-medium text-gray-700 transition hover:text-orange-500"
            >
              {item.itemName}
            </Link>
          ))}
        </div>

        {/* Desktop Cart */}
        <div className="hidden md:block">
          <Link
            to="/cart"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
          >
            <ShoppingCart size={18} />
            Add to Cart
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-orange-500">
              {cartCount}
            </span>
          </Link>
        </div>

        {/* Mobile Cart + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-lg p-2 text-gray-800 transition hover:bg-orange-50"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={24} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-800 transition hover:bg-orange-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-orange-100 bg-[#FFFDF8] transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 px-5 py-5">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="block font-medium text-gray-700 transition hover:text-orange-500"
            >
              {item.itemName}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
