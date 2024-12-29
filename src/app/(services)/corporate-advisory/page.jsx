"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CorporateAdvisory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 px-4">
      <div className="container mx-auto px-4 py-12">
        <motion.section className="mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1EE05B]">
            Corporate Advisory
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            At <span className="font-bold">LKA</span>, we specialize in a wide
            range of legal services essential for businesses, from company
            incorporation to dissolution. We specialize in handling complex
            corporate matters such as mergers and acquisitions, joint ventures,
            partnerships, and more. Our services extend to matters concerning
            company directors, shareholders, and other stakeholders, ensuring
            comprehensive legal support for all corporate activities. We also
            provide expert guidance on trade regulations and settlement
            procedures.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Our services include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Company Formation and Incorporation",
              "Mergers and Acquisitions",
              "Joint Ventures and Partnerships",
              "Corporate Governance",
              "Shareholder and Director Issues",
              "Trade and Settlement Services",
              "Corporate Laws",
              "Negotiable Instruments",
              "Commercial Laws",
              "Banking Laws",
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-[#1EE05B] w-5 h-5 flex-shrink-0" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CorporateAdvisory;
