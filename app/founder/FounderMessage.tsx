const FounderMessage = () => {
    return ( 
        <section className="relative bg-white py-20 px-6">
        <div className="absolute top-0 left-0 w-full h-full bg-green-50 opacity-20 pointer-events-none"></div>
  
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-green-700 mb-8">
            A Message from Our Founder
          </h2>
  
          <div className="bg-green-100 border-l-4 border-green-600 rounded-md px-6 py-8 mx-auto max-w-3xl shadow">
            <p className="italic text-lg text-green-900 leading-relaxed">
              “Solarnaija was born from a simple belief — that every Nigerian deserves reliable, affordable, and clean energy. From the
              busy streets of Lagos to the quiet towns of Kaduna, our mission is to empower people through solar. If you're ready
              to ditch generators and embrace the sun, we're ready to help.”
            </p>
            <p className="mt-6 font-semibold text-green-800">– The Solarnaija Team</p>
          </div>
  
          <div className="mt-10">
            <span className="inline-block w-16 h-1 bg-green-600 rounded-full"></span>
          </div>
        </div>
      </section>
     );
}
 
export default FounderMessage;