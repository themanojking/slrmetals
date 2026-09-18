import React, { useEffect } from "react";
import {
  Truck,
  Package,
  MapPin,
  Clock,
  AlertCircle,
  Mail,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";



const ShippingPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-gray-900">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pb-16 lg:pt-20">
          <div
            data-aos="fade-up"
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <Truck size={28} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Shipping Policy
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Shipping &
              <span className="text-orange-500"> Delivery</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Information about order processing, product shipping and
              delivery for SLR Metals customers.
            </p>
          </div>
        </section>

        {/* =====================================================
            SHIPPING CONTENT
        ====================================================== */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-4xl space-y-6">

            {/* 01 ORDER PROCESSING */}
            <div
              data-aos="fade-up"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <Package
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  1. Order Processing
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Once an order is confirmed, SLR Metals will begin processing
                the order according to the product requirements and agreed
                order details.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Processing time may vary depending on product availability,
                quantity and order requirements.
              </p>
            </div>

            {/* 02 SHIPPING */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <Truck
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  2. Shipping
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Products will be prepared and packed carefully before being
                dispatched to the customer.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Shipping arrangements may depend on the product, order
                quantity, delivery location and the agreed terms of the order.
              </p>
            </div>

            {/* 03 DELIVERY */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <MapPin
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  3. Delivery
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Delivery time depends on the destination, product
                availability, order quantity and shipping arrangements.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Customers will be informed about the expected delivery
                details when applicable.
              </p>
            </div>

            {/* 04 DELIVERY DELAYS */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <Clock
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  4. Delivery Delays
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Delivery may occasionally be delayed due to circumstances
                beyond our reasonable control, including transportation
                issues, weather conditions, holidays or other unforeseen
                circumstances.
              </p>
            </div>

            {/* 05 ADDRESS */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <MapPin
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  5. Delivery Address
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Customers are responsible for providing accurate and complete
                delivery information when placing an order.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals may not be responsible for delays or delivery
                issues caused by incorrect or incomplete address information
                provided by the customer.
              </p>
            </div>

            {/* 06 DAMAGED PACKAGE */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <AlertCircle
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  6. Damaged Products
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                If a product arrives damaged, customers are requested to
                contact SLR Metals as soon as possible with the order details
                and relevant photographs or videos of the damage.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Return or replacement requests will be reviewed according to
                our Return Policy.
              </p>
            </div>

            {/* 07 SHIPPING CHARGES */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                7. Shipping Charges
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Shipping charges, if applicable, will depend on the order,
                quantity, destination and shipping arrangement.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Any applicable shipping charges will be communicated to the
                customer before order confirmation.
              </p>
            </div>

            {/* 08 CONTACT */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="rounded-2xl bg-orange-500 p-6 text-white shadow-xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <Mail size={22} />

                <h2 className="text-xl font-bold">
                  8. Contact Us
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-orange-50 sm:text-base">
                For questions regarding shipping, delivery or your order,
                please contact SLR Metals.
              </p>

              <div className="mt-6 space-y-4 text-sm sm:text-base">

                <div className="flex items-center gap-3">
                  <Mail size={19} />

                  <a
                    href="mailto:slrmetals@gmail.com"
                    className="underline underline-offset-4"
                  >
                    slrmetals@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={19} />

                  <span>
                    Kumbakonam, Tamil Nadu, India
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ShippingPolicy;