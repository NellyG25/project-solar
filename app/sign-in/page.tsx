'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Navbar2 from '../navbar2/page';

export default function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-4 py-10">
      <Navbar2 />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-2xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo1.png"
            alt="SolarNaija Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold text-center text-green-700 mb-8"
        >
          Join SolarNaija Today
        </motion.h2>

        {/* Form or Thank You Message */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-green-600 text-lg font-medium"
          >
            🎉 Thank you for signing up! We&apos;ll reach out with your solar assessment shortly.
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-full font-semibold transition duration-200"
            >
              Sign Up Now
            </button>
          </motion.form>
        )}

        {/* Footer Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-sm text-center text-gray-600"
        >
          Already have an account?{' '}
          <a href="/login" className="text-green-600 font-medium hover:underline">
            Log in
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
