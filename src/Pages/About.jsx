import React, { useEffect } from "react";
import { Factory, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
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
            HERO SECTION
        ====================================================== */}
        <section className="relative px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-20 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div data-aos="fade-right">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                <Sparkles size={16} />
                About SLR METAL
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Quality Metal
                <span className="block text-orange-500">
                  Essentials For Everyday Life
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                At SLR METAL, we focus on creating strong, reliable and
                practical metal products designed for everyday use.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                From manufacturing to final delivery, we pay attention to
                quality, finishing and customer requirements at every stage.
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-orange-100 bg-white px-4 py-3 shadow-sm">
                  <ShieldCheck size={19} className="text-orange-500" />

                  <span className="text-sm font-semibold text-gray-700">
                    Quality Focused
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-orange-100 bg-white px-4 py-3 shadow-sm">
                  <Factory size={19} className="text-orange-500" />

                  <span className="text-sm font-semibold text-gray-700">
                    Reliable Manufacturing
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div data-aos="fade-left" data-aos-delay="200" className="relative">
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-200/40 blur-3xl" />

              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-yellow-200/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-2 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=85"
                  alt="Metal manufacturing workshop"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
                />

                {/* IMAGE BADGE */}
                <div className="absolute bottom-7 left-7 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
                      <Factory size={22} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        Our Focus
                      </p>

                      <p className="text-sm font-bold text-gray-900">
                        Built With Care
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO WE ARE
        ====================================================== */}
        <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            {/* IMAGE */}
            <div data-aos="fade-right" className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
                  alt="Metal manufacturing and craftsmanship"
                  className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[430px]"
                />
              </div>

              {/* BADGE */}
              <div className="absolute -bottom-6 -right-3 rounded-2xl bg-orange-500 px-6 py-5 text-white shadow-xl sm:-right-6">
                <p className="text-3xl font-extrabold">100%</p>

                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-orange-100">
                  Quality Mindset
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div data-aos="fade-left" className="pt-4 lg:pt-0">
              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                More Than Metal,
                <span className="block text-orange-500">It's Our Craft</span>
              </h2>

              <p className="mt-6 text-base leading-7 text-gray-600">
                SLR METAL is focused on delivering dependable metal products for
                homes, businesses and everyday spaces.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600">
                We combine practical designs, quality materials and careful
                finishing to create products that customers can use with
                confidence.
              </p>

              {/* POINTS */}
              <div className="mt-7 space-y-4">
                {[
                  "Strong and practical product designs",
                  "Quality materials and finishing",
                  "Customer-focused approach",
                  "Reliable everyday metal essentials",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-orange-500"
                    />

                    <span className="text-sm font-medium text-gray-700 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW WE CREATE PRODUCTS
        ====================================================== */}
        <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            {/* SECTION TITLE */}
            <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
                Manufacturing Process
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                From Sheet To
                <span className="text-orange-500"> Finished Product</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                Every product goes through a careful process to ensure quality,
                durability and a clean finish.
              </p>
            </div>

            {/* PROCESS CARDS */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* STEP 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85"
                    alt="Metal workshop"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Factory size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    01. Shaping
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    Metal materials are carefully shaped and formed according to
                    the required product design and size.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85"
                    alt="Metal worker craftsmanship"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Sparkles size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    02. Crafting
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    Skilled craftsmanship brings the metal components together
                    to create the required product.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85"
                    alt="Quality checking in manufacturing"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <ShieldCheck size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    03. Finishing
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    Products are checked, finished and prepared to meet our
                    quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR JOURNEY & WORKING PROCESS
        ====================================================== */}
        <section className="bg-[#FFF7ED] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            {/* TITLE */}
            <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
                Our Journey
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Simple Process,
                <span className="text-orange-500"> Quality Products</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                From receiving your order to delivering the finished product, we
                follow a simple and reliable process.
              </p>
            </div>

            {/* PROCESS */}
            <div className="relative mt-12">
              {/* CONNECTING LINE */}
              <div className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-orange-200 lg:block" />

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* 01 */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-lg shadow-orange-200">
                    01
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    Founded With Purpose
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    SLR METAL was started with a simple goal — to create
                    reliable and quality metal products for everyday use.
                  </p>
                </div>

                {/* 02 */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-lg shadow-orange-200">
                    02
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    Order Confirmation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    We understand your requirements and confirm the product,
                    quantity and pricing before processing the order.
                  </p>
                </div>

                {/* 03 */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-lg shadow-orange-200">
                    03
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    Quality Manufacturing
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Every product goes through shaping, crafting, finishing and
                    quality checking before it is ready.
                  </p>
                </div>

                {/* 04 */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="450"
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-lg shadow-orange-200">
                    04
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    Safe Delivery
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Finished products are checked, packed carefully and prepared
                    for delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="px-5 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
          <div
            data-aos="zoom-in"
            className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-500 px-6 py-12 text-center shadow-xl sm:px-10 lg:py-16"
          >
            <p className="text-sm font-bold uppercase tracking-[3px] text-orange-100">
              SLR METAL
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Quality You Can Trust,
              <br />
              Products Made For Everyday Life
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-orange-50 sm:text-base">
              Explore our collection of carefully designed metal essentials and
              discover products made with purpose.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
