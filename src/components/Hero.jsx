"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="font-bold text-5xl md:text-6xl leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Innovate with <span className="text-[#1EE05B]">LKA</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Empowering your business with cutting-edge solutions for the digital
            age.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-[#1EE05B] hover:bg-[#19B84A] text-black font-bold"
            >
              <Link href={"/contact-us"}>Book a free consultation</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 lg:py-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
            >
              <path
                fill="#1EE05B"
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.2,74.7C26.6,82.8,10.3,87.6,-4.4,85.1C-19.1,82.6,-38.2,72.9,-53.2,61C-68.1,49,-78.9,34.8,-84.6,18.5C-90.3,2.1,-90.9,-16.4,-84.3,-31.4C-77.8,-46.4,-64,-57.8,-49.3,-64.9C-34.6,-71.9,-19,-74.6,-2.6,-75.8C13.8,-77,27.6,-76.7,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <motion.img
              src="/images/heroimage.png"
              alt="Modern Technology Illustration"
              className="relative z-10 w-full h-full rounded-3xl max-w-full max-h-full object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
