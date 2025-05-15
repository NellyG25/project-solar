'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar2() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex justify-center items-center relative z-50"
    >
      {/* Logo Centered */}
      <div className="flex justify-center items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo1.png" alt="SolarNaija Logo" width={70} height={70} />
          <span className="text-xl font-bold text-green-700">SolarNaija</span>
        </Link>
      </div>

      {/* Optional Link (right corner) */}
      <div className="absolute right-6 top-4 hidden md:flex items-center space-x-2 group">
  <Link
    href="/"
    className="text-sm font-medium text-gray-600 transition-all duration-300 group-hover:text-green-600 group-hover:underline underline-offset-4"
  >
    ← Back to Home
  </Link>
</div>

    </motion.nav>
  );
}
