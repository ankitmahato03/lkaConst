"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const GSTAndCustom = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 pt-24 px-4">
      <div className="container mx-auto px-4 py-12">
        <motion.section className="mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1EE05B]">
            Goods & Services Tax (GST) And Custom Duty
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            At <span className="font-bold">LKA</span>, we house a dedicated team
            of experts specializing in GST and Custom Duty, staffed by seasoned
            experts proficient in these domains. Our commitment is to ensure
            that our clients align with tax regulations, facilitating seamless
            adherence to business objectives. Our comprehensive service
            offerings include:
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Our GST and Custom Duty services include:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "GST Advisory and Consulting",
              "GST Registration Services",
              "GST Compliance services",
              "GST Audit and Assurance",
              "GST Refunds",
              "GST Appeals and Assessments",
              "GST Due Diligence",
              "Consultation on Business Models",
              "Expert Opinions",
              "Structural Analysis of Businesses in Relation to Tax Laws",
              "Representation Before Authorities",
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
            We prioritize client success by providing meticulous guidance and
            effective solutions tailored to meet their specific needs in GST
            matters.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default GSTAndCustom;
