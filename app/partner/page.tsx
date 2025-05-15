const Partner = () => {
    return ( 
        <section
        id="partners"
        className="relative bg-gradient-to-br from-white via-green-50 to-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left: Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-green-700 mb-4">
              Partner With Solarnaija
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Are you a solar company, installer, or energy entrepreneur in Nigeria?
              Solarnaija is building a nationwide network to deliver solar power
              at scale. Join us to access bulk pricing, logistics support, and co-branded growth opportunities.
            </p>
            <a
              href="/business"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded shadow transition"
            >
              Become a Partner
            </a>
          </div>
  
          {/* Right: Visual Accent */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-green-100 border-4 border-green-600 rounded-lg p-6 w-full max-w-md shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Why Join Our Network?
              </h3>
              <ul className="list-disc list-inside text-green-900 text-sm space-y-2">
                <li>Nationwide product delivery</li>
                <li>Bulk & wholesale solar pricing</li>
                <li>Technical and backend support</li>
                <li>Fast logistics and installer tools</li>
                <li>White-label partnership options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    
     );
}
 
export default Partner;