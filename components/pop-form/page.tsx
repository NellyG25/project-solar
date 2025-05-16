'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast'; // Update path as needed

const FormSchema = z.object({
  first_text: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  state: z.string().min(1, 'State is required'),
  full_address: z.string().min(1, 'Address is required'),
  placeholder: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

interface PopupFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

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

export default function PopupForm({ isOpen, setIsOpen }: PopupFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong");

      toast({ title: "Submitted", description: "We’ll contact you shortly!" });
      setSubmitted(true);
      reset();
      setIsOpen(false);
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-2xl w-full max-w-lg shadow-2xl animate-fadeIn">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <div className="flex items-center gap-2 mb-6">
          <Image src="/images/logo1.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-green-700">SolarNaija</span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800">
          Act Now for Your Personalized Solar Quote
          <br />
          <span className="text-green-600">Pay Today, Install in 24hrs!</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            {...register('first_text')}
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.first_text && <p className="text-sm text-red-500">{errors.first_text.message}</p>}

          <input
            type="email"
            {...register('email')}
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

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

          <input
            type="text"
            {...register('full_address')}
            placeholder="Full Address"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.full_address && <p className="text-sm text-red-500">{errors.full_address.message}</p>}

          <textarea
            {...register('placeholder')}
            placeholder="Tell us about your energy needs"
            rows={4}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-500 transition"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
