import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageSlider = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1600&q=80",
      title: "Premium Kettles",
      description: "Modern kettles designed for your everyday kitchen.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1600&q=80",
      title: "Stylish Jugs",
      description: "Beautiful jugs that bring style to every table.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1600&q=80",
      title: "Made For Everyday",
      description: "Simple, elegant and reliable kitchen essentials.",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="kettle-slider h-[500px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] w-full overflow-hidden">
              
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
                  <div className="max-w-xl text-white">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                      Kettle & Jug
                    </p>

                    <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h2>

                    <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
                      {slide.description}
                    </p>

                    <button className="mt-7 rounded-full bg-orange-500 px-7 py-3 font-bold text-white shadow-lg shadow-orange-900/30 transition hover:-translate-y-1 hover:bg-orange-600">
                      Shop Now
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop arrows only */}
      <style>{`
        .kettle-slider .swiper-button-prev,
        .kettle-slider .swiper-button-next {
          display: none;
        }

        @media (min-width: 1024px) {
          .kettle-slider .swiper-button-prev,
          .kettle-slider .swiper-button-next {
            display: flex;
          }
        }

        .kettle-slider .swiper-button-prev,
        .kettle-slider .swiper-button-next {
          color: #f97316;
          background: rgba(255, 255, 255, 0.9);
          width: 48px;
          height: 48px;
          border-radius: 9999px;
        }

        .kettle-slider .swiper-button-prev::after,
        .kettle-slider .swiper-button-next::after {
          font-size: 18px;
          font-weight: 800;
        }
      `}</style>
    </section>
  );
};

export default ImageSlider;

