"use client";

import { motion } from "motion/react";
import {
  Clipboard,
  Calculator,
  BarChart,
  FileText,
  PiggyBank,
  Scale,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    icon: Clipboard,
    title: "Auditing & Attest",
    description:
      "Comprehensive auditing services to ensure financial accuracy and compliance.",
    href: "/auditing-attest",
  },
  {
    icon: Calculator,
    title: "Accounting",
    description:
      "Expert accounting solutions to keep your finances organized and optimized.",
    href: "/accounting",
  },
  {
    icon: BarChart,
    title: "Start A Business",
    description:
      "Streamline and improve your business operations for maximum efficiency.",
    href: "/start-business",
  },
  {
    icon: FileText,
    title: "Direct Taxation",
    description:
      "Professional income tax services for individuals and businesses.",
    href: "/direct-taxation",
  },
  {
    icon: PiggyBank,
    title: "Financial Advisory Services",
    description:
      "Tailored financial services to help you achieve your financial goals.",
    href: "/financial-advisory",
  },
  {
    icon: Scale,
    title: "Corporate Advisory",
    description:
      "Expert legal advice and services for all aspects of corporate law.",
    href: "/corporate-advisory",
  },
  {
    icon: Clipboard,
    title: "GST and Custom Duty",
    description:
      "Comprehensive solutions tailored to meet your business needs and drive success.",
    href: "/gst-custom",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions tailored to meet your business needs and
            drive success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-gray-100 border border-gray-200 text-black h-full hover:bg-gray-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <Button className="w-1/3 bg-green-500 text-white hover:bg-green-600">
                    <Link href={service.href}>Read more</Link>
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
