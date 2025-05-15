import Image from 'next/image';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return ( 
        <footer className="bg-white border-t text-sm text-gray-700">
        {/* Top Row */}
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl font-semibold">SOLAR</span>
            <span className="text-2xl font-semibold text-green-500">NAIJA</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-500 transition">
              Get started
            </button>
                  <Link
          href="/about"
          className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition inline-block"
        >
          About the company
        </Link>
          </div>
        </div>
  
        <hr className="border-green-500" />
  
        {/* Middle Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Menu</h4>
              <ul className="space-y-1">
                {['Home', 'For Homes', 'For Business', 'For Utilities', 'For Landowners', 'For Governments'].map((item, idx) => (
                  <li key={idx} className={item === 'Home' ? 'text-green-500 font-medium' : ''}>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-1 mt-7">
                {['About', 'Newsroom', 'Careers', 'Contact Us', 'Our Projects', 'Support Center'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Middle Column */}
          <div>
            <h4 className="font-semibold mb-2">Current Programs</h4>
            <ul className="space-y-1">
              {['Lagos', 'Abuja', 'Ibadan', 'Abeokuta'].map((state, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">{state}</a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Questions?</h4>
              <div className="bg-gray-50 p-4 rounded border">
                <p className="font-semibold">Residential Customers:</p>
                <Link href="#" className="text-green-500 hover:underline">Visit the Support Center</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold">Proud Member:</p>
              <Image src="/images/phoz.png" alt="Phoz Energy" width={70} height={60} />
            </div>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-500 mb-2">
          Individual customer experiences may differ.
        </div>
  
        <hr className="border-gray-200" />
  
        {/* Bottom Row */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Copyright 2025 © Nigeria Solar Corporation</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link href="#" className="text-green-500 hover:underline">Terms of Use</Link>
            <Link href="#" className="text-green-500 hover:underline">Privacy Policy</Link>
            <Link href="#" className="text-green-500 hover:underline">Service Marks</Link>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0 text-gray-400">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin-in" />
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;