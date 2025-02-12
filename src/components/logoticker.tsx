"use client";

import logo from "@/app/assets/logo-trans.png";

import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [logo, logo, logo, logo, logo, logo, logo, logo];

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <img
                  key={index} // Add key prop here
                  src={logo.src}
                  className="h-60 w-auto"
                  alt={`Logo ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
