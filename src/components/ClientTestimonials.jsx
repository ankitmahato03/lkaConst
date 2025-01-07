"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "LKA's financial advisory services have been instrumental in our company's growth. Their expert guidance helped us navigate complex financial decisions with confidence.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    company: "Global Solutions Ltd.",
    avatar: "https://i.pravatar.cc/150?img=2",
    content:
      "The audit team at LKA is thorough, professional, and insightful. They not only ensured our compliance but also provided valuable recommendations for improving our financial processes.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    company: "Startup Ventures",
    avatar: "https://i.pravatar.cc/150?img=3",
    content:
      "As a startup, we needed clear guidance on tax matters. LKA's tax advisory team provided us with tailored solutions that helped us optimize our tax position and focus on growth.",
    rating: 4,
  },
  {
    name: "Emily Brown",
    company: "Retail Giants Co.",
    avatar: "https://i.pravatar.cc/150?img=4",
    content:
      "LKA's accounting services have streamlined our financial operations. Their attention to detail and proactive approach have been invaluable to our business.",
    rating: 5,
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white border-gray-200 shadow-md">
                    <CardContent className="flex flex-col items-center p-6">
                      <Avatar className="w-20 h-20 mb-4">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-gray-800 text-center mb-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                            fill={
                              i < testimonial.rating ? "currentColor" : "none"
                            }
                          />
                        ))}
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientTestimonials;
