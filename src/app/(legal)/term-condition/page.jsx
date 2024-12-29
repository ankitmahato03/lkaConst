"use client";

import React from "react";
import { motion } from "motion/react";
import { Scroll, ShieldCheck, Scale, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const TermsAndConditionsPage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using LKA's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services.",
      icon: Scroll,
    },
    {
      title: "Use of Services",
      content:
        "Our services are provided 'as is' and 'as available'. You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions.",
      icon: ShieldCheck,
    },
    {
      title: "Intellectual Property",
      content:
        "The content, features, and functionality of our services are owned by LKA and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
      icon: Scale,
    },
    {
      title: "Limitation of Liability",
      content:
        "LKA shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.",
      icon: AlertCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#1EE05B]"
          {...fadeIn}
        >
          Terms and Conditions
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Welcome to LKA. These Terms and Conditions outline the rules and
          regulations for the use of our services. By accessing this website and
          using our services, we assume you accept these terms and conditions in
          full.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-[#1EE05B] mr-3" />
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-300">{section.content}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Detailed Terms</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Service Description</AccordionTrigger>
              <AccordionContent>
                LKA provides financial and business consulting services,
                including but not limited to auditing, accounting, tax planning,
                and business process optimization. The specific services
                provided will be outlined in the engagement agreement between
                LKA and the client.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Client Responsibilities</AccordionTrigger>
              <AccordionContent>
                Clients are responsible for providing accurate and complete
                information necessary for LKA to perform its services. Clients
                must also ensure they have the right to disclose any information
                provided to LKA and that such disclosure does not violate any
                confidentiality agreements or legal restrictions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Confidentiality</AccordionTrigger>
              <AccordionContent>
                LKA agrees to maintain the confidentiality of client information
                and to not disclose such information to third parties without
                the client&apos;s consent, except as required by law or professional
                standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Payment Terms</AccordionTrigger>
              <AccordionContent>
                Fees for services will be outlined in the engagement agreement.
                Invoices are due upon receipt unless otherwise specified. LKA
                reserves the right to suspend services if payment is not
                received in a timely manner.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          {...fadeIn}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to modify these terms at any time. We will
            notify clients of any significant changes. Your continued use of our
            services after changes are made constitutes your acceptance of the
            new terms.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Email: legal@lka.com</li>
            <li>Phone: +1 (555) 987-6543</li>
            <li>Address: 456 Legal Avenue, Compliance City, ST 67890</li>
          </ul>
          <Button className="bg-[#1EE05B] hover:bg-[#19B84A] text-black">
            Contact Us
          </Button>
        </motion.div>

        <motion.p
          className="text-center text-gray-400 mt-12"
          {...fadeIn}
          transition={{ delay: 0.6 }}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
