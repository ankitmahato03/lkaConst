"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const FinancialAdvisory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 px-4">
      <div className="container mx-auto px-4 py-12">
        <motion.section className="mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1EE05B]">
            Financial Advisory Services
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Planning and allocating funds across diverse portfolios to achieve
            personal financial goals can be complex. However, with the guidance
            of a financial advisor, this process becomes streamlined and
            effective. At <span className="font-bold">LKA</span>, our team of
            dedicated financial advisors offers customized solutions to optimize
            fund utilization and achieve individual financial objectives.
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
              "Financial Analysis",
              "SME IPO Consultation",
              "Valuation Services",
              "Risk Management Advisory",
              "IPO Advisory Services",
              "Financial Due Diligence",
              "Financial Modeling",
              "IPO Consultation",
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

        <motion.section className="mb-16" {...fadeIn}>
          <p className="text-xl text-gray-300 mb-8">
            Count on our expertise to navigate the complexities of business
            initiation, enabling you to focus on your entrepreneurial goals with
            confidence.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default FinancialAdvisory;
