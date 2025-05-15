'use client';

import { useState } from 'react';
import PopupForm from '../pop-form/page'; // Ensure this path is correct

export default function FirstSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-black">
        {/* Popup Form */}
        <PopupForm isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Background Image */}
        <img
          src="/images/image23.jpg"
          alt="Solar Panels"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
          <div className="mb-4 flex items-center space-x-2">
            <span className="text-green-400 text-xl">★</span>
            <span className="text-sm md:text-base">100+ successful projects delivered</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            NO.1 SOLAR COMPANY IN NIGERIA
          </h1>

          <p className="mt-2 text-lg">Solar Wholesaler and Installation Partner</p>

          {/* Open Popup Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-medium"
          >
            Request Quotes →
          </button>
        </div>
      </div>
    </>
  );
}
