"use client";

import React from "react";
import { motion } from "motion/react";

const clients = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Open AI", logo: "/logos/openai.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Airbnb", logo: "/logos/airbnb.svg" },
  { name: "TCS", logo: "/logos/tcs.svg" },
];

const MarqueeClients = () => {
  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-black mb-16">
          Trusted by Industry Leaders
        </h2>
        <div className="relative">
          <div className="flex overflow-x-hidden">
            <motion.div
              className="flex space-x-16 mx-16"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {clients.concat(clients).map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center w-40 h-20"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeClients;
