"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { link: "About Us", href: "/about" },
      { link: "Our Team", href: "/our-team" },
      { link: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { link: "Auditing & Attest", href: "/auditing-attest" },
      { link: "Accounting", href: "/accounting" },
      { link: "Start A Business", href: "/start-business" },
      { link: "Direct Taxation", href: "/direct-taxation" },
      { link: "Financial Advisory Services", href: "/financial-advisory" },
      { link: "Corporate Advisory", href: "/corporate-advisory" },
      { link: "GST and Custom Duty", href: "/gst-custom" },
    ],
  },
  {
    title: "Legal",
    links: [
      { link: "Privacy Policy", href: "/privacy-policy" },
      { link: "Terms of Condition", href: "/term-condition" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: LinkedIn, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-black px-4">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">LKA</h2>
            <p className="text-gray-600 mb-4">
              Empowering businesses with innovative financial solutions and
              expert guidance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                  <span className="sr-only">{social.icon.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              className="col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {link.link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LKA. All rights reserved. Design by{" "}
              <span>
                <Link href={"https://www.averotec.com/"} target="_blank">
                  Averotec
                </Link>
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
