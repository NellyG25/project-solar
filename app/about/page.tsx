'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import PopupForm2 from '../../components/pop-form2/page';
import { useState } from 'react';

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <PopupForm2 isOpen={showModal} setIsOpen={setShowModal} />

      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-24 px-6 text-center overflow-hidden">
        <Image
          src="/images/image2.jpeg"
          alt="SolarNaija team"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-20"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-4"
          >
            About SolarNaija
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering Homes &amp; Businesses with Clean, Reliable Solar Energy Across Nigeria.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At SolarNaija, our mission is to make solar energy accessible, affordable, and trusted across Nigeria. 
            We believe every home and business deserves energy independence — free from outages, high bills, and harmful emissions.
            Whether you&apos;re a homeowner, business owner, or partner, we provide modern solar solutions that deliver real results.
          </p>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center rounded-full object-cover w-full h-full">
          {[
            {
              title: "Solar Installations",
              desc: "From compact home systems to full-scale business installations, we deliver clean, reliable power anywhere in Nigeria.",
              icon: "/images/image7.jpg"
            },
            {
              title: "Partner Network",
              desc: "We empower affiliates, influencers, and solar entrepreneurs to earn by promoting our proven systems.",
              icon: "/images/hands.jpg"
            },
            {
              title: "Marketplace Access",
              desc: "We connect trusted vendors with verified buyers, creating a seamless supply chain for solar products.",
              icon: "/images/icon-product.png"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <Image src={item.icon} width={60} height={60} alt={item.title} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-green-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">The SolarNaija Impact</h2>
        <div className="grid md:grid-cols-4 gap-6 text-green-800 font-bold text-2xl">
          {[
            { label: "Homes Powered", value: "2,000+" },
            { label: "Partners Enrolled", value: "300+" },
            { label: "States Covered", value: "25+" },
            { label: "Uptime Guarantee", value: "99.9%" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <div>{stat.value}</div>
              <div className="text-sm text-gray-600 font-normal mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Trust", desc: "We keep our word. Our partners and clients know we deliver." },
              { title: "Innovation", desc: "We build for tomorrow—smart, scalable, and sustainable systems." },
              { title: "Accessibility", desc: "Everyone should have access to clean energy—no matter their budget." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 bg-gray-100 rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Solar Movement?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Whether you&apos;re a customer or a partner, we&apos;re here to help you power your life with solar. Let&apos;s build a cleaner Nigeria together.
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
          >
            Become a Partner
          </button>
          <a href="/">
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
              Explore Solar Packages
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
