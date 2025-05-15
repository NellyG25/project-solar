'use client';

import { motion } from 'framer-motion';

const data = [
  {
    title: 'For Homes',
    description: 'Solar that doesn’t go on your roof and no up-front cost.',
    image: '/images/image7.jpg',
  },
  {
    title: 'For Utilities',
    description: 'Solar and storage that enhance your generation portfolio.',
    image: '/images/image5.jpg',
  },
  {
    title: 'For Business',
    description: 'A bright idea for your bottom line and your sustainability goals.',
    image: '/images/image8.jpg',
  },
  {
    title: 'For Governments',
    description: 'Powerful options for sustainable communities.',
    image: '/images/image9.jpg',
  },
  {
    title: 'For Landowners',
    description: 'Every successful solar project starts with a landowner.',
    image: '/images/image6.jpg',
  },
];

const SolarSolution = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
      >
        We're building a future powered by clean energy solutions.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        With over 200 Megawatts of completed projects and over 2 Gigawatts in construction and development, SolarNaija is trusted nationwide.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-green-100 border-4 border-green-600 rounded-lg p-6 w-full max-w-md shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <a href="#" className="text-sm text-green-500 font-medium hover:underline">
              Read More →
            </a>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover mt-4 rounded"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolarSolution;
