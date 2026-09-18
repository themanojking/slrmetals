import React from "react";
import Navbar from "../Components/Navbar";
import ImageSliderHome from "../Components/ImageSliderHome";
import { productCategories } from "../Utils/data";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Navbar />

      <ImageSliderHome />

      {/* Products Section */}
      <section className="mx-5 mt-16 sm:mx-8 lg:mx-10">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Our Collection
          </p>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Products
          </h1>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <Link key={category.id} to={category.link}>
              <div
                className="relative h-[275px] overflow-hidden rounded-[25px] group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Category Name */}
                <h2 className="absolute left-3 top-3 text-2xl font-extrabold text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.8)]">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
