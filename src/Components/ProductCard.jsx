import React, { useEffect, useState } from "react";
import { Star, Plus, Minus, ShoppingCart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductCard = ({
  image,
  name,
  company,
  rating = 4.5,
  price = 299,
  originalPrice = 399,
  tag = "20% OFF",
  delay = 0,
}) => {
  const [quantity, setQuantity] = useState(1);

  // ================= AOS INITIALIZATION =================
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  // ================= INCREASE QUANTITY =================
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // ================= DECREASE QUANTITY =================
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // ================= DYNAMIC PRICE =================
  const totalPrice = price * quantity;
  const totalOriginalPrice = originalPrice * quantity;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      className="
        group
        w-full
        max-w-sm
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* ================= PRODUCT IMAGE ================= */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
            sm:h-64
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/5
          "
        />

        {/* ================= OFFER TAG ================= */}
        <div
          className="
            absolute
            left-3
            top-3
            -translate-y-3
            rounded-full
            bg-orange-500
            px-3
            py-1.5
            text-xs
            font-bold
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-500
            ease-out
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          {tag}
        </div>
      </div>

      {/* ================= PRODUCT CONTENT ================= */}
      <div className="p-4 sm:p-5">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          {name}
        </h3>

        {/* Company Name */}
        <p className="mt-1 text-sm text-gray-500">
          {company}
        </p>

        {/* ================= RATING ================= */}
        <div className="mt-3 flex items-center gap-1.5">
          <Star
            size={17}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-semibold text-gray-700">
            {rating}
          </span>

          <span className="text-xs text-gray-400">
            / 5
          </span>
        </div>

        {/* ================= PRICE ================= */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-bold text-orange-600">
            ₹{totalPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{totalOriginalPrice}
          </span>
        </div>

        {/* ================= QUOTE ================= */}
        <p className="mt-2 text-xs italic text-gray-500">
          "Quality you can trust, value you'll love."
        </p>

        {/* ================= QUANTITY ================= */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Quantity
          </span>

          <div
            className="
              flex
              items-center
              overflow-hidden
              rounded-lg
              border
              border-gray-200
            "
          >
            {/* Minus Button */}
            <button
              type="button"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                bg-gray-50
                text-gray-700
                transition-all
                duration-300
                hover:bg-orange-100
                hover:text-orange-600
                active:scale-90
              "
            >
              <Minus size={16} />
            </button>

            {/* Quantity */}
            <span
              className="
                flex
                h-9
                w-10
                items-center
                justify-center
                border-x
                border-gray-200
                text-sm
                font-semibold
                text-gray-800
              "
            >
              {quantity}
            </span>

            {/* Plus Button */}
            <button
              type="button"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                bg-gray-50
                text-gray-700
                transition-all
                duration-300
                hover:bg-orange-100
                hover:text-orange-600
                active:scale-90
              "
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* ================= ADD TO CART ================= */}
        <button
          type="button"
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-orange-500
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:bg-orange-600
            hover:shadow-lg
            active:scale-[0.98]
          "
        >
          <ShoppingCart size={18} />

          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;