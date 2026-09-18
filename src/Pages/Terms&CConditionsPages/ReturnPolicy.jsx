import React, { useEffect } from "react";
import {
  RotateCcw,
  PackageCheck,
  AlertCircle,
  Mail,
  MapPin,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";



const ReturnPolicy = () => {
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
          <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <RotateCcw size={28} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Return Policy
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Return &<span className="text-orange-500"> Refund Policy</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              We want you to receive your SLR Metals products in good condition.
              Please review our return policy before placing an order.
            </p>
          </div>
        </section>

        {/* =====================================================
            POLICY CONTENT
        ====================================================== */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-4xl space-y-6">
            {/* 01 GENERAL */}
            <div
              data-aos="fade-up"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <PackageCheck size={22} className="text-orange-500" />

                <h2 className="text-xl font-bold text-gray-900">
                  1. General Return Policy
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals accepts return requests only for products that are
                received damaged, defective, or significantly different from the
                product that was ordered.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Return requests must be communicated to us within the applicable
                return period after receiving the product.
              </p>
            </div>

            {/* 02 ELIGIBILITY */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                2. Return Eligibility
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                A product may be eligible for return when:
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600 sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  The product was damaged during delivery.
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  The product has a manufacturing defect.
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  The product received is substantially different from the
                  product ordered.
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  The product is unused and in its original condition, where
                  applicable.
                </li>
              </ul>
            </div>

            {/* 03 NON RETURNABLE */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <AlertCircle size={22} className="text-orange-500" />

                <h2 className="text-xl font-bold text-gray-900">
                  3. Non-Returnable Situations
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Returns may not be accepted for products that have been damaged,
                modified, misused, or used improperly after delivery.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Products returned without prior approval from SLR Metals may
                also be rejected.
              </p>
            </div>

            {/* 04 HOW TO REQUEST */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                4. How to Request a Return
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                To request a return, please contact SLR Metals and provide your
                order details along with a clear description of the issue.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Photos or videos of damaged or defective products may be
                requested to help us review the return request.
              </p>
            </div>

            {/* 05 APPROVAL */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                5. Return Approval
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Once your return request is reviewed, SLR Metals will inform you
                whether the product is eligible for return and provide further
                instructions where required.
              </p>
            </div>

            {/* 06 REFUND */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">6. Refunds</h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                If a refund is approved, the refund process will be discussed
                with the customer based on the order and payment method.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Refund processing time may vary depending on the payment method
                or financial institution involved.
              </p>
            </div>

            {/* 07 EXCHANGE */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                7. Product Replacement
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Where appropriate, SLR Metals may offer a replacement for a
                damaged or defective product instead of a refund.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Replacement availability depends on product availability and the
                circumstances of the order.
              </p>
            </div>

            {/* 08 CONTACT */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="rounded-2xl bg-orange-500 p-6 text-white shadow-xl sm:p-8"
            >
              <h2 className="text-xl font-bold">8. Contact Us</h2>

              <p className="mt-4 text-sm leading-7 text-orange-50 sm:text-base">
                If you have questions about returns, damaged products,
                replacements, or refunds, please contact SLR Metals.
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

                  <span>Kumbakonam, Tamil Nadu, India</span>
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

export default ReturnPolicy;
