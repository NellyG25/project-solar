import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { FaSolarPanel, FaBatteryHalf, FaTools, FaChartLine, FaWarehouse } from 'react-icons/fa'; // Import icons from react-icons

const FourthSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const items = [
    {
      name: 'Solar Panels',
      desc: 'High-efficiency monocrystalline panels perfect for Nigerian rooftops.',
      icon: <FaSolarPanel className="text-5xl text-green-700 mb-4" />,
    },
    {
      name: 'Inverters & Batteries',
      desc: 'Durable storage systems to power homes and businesses, day and night.',
      icon: <FaBatteryHalf className="text-5xl text-green-700 mb-4" />,
    },
    {
      name: 'Installation & Support',
      desc: 'End-to-end nationwide solar installation with expert guidance.',
      icon: <FaTools className="text-5xl text-green-700 mb-4" />,
    },
    {
      name: 'Consultation & Design',
      desc: 'Expert consultation and solar design tailored to your energy needs.',
      icon: <FaChartLine className="text-5xl text-green-700 mb-4" />,
    },
    {
      name: 'Solar Equipment Supply',
      desc: 'Reliable supply of all solar-related equipment, from panels to inverters.',
      icon: <FaWarehouse className="text-5xl text-green-700 mb-4" />,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-800 to-green-300 bg-clip-text text-transparent mb-10">
          Our Solar Solutions
        </h2>

        {/* Grid with background image using Image component */}
        <div className="relative rounded-xl overflow-hidden">
          {/* Background image using Next.js Image component */}
          <div className="absolute inset-0">
            <Image
              src="/images/image23.jpg" // Path to the image in the public folder
              alt="Solar Energy Background"
              layout="fill" // Fills the container
              objectFit="cover" // Ensures the image covers the space without distortion
              objectPosition="center" // Centers the image
            />
          </div>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white bg-opacity-85 backdrop-blur-sm" />

          {/* Grid content */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 p-8 z-10">
            {items.map((item, index) => (
              <div
                key={item.name}
                className={`bg-green-50 border-t-4 border-green-600 p-6 rounded-lg shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-green-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-green-800 mb-2">{item.name}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
