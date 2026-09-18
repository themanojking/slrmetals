import React, { useEffect } from "react";
import {
  FileText,
  ShoppingBag,
  ShieldCheck,
  AlertCircle,
  Mail,
  MapPin,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";



const TermsAndConditions = () => {
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
              <FileText size={28} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Terms & Conditions
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Terms &
              <span className="text-orange-500"> Conditions</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Please read these terms and conditions carefully before using
              the SLR Metals website or placing an order.
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-4xl space-y-6">

            {/* 01 ACCEPTANCE */}
            <div
              data-aos="fade-up"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  1. Acceptance of Terms
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                By accessing or using the SLR Metals website, you agree to
                comply with these Terms & Conditions. If you do not agree with
                any part of these terms, please do not use our website.
              </p>
            </div>

            {/* 02 WEBSITE USE */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                2. Use of Our Website
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                The SLR Metals website is provided to share information about
                our products and services and to allow customers to contact us
                regarding their requirements.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                You agree not to misuse the website, attempt to gain
                unauthorized access, or use the website for unlawful purposes.
              </p>
            </div>

            {/* 03 PRODUCT INFORMATION */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  3. Product Information
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                We make reasonable efforts to provide accurate product
                descriptions, images, specifications and pricing on our
                website.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                However, product appearance, availability, specifications or
                pricing may change without prior notice.
              </p>
            </div>

            {/* 04 ORDERS */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                4. Orders and Confirmation
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                An order or enquiry submitted through the website does not
                necessarily constitute final acceptance of an order.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Orders may be confirmed after reviewing product availability,
                quantity, pricing, delivery requirements and other relevant
                details with the customer.
              </p>
            </div>

            {/* 05 PRICING */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                5. Pricing and Availability
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Product prices and availability may change from time to time.
                SLR Metals reserves the right to correct pricing or product
                information errors when necessary.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Any applicable shipping or additional charges will be
                communicated before order confirmation.
              </p>
            </div>

            {/* 06 PAYMENT */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                6. Payment
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Payment terms, where applicable, will be communicated and
                agreed with the customer before an order is processed.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Orders may be processed only after the required payment or
                payment confirmation has been received, where applicable.
              </p>
            </div>

            {/* 07 SHIPPING */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                7. Shipping and Delivery
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Shipping and delivery arrangements depend on the product,
                order quantity, delivery location and agreed order terms.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                For more information, please refer to our Shipping Policy.
              </p>
            </div>

            {/* 08 RETURNS */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                8. Returns and Refunds
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Returns, replacements and refunds are subject to our Return
                Policy and the specific conditions applicable to the order.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Customers are encouraged to review the Return Policy before
                placing an order.
              </p>
            </div>

            {/* 09 INTELLECTUAL PROPERTY */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                9. Intellectual Property
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                All website content, including text, logos, images, graphics,
                designs and other materials, belongs to SLR Metals or is used
                with appropriate permission.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Website content may not be copied, reproduced, modified or
                distributed without prior permission.
              </p>
            </div>

            {/* 10 LIABILITY */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <AlertCircle
                  size={22}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  10. Limitation of Liability
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals will make reasonable efforts to maintain accurate
                website information and reliable services. However, we do not
                guarantee that the website will always be available,
                error-free or free from interruptions.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals shall not be responsible for losses resulting from
                circumstances beyond our reasonable control.
              </p>
            </div>

            {/* 11 CHANGES */}
            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                11. Changes to These Terms
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals may update these Terms & Conditions from time to
                time. Updated terms will be published on this page.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Continued use of the website after changes are published
                indicates acceptance of the updated terms.
              </p>
            </div>

            {/* 12 CONTACT */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="rounded-2xl bg-orange-500 p-6 text-white shadow-xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <Mail size={22} />

                <h2 className="text-xl font-bold">
                  12. Contact Us
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-orange-50 sm:text-base">
                If you have any questions about these Terms & Conditions,
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

export default TermsAndConditions;