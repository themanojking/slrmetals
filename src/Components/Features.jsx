import React from "react";
import {
  Truck,
  PiggyBank,
  Medal,
  Coins,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    text: "Free Shipping Purchase Upto ₹10k",
  },
  {
    icon: PiggyBank,
    text: "Pay On Delivery",
  },
  {
    icon: Medal,
    text: "100% Quality Guaranteed",
  },
  {
    icon: Coins,
    text: "Reward Points On Every Purchase",
  },
];

const Features = () => {
  return (
    <section className="w-full px-2 sm:px-4 py-6">
      <div className="w-full bg-black rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`
                  flex flex-col items-center justify-center
                  min-h-[180px] px-5 py-8
                  text-center
                  ${index !== 0 ? "lg:border-l lg:border-gray-700" : ""}
                  ${index === 2 ? "sm:border-l sm:border-gray-700 lg:border-l" : ""}
                `}
              >
                {/* Icon */}
                <Icon
                  size={78}
                  strokeWidth={1.5}
                  className="mb-5 text-white"
                  style={{
                    stroke: "#ffffff",
                  }}
                />

                {/* Text */}
                <p className="text-white text-base sm:text-lg font-normal">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;