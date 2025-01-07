"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Accounting = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-24 px-4">
      <div className="container mx-auto px-4 py-12">
        <motion.section className="mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1EE05B]">
            Accounting Advisory Services
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Accurate accounting forms the backbone of every business. From small
            enterprises to large corporations, maintaining precise financial
            records is essential for seamless operations and legal compliance.
            At <span className="font-bold">LKA</span>, we offer comprehensive
            accounting services tailored to meet your specific needs. Whether
            you require basic record-keeping or a complete suite of services
            including system implementation and reporting, we provide solutions
            that ensure financial transparency and efficiency.
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
              "Financial Statement Preparation",
              "Bookkeeping Services",
              "Accounting System Setup",
              "Financial Analysis",
              "Budgeting and Forecasting",
              "Management Reporting",
              "Internal Control Review",
              "Audit Support",
              "Tax Planning and Advisory",
              "IFRS Accounting",
              "System Study & Design",
              "Supervising the Implementation of Accounting Systems",
              "Preparation of Accounting Manual",
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-[#1EE05B] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Accounting;
