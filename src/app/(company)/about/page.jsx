import React from "react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About LKA</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-700 mb-8">
              LKA is a leading provider of comprehensive financial and business
              solutions. Since our founding in 2010, we&apos;ve been dedicated
              to empowering businesses and individuals with expert guidance,
              innovative strategies, and unwavering support.
            </p>
            <p className="text-xl text-gray-700 mb-8">
              Our team of seasoned professionals brings together a wealth of
              experience across various industries, allowing us to offer
              tailored solutions that address the unique challenges and
              opportunities our clients face.
            </p>
            <Button className="bg-[#1EE05B] hover:bg-[#19B84A] text-white">
              Learn More About Our Services
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
              alt="About LKA"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards in all our dealings.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every service we provide.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovation to deliver cutting-edge solutions.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
