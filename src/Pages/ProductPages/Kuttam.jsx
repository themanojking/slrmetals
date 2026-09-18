import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { kuttamproducts } from "../../Utils/data";
import ProductCard from "../../Components/ProductCard";

const Kuttam = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 mx-10">
        <h1 className="text-5xl font-bold">Kuttam</h1>
        <div className="flex items-center gap-3 mt-2">
          <hr className="w-6" />
          <h3 className="font-semibold">
            Strong in strength, timeless in style
          </h3>
        </div>
        <section className="px-4 py-10 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {kuttamproducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Kuttam;
