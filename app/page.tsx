'use client';

import { useState } from 'react';

import Carousel from "@/components/carousel";
import FirstSection from "./first-section/page";
import Navbar from "./navbar/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import Pricing from "./pricing/page";
import FifthSection from "./fifth-section/page";
import Footer from "./footer/page";
import PopupForm from "./pop-form/page";
import SolarSolution from "./sixth-section/page";
import Partner from './partner/page';
import FounderMessage from './founder/FounderMessage';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
    <Navbar />
    <PopupForm isOpen={isOpen} setIsOpen={setIsOpen} />
    <FirstSection />
    
    <SecondSection />
    <ThirdSection />
    <SolarSolution/>
    <FounderMessage/>
    
    <Partner/>
    <Footer />
  </div>;
  
}
