'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast'; // Update the path if necessary

const FormSchema = z.object({
  first_text: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  state: z.string().min(1, 'State is required'),
  full_address: z.string().min(1, 'Address is required'),
  placeholder: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const NIGERIA_STATES = [
  { code: 'AB', name: 'Abia' }, { code: 'AD', name: 'Adamawa' }, { code: 'AK', name: 'Akwa Ibom' },
  { code: 'AN', name: 'Anambra' }, { code: 'BA', name: 'Bauchi' }, { code: 'BY', name: 'Bayelsa' },
  { code: 'BE', name: 'Benue' }, { code: 'BO', name: 'Borno' }, { code: 'CR', name: 'Cross River' },
  { code: 'DE', name: 'Delta' }, { code: 'EB', name: 'Ebonyi' }, { code: 'ED', name: 'Edo' },
  { code: 'EK', name: 'Ekiti' }, { code: 'EN', name: 'Enugu' }, { code: 'FC', name: 'FCT' },
  { code: 'GO', name: 'Gombe' }, { code: 'IM', name: 'Imo' }, { code: 'JI', name: 'Jigawa' },
  { code: 'KD', name: 'Kaduna' }, { code: 'KN', name: 'Kano' }, { code: 'KT', name: 'Katsina' },
  { code: 'KE', name: 'Kebbi' }, { code: 'KO', name: 'Kogi' }, { code: 'KW', name: 'Kwara' },
  { code: 'LA', name: 'Lagos' }, { code: 'NA', name: 'Nasarawa' }, { code: 'NI', name: 'Niger' },
  { code: 'OG', name: 'Ogun' }, { code: 'ON', name: 'Ondo' }, { code: 'OS', name: 'Osun' },
  { code: 'OY', name: 'Oyo' }, { code: 'PL', name: 'Plateau' }, { code: 'RI', name: 'Rivers' },
  { code: 'SO', name: 'Sokoto' }, { code: 'TA', name: 'Taraba' }, { code: 'YO', name: 'Yobe' },
  { code: 'ZA', name: 'Zamfara' },
];

interface PartnerFormModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function PartnerFormModal({ isOpen, setIsOpen }: PartnerFormModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Something went wrong');

      toast({ title: 'Submitted', description: 'We’ll contact you shortly!' });
      reset();
      setIsOpen(false);
    } catch (error) {
      toast({ title: 'Error', description: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-auto p-6">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
          aria-label="Close form"
        >
          ×
        </button>

        {/* Background Overlay Image */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/images/logo1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        {/* Logo */}
        <div className="absolute top-4 left-4 z-10">
          <Image src="/images/logo1.png" alt="SolarNaija Logo" width={120} height={40} priority />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-green-800 mb-4 text-center mt-12"
        >
          Become a SolarNaija Partner
        </motion.h2>

        <p className="text-center text-gray-600 mb-6">
          Fill out this quick application and we’ll reach out.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register('first_text')}
              placeholder="Company Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.first_text && (
              <p className="text-sm text-red-500">{errors.first_text.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Company Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <select
              {...register('state')}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select State</option>
              {NIGERIA_STATES.map((s) => (
                <option key={s.code} value={s.name}>
                  {s.code} - {s.name}
                </option>
              ))}
            </select>
            {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
          </div>

          <div>
            <input
              {...register('full_address')}
              placeholder="Full Address"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.full_address && (
              <p className="text-sm text-red-500">{errors.full_address.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register('placeholder')}
              placeholder="Briefly describe your solar services and region of operation"
              rows={4}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-500 transition"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}
