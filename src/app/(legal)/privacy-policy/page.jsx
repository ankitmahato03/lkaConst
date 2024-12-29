"use client";

import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect personal information that you voluntarily provide to us when you use our services, such as your name, email address, and any other information you choose to provide. We may also automatically collect certain information about your device and how you interact with our website.",
      icon: Eye,
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to comply with legal obligations, and to protect our rights and the rights of others.",
      icon: FileText,
    },
    {
      title: "Information Sharing and Disclosure",
      content:
        "We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, with your consent, or as required by law.",
      icon: Lock,
    },
    {
      title: "Your Rights and Choices",
      content:
        "You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your information. To exercise these rights, please contact us using the information provided below.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#1EE05B]"
          {...fadeIn}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          At LKA, we are committed to protecting your privacy and ensuring the
          security of your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              {...fadeIn}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-[#1EE05B] mr-3" />
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-300">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          {...fadeIn}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-300 mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date at the top of this Privacy
            Policy.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Email: privacy@lka.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Privacy Lane, Secure City, ST 12345</li>
          </ul>
          <Button className="bg-[#1EE05B] hover:bg-[#19B84A] text-black">
            Contact Us
          </Button>
        </motion.div>

        <motion.p
          className="text-center text-gray-400 mt-12"
          {...fadeIn}
          transition={{ delay: 0.8 }}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
