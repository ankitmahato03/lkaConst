"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ContactUsPage = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", content: "info@lka.com" },
    { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Business Ave, Suite 100, City, State 12345",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 5PM",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#1EE05B]"
          {...fadeIn}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          We&apos;re here to help and answer any question you might have. We
          look forward to hearing from you.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-2 lg:px-12">
          <motion.div
            className="space-y-8"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            {contactInfo.map((item, index) => (
              <div key={item.title} className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <item.icon className="w-6 h-6 text-[#1EE05B]" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-[#1EE05B] hover:bg-[#19B84A] text-black">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div className="mt-16" {...fadeIn} transition={{ delay: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29490.399448811888!2d88.32930564072608!3d22.492927342276076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270dd7067cfe9%3A0x75a2ca90e1966e8b!2sTollygunge%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1735410306592!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsPage;
