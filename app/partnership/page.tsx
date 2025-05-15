// pages/index.tsx
import Image from 'next/image'; // Or 'react' if you're not using Next.js
import React from 'react';

export default function Home() {
    const testimonials = [
      {
        name: "Huge Market Potential",
        
        text: "With over 50 million homes across Nigeria seeking reliable energy solutions, this is your opportunity to make an impact where it’s needed most.",
      },
      {
        name: "Local Expertise",
        text: "We understand the unique challenges and opportunities in Nigeria’s energy landscape, ensuring smooth, scalable project deployment.",
      },
      {
        name: "Sustainable Growth",
        text: "Together, we can drive not just profits, but meaningful social and environmental change, providing clean energy solutions to underserved communities.",
      },
    ];

      return (
        <main className="font-sans text-gray-800">
          {/* Hero Section */}
          <section className="text-center py-16 px-4 bg-white">
            <div className="text-sm font-medium uppercase text-gray-600 bg-color-black">
            5,000+ Active Solar Users Across Nigeria — with Key Hubs in Lagos, Abuja, Ibadan, and Abeokuta.
            </div>
            <h1 className="text-4xl font-bold mt-4 text-gray-800">
            Unlock Opportunity. Expand Impact. Build the Future.<br />
              <span className="text-indigo-600">
              With 3.6 million households in Lagos and millions more across Nigeria, the demand for solar energy is growing fast.
              Partner with us to tap into 50 million+ homes ready for clean, affordable power.
                </span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Partner with Us – Let’s Power Nigeria Together
            </p>
            <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded hover:bg-white-600 transition">
              Get Started Now
            </button>
            <p className="mt-2 text-sm text-green-600 underline">
              Solarnaija is powered and trust by other solar companies 
            </p>
          </section>
    
          {/* Testimonials */}
          <section className="bg-gray-50 py-16">
            <h2 className="text-2xl font-bold text-center mb-8">
            Empowering Communities and Businesses with Clean, Reliable Energy for a Sustainable Future
            </h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded shadow-md max-w-sm w-full">
                  <p className="italic mb-4">"{t.text}"</p>
                  <p className="font-bold">{t.name}</p>
                  
                </div>
              ))}
            </div>
          </section>
    
          {/* Benefits Section */}
          <section className="py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Drive Local Solar Growth, and Scale Impact Together
              </h3>
              <p className="mb-6 text-gray-600">
              Nigeria’s reliance on imported fossil fuels drives up energy costs. By partnering with us, you can help lower electricity bills and accelerate the shift toward clean, locally-produced solar energy.
              </p>
              <ul className="space-y-4">
                <li><strong>🌱 Collaborative Growth:</strong> Together, we can expand solar gardens, increasing energy independence and access for communities across Nigeria.</li>
                <li><strong>☀️ Sustainable Energy:</strong> Partnering with us means scaling clean, efficient solar solutions that produce zero pollution and require no water—creating a lasting environmental impact.</li>
              </ul>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
                Get Started
              </button>
            </div>
            <div className="flex justify-center">
              <img src="/solar-panels.png" alt="Solar Panels" className="rounded shadow-md" />
            </div>
          </section>
    
          {/* Second Benefits Section */}
          <section className="py-12 px-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">
            Deliver the Benefits of Solar.<br />Without the Heavy Lifting
            </h2>
            <p className="max-w-xl mx-auto text-gray-600">
            We design, build, and operate the Solar Garden—making it simple for partners to get involved. With a streamlined online platform, solar companies can easily collaborate with us to bring clean energy to more communities.
            </p>
          </section>
    
          <section className="flex flex-col md:flex-row justify-around items-center gap-10 px-6 py-12 bg-gray-50">
            <div className="flex flex-col gap-8 max-w-sm">
              <div>
                <h3 className="font-semibold">Grow Your Impact with Us</h3>
                <p className="text-gray-600 text-sm">
                Join forces with us to bring the benefits of community solar to more people—without the need for rooftop panels or upfront investment. Our Solar Gardens make it easy for you to offer solar solutions to a broader customer base.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Solar Made Accessible
                </h3>
                <p className="text-gray-600 text-sm">
                Serve renters, condo owners, and homeowners who can’t install traditional systems. Our off-site Solar Gardens remove installation barriers, letting your customers go solar effortlessly.
                </p>
              </div>
            </div>
    
            <Image
              src="/solar-family.jpg"
              alt="Family at solar garden"
              width={350}
              height={350}
              className="rounded-lg shadow"
            />
    
            <div className="flex flex-col gap-8 max-w-sm">
              <div>
                <h3 className="font-semibold">🚚 Moving? No problem.</h3>
                <p className="text-gray-600 text-sm">
                  Easily transfer or cancel your Sunscription. If you move to an eligible area, you can even take it with you!
                </p>
              </div>
              <div>
                <h3 className="font-semibold">🌱 Support Local Energy</h3>
                <p className="text-gray-600 text-sm">
                  Solar Gardens make us more energy independent and help local ecosystems by improving vegetation and wildlife.
                </p>
              </div>
            </div>
          </section>
    
          {/* How It Works */}
          <section className="px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">How does a Sunscription work?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">
              A Sunscription allows electric customers to benefit from a solar project located elsewhere. When homes and businesses have a Sunscription, they can save.
            </p>
    
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
              <Image
                src="/solar-diagram.png"
                alt="Solar garden diagram"
                width={400}
                height={250}
              />
              <div className="flex flex-col text-left gap-4 max-w-md">
                <div className="border rounded p-4">
                  <strong>1. Your Solar Garden</strong>
                  <p className="text-sm text-gray-600">
                    We finance and manage the Solar Garden. It generates clean energy for your utility company.
                  </p>
                </div>
                <div className="border rounded p-4">
                  <strong>2. Your Electric Utility</strong>
                  <p className="text-sm text-gray-600">
                    Your utility continues to supply your electricity and gives you a bill credit based on energy generated.
                  </p>
                </div>
                <div className="border rounded p-4">
                  <strong>3. Your Sunscription</strong>
                  <p className="text-sm text-gray-600">
                    You pay US Solar for the energy your Sunscription produces, saving money and supporting clean energy.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Call-to-Action */}
          <section className="bg-gray-100 py-10 px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold">Save money and support local solar.</h3>
              <p className="text-gray-600 mt-2">
                No upfront cost. Nothing on your roof. Good for your wallet. Good for the environment.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
                Get started
              </button>
            </div>
            <Image
              src="/solar-panels.png"
              alt="Solar panels"
              width={300}
              height={200}
              className="rounded shadow"
            />
          </section>
    
          {/* Projects */}
          <section className="py-16 px-6">
            <h2 className="text-2xl font-semibold text-center mb-8">Explore our latest projects.</h2>
            <p className="text-center text-gray-600 mb-10">
              We develop industry-leading solar gardens and energy storage projects across the country.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "USS Rockpoint Solar LLC", location: "Stacy, Minnesota", image: "/project1.jpg" },
                { name: "USS Big Lake 1 LLC", location: "Big Lake, Minnesota", image: "/project2.jpg" },
                { name: "USS Kasch Solar LLC", location: "Sauk Rapids, Minnesota", image: "/project3.jpg" },
              ].map((project, i) => (
                <div key={i} className="border rounded overflow-hidden shadow-sm">
                  <Image src={project.image} alt={project.name} width={400} height={250} />
                  <div className="p-4">
                    <h4 className="font-semibold">{project.name}</h4>
                    <p className="text-sm text-gray-500">{project.location}</p>
                    <a href="#" className="text-orange-600 font-semibold text-sm mt-2 inline-block">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      );
    }
    

