export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About M & M Excavation and Dirtwork
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              M & M Excavation and Dirtwork began as a dream to provide exceptional earthmoving 
              services to our community. With years of hands-on experience in the construction 
              and excavation industry, we&apos;ve grown from a small local operation to a trusted 
              partner for both commercial and residential projects.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our dedicated team works side by side with you and your contractors, utilizing 
              state-of-the-art equipment and advanced techniques to deliver seamless excavation 
              and grading solutions. We understand that every project is unique, and we&apos;re 
              committed to turning your vision into reality.
            </p>
            
            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#e67e22] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Licensed & Insured</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#e67e22] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Modern Equipment</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#e67e22] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Expert Team</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#e67e22] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-[#e67e22] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d35400] transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right content - Image placeholder and stats */}
          <div>
            <div className="relative mb-8">
              {/* Main image placeholder */}
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg h-100 flex items-center justify-center mb-6">
                <img 
                  src="/excavator.png" 
                  height = "700"
                  width = "500"
                  alt="Construction Site" 
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}