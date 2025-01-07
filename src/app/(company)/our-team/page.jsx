import React from "react";
import { LinkedinIcon as LinkedIn, Twitter } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Jane Smith",
    position: "CFO",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
  },
  {
    name: "Mike Johnson",
    position: "Head of Auditing",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    name: "Sarah Brown",
    position: "Lead Tax Consultant",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  },
  {
    name: "David Lee",
    position: "Corporate Law Specialist",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
  },
  {
    name: "Emily Chen",
    position: "Financial Services Director",
    image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Our Team
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Meet the dedicated professionals behind LKA. Our team brings together
          a wealth of experience and expertise to deliver exceptional services
          to our clients.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={640}
                height={640}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <LinkedIn className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
