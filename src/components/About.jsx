"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our dedicated professionals bring years of industry expertise to every project.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We stay ahead of the curve with cutting-edge technology solutions.",
  },
  {
    icon: Shield,
    title: "Reliable Security",
    description:
      "Your data security is our top priority with enterprise-grade protection.",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Transforming Ideas into
                <span className="text-[#1EE05B]"> Digital Reality</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Since 2010, we&apos;ve been helping businesses transform their ideas
                into powerful digital solutions. Our mission is to deliver
                innovation that matters.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-[#1EE05B]/10">
                      <feature.icon className="w-6 h-6 text-[#1EE05B]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#1EE05B] hover:bg-[#19B84A] text-black"
            >
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
