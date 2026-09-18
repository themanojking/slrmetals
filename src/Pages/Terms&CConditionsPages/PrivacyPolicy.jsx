import React, { useEffect } from "react";
import { ShieldCheck, Mail, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";



const PrivacyPolicy = () => {
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
        {/* HERO */}
        <section className="px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pb-16 lg:pt-20">
          <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <ShieldCheck size={28} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Privacy Policy
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Your Privacy
              <span className="text-orange-500"> Matters to Us</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              This Privacy Policy explains how SLR Metals handles information
              when you visit our website or contact us.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-4xl space-y-6">
            {/* INTRODUCTION */}
            <div
              data-aos="fade-up"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                1. Introduction
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals, located in Kumbakonam, Tamil Nadu, respects your
                privacy. We are committed to protecting any information that you
                voluntarily provide when contacting us through our website.
              </p>
            </div>

            {/* INFORMATION */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                2. Information We Collect
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals does not collect personal information automatically
                through tracking or analytics tools.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                If you contact us voluntarily, we may receive information such
                as your name, phone number, email address, or enquiry details.
              </p>
            </div>

            {/* USE OF INFORMATION */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                3. How We Use Your Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Information voluntarily provided by you may be used only to:
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Respond to your enquiries.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Provide information about our products.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Communicate with you regarding your requirements.
                </li>
              </ul>
            </div>

            {/* DATA SECURITY */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                4. Data Security
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                We take reasonable steps to keep information voluntarily
                provided to us secure and use it only for legitimate business
                communication.
              </p>
            </div>

            {/* INFORMATION SHARING */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                5. Information Sharing
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals does not sell, rent, or trade your personal
                information with third parties.
              </p>
            </div>

            {/* THIRD PARTY */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                6. Third-Party Services
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Our website does not intentionally use analytics, advertising
                pixels, customer tracking systems, payment gateways, or customer
                account systems.
              </p>
            </div>

            {/* CHANGES */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">
                7. Changes to This Policy
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                SLR Metals may update this Privacy Policy when necessary. Any
                changes will be published on this page.
              </p>
            </div>

            {/* CONTACT */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="rounded-2xl bg-orange-500 p-6 text-white shadow-xl sm:p-8"
            >
              <h2 className="text-xl font-bold">8. Contact Us</h2>

              <p className="mt-4 text-sm leading-7 text-orange-50 sm:text-base">
                If you have any questions about this Privacy Policy, please
                contact us using the details below.
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

export default PrivacyPolicy;
