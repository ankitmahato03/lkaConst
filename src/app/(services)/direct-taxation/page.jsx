"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const DirectTaxation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 pt-24 px-4">
      <div className="container mx-auto px-4 py-12">
        <motion.section className="mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1EE05B]">
            Direct Taxation
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            In today’s complex tax environment, staying updated with current tax
            information is crucial for effective business management. At{" "}
            <span className="font-bold">LKA</span>, our partners and
            professionals leverage their extensive accounting experience to
            prepare tax returns, represent clients before tax authorities, and
            provide comprehensive tax advice.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Our Direct Tax Services Include:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Corporate Tax Advisory",
              "Global Tax and Business Advisory",
              "Representation Services",
              "Transfer Pricing",
              "Income Tax Compliance Services",
              "NRI Tax Return Filing",
              "Certification and Related Services",
              "Personal Assistance for Compliance Work",
              "Individual Tax Planning",
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-[#1EE05B] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-800">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Expertise:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Our team’s deep understanding of financial accounts ensures accurate tax assessment and preparation.",
              "We have a specialized Direct Tax cell within our firm.",
              "We collaborate with Direct Tax Specialists and Senior Advocates to handle complex tax issues.",
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-[#1EE05B] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-800">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-16" {...fadeIn}>
          <p className="text-xl text-gray-800 mb-8">
            Our firm is dedicated to providing top-tier tax services to meet
            your business needs.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default DirectTaxation;
