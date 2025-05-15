'use client'

import { useState } from 'react';
import Image from "next/image";
import PopupForm from '../pop-form/page';

const features = [
  {
    name: "Customizable solar solutions",
    description:
      "Choose from a range of expertly designed systems, and personalize every detail to fit your home or business. Go solar your way and take control of your energy, your savings, and your future.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
  },
  {
    name: "Fast installation",
    description:
      "Get started with solar quickly using pre-designed, efficient system options that can be tailored to your needs. From consultation to connection, we make switching to solar simple and speedy.",
    image: "/images/icon-fast.png",
    alt: "Fast Installation",
  },
  {
    name: "Seamless integrations",
    description:
      "Our solar systems are designed to work effortlessly with your existing home or business infrastructure, including smart energy management, battery storage, and EV chargers.",
    image: "/images/icon-journey.png",
    alt: "Integration",
  },
  {
    name: "End-to-end solar solutions",
    description:
      "From custom design and permitting to installation, monitoring, and maintenance, we handle every step. A complete solar experience, all under one roof.",
    image: "/images/icon-layer.png",
    alt: "End-to-end",
  },
  {
    name: "Solar rewards that last",
    description:
      "Join our loyalty program and earn benefits for every step you take toward clean energy, from referrals to system upgrades.",
    image: "/images/icon-location.png",
    alt: "Rewards",
  },
  {
    name: "Round-the-clock support",
    image: "/images/icon-support-1.png",
    description:
      "Our team is available 24/7 to assist you with any questions or issues, ensuring your solar system runs smoothly and efficiently, day or night.",
    alt: "Support",
  },
];

export default function SecondSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* 🔽 Render Popup Form */}
      <PopupForm isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col md:flex-row items-center justify-center pb-10">
        <div className="p-5 justify-center md:w-1/3">
          <div className="bg-gradient-to-r from-green-800 to-green-300 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10">
            From homes to enterprises, our solar solutions power businesses of all sizes.
          </div>
          <div className="text-2xl mb-8">
            Designed for businesses and communities, SolarNaija is your <br /> all-in-one platform for growth.
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 text-white px-10 py-4 rounded-md text-lg font-bold hover:bg-green-600"
          >
            Request Quotes
          </button>
        </div>

        <video className="rounded-xl md:w-2/5 p-4 md:p-0" autoPlay muted loop>
          <source src="/content/hero2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex-col items-center justify-center">
        <div className="text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent">
          Key Features
        </div>

        <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <div className="text-gray-600 text-3xl font-bold">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
                    {feature.name}
                  </div>
                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
