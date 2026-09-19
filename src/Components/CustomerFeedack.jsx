import React, { useEffect, useRef } from "react";
import { MapPin, Star } from "lucide-react";
import { customerfeedback } from "../Utils/data";

const CustomerFeedback = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      const card = slider.querySelector("[data-feedback-card]");

      if (!card) return;

      const gap = 24;
      const scrollAmount = card.offsetWidth + gap;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FFFDF8] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
            Customer Reviews
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            We value every customer and every experience.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {customerfeedback.map((customer) => (
            <div
              key={customer.id}
              data-feedback-card
              className="w-full shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex h-full min-h-[270px] flex-col rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Customer Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="h-14 w-14 shrink-0 rounded-full border-2 border-orange-100 object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold text-gray-900">
                      {customer.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={14} className="shrink-0 text-orange-500" />
                      <span>{customer.location}</span>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="currentColor"
                      className="text-orange-400"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="mt-5 flex-1 text-sm leading-6 text-gray-600">
                  “{customer.feedback}”
                </p>

                {/* Bottom */}
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-orange-500">
                    Verified Customer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
