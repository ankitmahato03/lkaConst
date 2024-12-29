"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const AuditingAttestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 px-4">
      <div className="container mx-auto px-4 py-12">
        <motion.section className="mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1EE05B]">
            Audit & Assurance
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            At LKA, we provide comprehensive Audit & Assurance (A&A) services
            tailored for traders and industrialists of all sizes and sectors.
            Our team strictly adheres to audit norms to ensure precise and
            effective audit execution.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Our Approach:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Systematic Study",
                description:
                  "We analyze your working systems, business nature, and volume to offer suitable changes and valuable suggestions that enhance efficiency and achieve better results.",
              },
              {
                title: "Client-Centric Service",
                description:
                  "We conduct audits efficiently to avoid unnecessary queries and disruptions, ensuring minimal inconvenience to our clients.",
              },
              {
                title: "Timely Completion",
                description:
                  "Our goal is to complete audit tasks promptly, providing thorough services without causing undue hassle to our patrons.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-[#1EE05B]">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Our Audit & Assurance Services Include:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Financial Statement Audit",
              "Regulatory Compliance & Reporting",
              "Assistance on Capital Market Transactions",
              "Independent Controls & Systems Process Assurance",
              "Internal Audit",
              "Concurrent Audit",
              "Revenue Audit",
              "Stock Audit",
              "Follow-up Audits",
              "Consultation Reviews",
              "Special Investigations",
              "Audit of Co-operative Societies",
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

        <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
          <h2 className="text-3xl font-semibold mb-6">Expertise and Team</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-6">
              Our A&A team is led by a group of approximately 30 dedicated
              professionals, including both young and experienced Chartered
              Accountants. We go beyond traditional A&A procedures, providing
              real value addition through innovative and dynamic solutions. By
              choosing LKA, you ensure a reliable and efficient audit process
              designed to meet your specific business needs.
            </p>
            <Button className="bg-[#1EE05B] hover:bg-[#19B84A] text-black">
              Learn More About LKA
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AuditingAttestPage;
