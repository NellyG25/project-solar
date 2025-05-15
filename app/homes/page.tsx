'use client';


import Navbar from '../navbar/page';
import Footer from '../footer/page';
import Hero from './f1';



const Homes = () => {
  return (
    <div className="relative font-sans text-gray-800">
      <Navbar />
      <Hero/>
      
    
      <Footer />
    </div>
  );
}
export default Homes;