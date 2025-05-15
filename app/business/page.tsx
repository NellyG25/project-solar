'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import { useState } from 'react';
import PopupForm2 from '../pop-form2/page'; // Adjust path if needed

export default function PartnerWithSolarNaija() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative font-sans text-gray-800">
      <Navbar />
      <PopupForm2 isOpen={showModal} setIsOpen={setShowModal} />

      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/hands.jpg"
            alt="Solar Partnership"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Partner with Nigeria’s Fastest Growing Solar Brand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl max-w-3xl mx-auto"
          >
            As a solar company, expand your reach nationwide by partnering with SolarNaija—leverage our brand, logistics, and demand to fulfill more installations across Nigeria.
          </motion.p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-8 bg-green-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-300 transition"
          >
            Become a Partner
          </button>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-16 px-6 bg-white grid md:grid-cols-4 gap-6 text-center">
        {[
          { title: 'Nationwide Visibility', desc: 'Get featured in our sales network to receive consistent project leads.' },
          { title: 'Proven Logistics', desc: 'We coordinate fulfillment, delivery, and customer support for fast project turnaround.' },
          { title: 'Backed by Marketing', desc: 'We handle demand generation. You focus on project execution.' },
          { title: 'Tech & Tools', desc: 'Access CRM tools, lead tracking, and training for smooth project handling.' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-green-50 p-6 rounded-2xl shadow"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Partner Workflow */}
      <section className="bg-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How Our Partnership Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: '1. Register & Onboard', desc: 'We verify your company and get you onboarded on our platform.' },
            { title: '2. Receive Projects', desc: 'We assign you projects based on your region, capacity, and expertise.' },
            { title: '3. Fulfill & Earn', desc: 'You handle the install—we handle payment, support, and follow-up.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Join Our Network of Solar Professionals</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let’s scale clean energy across Nigeria—together. Get started with your partnership today.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Become a Partner
          </button>
          <a
            href="/docs/VIEW PARTNER GUIDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
              View Partner Guide
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
