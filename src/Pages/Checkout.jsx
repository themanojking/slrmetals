import React, { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  ShoppingBag,
  ArrowLeft,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { clearCart } from "../Redux/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Customer form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Success popup state
  const [showSuccess, setShowSuccess] = useState(false);

  // Store order information before clearing cart
  const [orderSummary, setOrderSummary] = useState({
    totalItems: 0,
    subtotal: 0,
  });

  // Total number of products
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit order
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check cart
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Replace with SLR Metals WhatsApp number
    const whatsappNumber = "919344245993";

    // Create WhatsApp message
    let message = `*SLR METALS - New Order*\n\n`;

    // Customer details
    message += `*Customer Details*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}\n\n`;

    // Order details
    message += `*Order Details*\n`;

    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;

      message += `\n${index + 1}. *${item.name}*\n`;
      message += `Quantity: ${item.quantity}\n`;
      message += `Price: ₹${item.price}\n`;
      message += `Item Total: ₹${itemTotal}\n`;
    });

    // Price summary
    message += `\n--------------------\n`;
    message += `Total Items: ${totalItems}\n`;
    message += `Subtotal: ₹${subtotal}\n`;
    message += `Total: ₹${subtotal}\n`;

    // Encode WhatsApp message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    // IMPORTANT:
    // Save order summary BEFORE clearing cart
    setOrderSummary({
      totalItems: totalItems,
      subtotal: subtotal,
    });

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear Redux + LocalStorage
    dispatch(clearCart());

    // Show success popup
    setShowSuccess(true);
  };

  // Continue shopping
  const handleContinueShopping = () => {
    setShowSuccess(false);
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#FFFDF8] px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* =========================
              HEADER
          ========================== */}

          <div className="mb-10">
            <Link
              to="/cart"
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
            >
              <ArrowLeft size={17} />
              Back to Cart
            </Link>

            <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Checkout
            </p>

            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Complete Your Order
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Enter your details and send your order directly through WhatsApp.
            </p>
          </div>

          {/* =========================
              MAIN CONTENT
          ========================== */}

          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* =========================
                CUSTOMER FORM
            ========================== */}

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Customer Details
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Please provide your contact and delivery information.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  <p className="mt-1.5 text-xs text-gray-400">
                    Enter a valid 10-digit mobile number
                  </p>
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Delivery Address
                  </label>

                  <div className="relative">
                    <MapPin
                      size={19}
                      className="absolute left-4 top-4 text-gray-400"
                    />

                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete delivery address"
                      rows="5"
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 text-sm font-bold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]"
                >
                  <Send size={19} />
                  Place Order on WhatsApp
                </button>

                <p className="text-center text-xs leading-5 text-gray-400">
                  Your order details will be opened in WhatsApp for
                  confirmation.
                </p>
              </form>
            </div>

            {/* =========================
                ORDER SUMMARY
            ========================== */}

            <div className="h-fit rounded-3xl border border-orange-100 bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <ShoppingBag size={21} />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-gray-900">
                    Order Summary
                  </h2>

                  <p className="text-xs text-gray-500">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </p>
                </div>
              </div>

              {/* Cart Products */}
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 border-b border-gray-100 pb-4"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-bold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm font-bold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="mt-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Items</span>

                  <span className="font-semibold text-gray-800">
                    {totalItems}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>

                  <span className="font-semibold text-gray-800">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-extrabold text-orange-600">
                      ₹{subtotal}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            SUCCESS POPUP
        ========================== */}

        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl sm:p-10">
              {/* Success Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 size={45} className="text-green-500" />
              </div>

              {/* Title */}
              <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                Order Placed Successfully! 🎉
              </h2>

              {/* Message */}
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Your order details have been opened in WhatsApp. Please send the
                message to SLR Metals to confirm your order.
              </p>

              {/* Customer Information */}
              <div className="mt-6 rounded-2xl bg-orange-50 p-5 text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  Customer
                </p>

                <p className="mt-2 text-sm font-semibold text-gray-900">
                  {formData.name}
                </p>

                <p className="mt-1 text-sm text-gray-600">{formData.phone}</p>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {formData.address}
                </p>

                {/* Order Summary */}
                <div className="mt-4 border-t border-orange-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Items</span>

                    <span className="text-sm font-bold text-gray-900">
                      {orderSummary.totalItems}
                    </span>
                  </div>

                  <div className="mt-2 flex justify-between">
                    <span className="text-sm font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-lg font-extrabold text-orange-600">
                      ₹{orderSummary.subtotal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Continue Shopping */}
              <button
                type="button"
                onClick={handleContinueShopping}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 text-sm font-bold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]"
              >
                <CheckCircle2 size={19} />
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
