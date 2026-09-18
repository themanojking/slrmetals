import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const productItems = [
    {
      name: "Kittels",
      path: "/kittles",
    },
    {
      name: "Kinam",
      path: "/kinam",
    },
    {
      name: "Kuttam",
      path: "/kuttam",
    },
    {
      name: "Valli",
      path: "/valli",
    },
  ];

  const overviewItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const policyItems = [
    {
      name: "Privacy & Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Shipping Policy",
      path: "/shipping-policy",
    },
    {
      name: "Return Policy",
      path: "/return-policy",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 bg-[#24160F] text-white">

      {/* ========================================
          LOGO SECTION
      ======================================== */}

      <div className="flex flex-col items-center px-5 pt-14 sm:pt-16">

        {/* Logo Circle */}

        <div
          className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            border-4
            border-[#F97316]
            bg-white
            shadow-xl
            shadow-black/20
            sm:h-32
            sm:w-32
          "
        >
          <img
            src="/Images/LV.tuxpi.png"
            alt="Smart Dry Fruits"
            className="
              h-24
              w-24
              rounded-full
              object-cover
              sm:h-28
              sm:w-28
            "
          />
        </div>

        {/* Company Name */}

        <div className="mt-5 text-center">

          <h2
            className="
              text-xl
              font-bold
              uppercase
              tracking-[3px]
              text-[#FFF7ED]
              sm:text-2xl
            "
          >
            SLR
          </h2>

          <p
            className="
              mt-1
              text-sm
              font-semibold
              uppercase
              tracking-[6px]
              text-[#F59E0B]
              sm:text-base
            "
          >
            METALS
          </p>

        </div>
      </div>


      {/* ========================================
          FOOTER CONTENT
      ======================================== */}

      <div
        className="
          mx-auto
          mt-12
          max-w-7xl
          px-5
          pb-12
          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-t
            border-white/10
            pt-10

            sm:grid-cols-2

            lg:grid-cols-12
            lg:gap-8
          "
        >

          {/* ====================================
              1. ADDRESS & CONTACT
          ==================================== */}

          <div className="sm:col-span-2 lg:col-span-4">

            <h3
              className="
                mb-5
                text-lg
                font-semibold
                tracking-wide
                text-[#F59E0B]
              "
            >
              Address & Contact
            </h3>

            {/* Address */}

            <div className="flex gap-3">

              <MapPin
                size={20}
                className="mt-1 shrink-0 text-[#F97316]"
              />

              <p className="text-sm leading-7 text-white/80">
                27, Arumugam Street,
                <br />
                Pattaiannanagar, Valayapettai Agraharam,
                <br />
                Kumbakonam,
                <br />
                Tamil Nadu - 612001, India.
              </p>

            </div>

            {/* Email */}

            <a
              href="mailto:smartnutsheaven@gmail.com"
              className="
                mt-5
                flex
                items-center
                gap-3
                text-sm
                text-white/80
                transition
                hover:text-[#F59E0B]
              "
            >
              <Mail
                size={19}
                className="text-[#F97316]"
              />

              <span>
                slrmetals@gmail.com
              </span>
            </a>

            {/* Phone */}

            <a
              href="tel:+919442124681"
              className="
                mt-4
                flex
                items-center
                gap-3
                text-sm
                text-white/80
                transition
                hover:text-[#F59E0B]
              "
            >
              <Phone
                size={19}
                className="text-[#F97316]"
              />

              <span>
                +91 94421 24681
              </span>
            </a>

          </div>


          {/* ====================================
              2. PRODUCTS
          ==================================== */}

          <div className="lg:col-span-2">

            <h3
              className="
                mb-5
                text-lg
                font-semibold
                tracking-wide
                text-[#F59E0B]
              "
            >
              Products
            </h3>

            <div className="flex flex-col gap-3">

              {productItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className="
                    w-fit
                    text-sm
                    text-white/75
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#F97316]
                  "
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>


          {/* ====================================
              3. OVERVIEW
          ==================================== */}

          <div className="lg:col-span-2">

            <h3
              className="
                mb-5
                text-lg
                font-semibold
                tracking-wide
                text-[#F59E0B]
              "
            >
              Overview
            </h3>

            <div className="flex flex-col gap-3">

              {overviewItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className="
                    w-fit
                    text-sm
                    text-white/75
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#F97316]
                  "
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>


          {/* ====================================
              4. POLICIES
          ==================================== */}

          <div className="lg:col-span-2">

            <h3
              className="
                mb-5
                text-lg
                font-semibold
                tracking-wide
                text-[#F59E0B]
              "
            >
              Policies & Help
            </h3>

            <div className="flex flex-col gap-3">

              {policyItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className="
                    w-fit
                    text-sm
                    text-white/75
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#F97316]
                  "
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>


          {/* ====================================
              5. FOLLOW US
          ==================================== */}

          <div className="lg:col-span-2">

            <h3
              className="
                mb-5
                text-lg
                font-semibold
                tracking-wide
                text-[#F59E0B]
              "
            >
              Follow Us
            </h3>

            <p className="mb-5 text-sm leading-6 text-white/70">
              Follow us for latest products,
              offers and updates.
            </p>

            <div className="flex gap-3">

              {/* WhatsApp */}

              <a
                href="https://wa.me/919442124681"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#24160F]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#F97316]
                  hover:text-white
                "
              >
                <MessageCircle size={21} />
              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/sdfkumbakonam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#24160F]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#F97316]
                  hover:text-white
                "
              >
                <FaInstagram size={21} />
              </a>

            </div>

          </div>

        </div>
      </div>


      {/* ========================================
          BOTTOM DIVIDER
      ======================================== */}

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="border-t border-white/10" />

      </div>


      {/* ========================================
          COPYRIGHT
      ======================================== */}

      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-3
          px-5
          py-7
          text-center
        "
      >

        <p className="text-xs text-white/60 sm:text-sm">

          © {new Date().getFullYear()} SLR Metals.
          All Rights Reserved.

        </p>


        <p className="text-xs text-white/50 sm:text-sm">

          Designed & Developed by{" "}

          <a
            href="https://kudanthaiinfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-medium
              text-[#F59E0B]
              transition-colors
              hover:text-[#F97316]
            "
          >
            Kudanthai Infotech
          </a>

        </p>

      </div>

    </footer>
  );
};

export default Footer;