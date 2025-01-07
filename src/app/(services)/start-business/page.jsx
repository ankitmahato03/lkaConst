"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const StartBusiness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 pt-24 px-4">
      <div className="container mx-auto px-4 py-12">
        <motion.section className="mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1EE05B]">
            Starting a Business? Trust in Our Expertise.
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            Whether you&apos;re launching a proprietorship or establishing a
            company, navigating legal compliance is essential. At{" "}
            <span className="font-bold">LKA</span>, we specialize in providing
            comprehensive support for initiating businesses, ensuring meticulous
            financial transaction management, and facilitating accurate tax
            filings. Our decades of experience in business setup and legal
            documentation streamline the process, making it seamless for you to
            kickstart your venture.
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
              "Public Limited Company Setup",
              "Private Limited Company Registration",
              "Limited Liability Partnership (LLP) Formation",
              "One Person Company (OPC) Establishment",
              "Secretarial Compliances",
              "Partnership Registration",
              "Setting up Subsidiaries in India",
              "Business Entity Selection",
              "Financial Advisory",
              "Tax Registration and Compliance",
              "Trademark and Intellectual Property (IP) Registration",
              "Drafting Legal Agreements and Contracts",
              "Investment and Funding Advisory",
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
            Count on our expertise to navigate the complexities of business
            initiation, enabling you to focus on your entrepreneurial goals with
            confidence.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default StartBusiness;
