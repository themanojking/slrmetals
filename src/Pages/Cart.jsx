import React, { useMemo } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  PackageOpen,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFDF8] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">

          {/* =========================
              HEADER
          ========================== */}

          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[2px] text-orange-500 sm:text-sm sm:tracking-[3px]">
              Shopping Cart
            </p>

            <h1 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
              Your Cart
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          {/* =========================
              EMPTY CART
          ========================== */}

          {cartItems.length === 0 ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-5 py-12 text-center shadow-sm sm:min-h-[450px] sm:rounded-3xl sm:px-6">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500 sm:h-20 sm:w-20">
                <PackageOpen size={34} className="sm:hidden" />
                <PackageOpen size={40} className="hidden sm:block" />
              </div>

              <h2 className="mt-5 text-xl font-extrabold text-gray-900 sm:mt-6 sm:text-2xl">
                Your cart is empty
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                Looks like you haven't added any products to your cart yet.
              </p>

              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 sm:mt-7 sm:px-6"
              >
                <ArrowLeft size={18} />
                Continue Shopping
              </Link>
            </div>
          ) : (
            /* =========================
                CART CONTENT
            ========================== */

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8">

              {/* =========================
                  CART ITEMS
              ========================== */}

              <div className="min-w-0 space-y-4">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-orange-100 bg-white p-3 shadow-sm sm:p-5"
                  >
                    {/* Product Main Content */}
                    <div className="flex min-w-0 gap-3 sm:gap-5">

                      {/* =========================
                          PRODUCT IMAGE
                      ========================== */}

                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-50 sm:h-28 sm:w-28 md:h-32 md:w-32">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain p-1 sm:p-2"
                        />
                      </div>

                      {/* =========================
                          PRODUCT DETAILS
                      ========================== */}

                      <div className="min-w-0 flex-1">

                        <h2 className="break-words text-base font-bold leading-5 text-gray-900 sm:text-lg sm:leading-6">
                          {item.name}
                        </h2>

                        <p className="mt-1 truncate text-xs text-gray-500 sm:text-sm">
                          {item.company}
                        </p>

                        <p className="mt-2 text-base font-bold text-orange-600 sm:text-lg">
                          ₹{item.price}
                        </p>

                        {/* Quantity + Remove */}
                        <div className="mt-4 flex flex-wrap items-center gap-3">

                          {/* Quantity */}
                          <div className="flex shrink-0 items-center overflow-hidden rounded-lg border border-gray-200">

                            <button
                              type="button"
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                              aria-label={`Decrease ${item.name} quantity`}
                              className="flex h-8 w-8 items-center justify-center bg-gray-50 text-gray-700 transition hover:bg-orange-100 hover:text-orange-600 active:scale-90 sm:h-9 sm:w-9"
                            >
                              <Minus size={15} />
                            </button>

                            <span className="flex h-8 min-w-9 items-center justify-center border-x border-gray-200 px-2 text-sm font-semibold sm:h-9 sm:min-w-10">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                              aria-label={`Increase ${item.name} quantity`}
                              className="flex h-8 w-8 items-center justify-center bg-gray-50 text-gray-700 transition hover:bg-orange-100 hover:text-orange-600 active:scale-90 sm:h-9 sm:w-9"
                            >
                              <Plus size={15} />
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() =>
                              dispatch(removeFromCart(item.id))
                            }
                            className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-red-500 transition hover:text-red-600 sm:text-sm"
                          >
                            <Trash2 size={15} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* =========================
                        PRODUCT TOTAL
                    ========================== */}

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-3 sm:mt-5 sm:pt-4">

                      <span className="text-xs text-gray-500 sm:text-sm">
                        {item.quantity} × ₹{item.price}
                      </span>

                      <span className="shrink-0 text-sm font-bold text-gray-900 sm:text-base">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))}

                {/* =========================
                    CLEAR CART
                ========================== */}

                <div className="flex justify-end pt-1 sm:pt-2">
                  <button
                    type="button"
                    onClick={() => dispatch(clearCart())}
                    className="text-xs font-semibold text-red-500 transition hover:text-red-600 sm:text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* =========================
                  ORDER SUMMARY
              ========================== */}

              <div className="h-fit min-w-0 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-28">

                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-extrabold text-gray-900">
                    Order Summary
                  </h2>

                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                    {totalItems}{" "}
                    {totalItems === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Summary Details */}
                <div className="mt-6 space-y-4">

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-500">
                      Items
                    </span>

                    <span className="font-semibold text-gray-800">
                      {totalItems}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-800">
                      ₹{subtotal}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-gray-500">
                      Shipping
                    </span>

                    <span className="max-w-[160px] text-right text-xs font-semibold text-gray-800 sm:text-sm">
                      Calculated separately
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-100" />

                {/* Total */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-xl font-extrabold text-orange-600 sm:text-2xl">
                    ₹{subtotal}
                  </span>
                </div>

                {/* Checkout */}
                <Link
                  to="/checkout"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]"
                >
                  <ShoppingCart size={18} />
                  Proceed to Checkout
                </Link>

                {/* Continue Shopping */}
                <Link
                  to="/"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-orange-200 px-5 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 active:scale-[0.98]"
                >
                  <ArrowLeft size={17} />
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;