import React, { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-gray-900">
        {/* =====================================================
            HERO / TITLE
        ====================================================== */}
        <section className="px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pb-16 lg:pt-20">
          <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Contact Us
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Get In
              <span className="text-orange-500"> Touch</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Have a question or looking for quality metal products? Feel free
              to contact us. We are happy to help.
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTACT DETAILS + MAP
        ====================================================== */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            {/* =================================================
                CONTACT DETAILS
            ================================================== */}
            <div
              data-aos="fade-right"
              className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Contact Details
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Reach out to SLR METAL for product enquiries, orders and other
                business requirements.
              </p>

              {/* ADDRESS */}
              <div className="mt-8 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Our Address</h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    SLR METAL
                    <br />
                    27, Arumugam Street,
                    <br />
                    Pattaiannanagar, Valayapettai Agraharam,
                    <br />
                    Kumbakonam, Tamil Nadu
                    <br />
                    India.
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="mt-7 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>

                  <a
                    href="tel:+919442124681"
                    className="mt-1 block text-sm text-gray-500 transition-colors hover:text-orange-500"
                  >
                    +91 94421 24681
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="mt-7 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>

                  <a
                    href="mailto:info@slrmetal.com"
                    className="mt-1 block break-all text-sm text-gray-500 transition-colors hover:text-orange-500"
                  >
                    slrmetals@gmail.com
                  </a>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="mt-7 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Clock size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Business Hours</h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* WHATSAPP / CONTACT BUTTON */}
              <a
                href="https://wa.me/919442124681"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-200 transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]"
              >
                <MessageCircle size={19} />
                Chat With Us
              </a>
            </div>

            {/* =================================================
                GOOGLE MAP
            ================================================== */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-2 shadow-sm"
            >
              <div className="h-[400px] overflow-hidden rounded-[1.5rem] sm:h-[450px] lg:h-full lg:min-h-[560px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.2938571993136!2d79.3635631!3d10.9551267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd2fb9286e91%3A0x23ca7ed6ad8ca9a8!2sSLR%20Metal%20Kumbakonam!5e1!3m2!1sen!2sin!4v1789767175055!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div
            data-aos="fade-up"
            className="mx-auto max-w-7xl rounded-[2rem] bg-[#FFF7ED] px-6 py-10 text-center sm:px-10"
          >
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Looking For Quality Metal Products?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Contact SLR METAL today for product enquiries, orders and business
              requirements.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
