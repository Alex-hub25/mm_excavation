export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative text-white min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/home.png") center/cover no-repeat, #1f2937'
      }}
    >
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h4 className="text-[#f39c12] text-xl md:text-2xl font-semibold mb-4 tracking-wide">
              TRANSFORMING LANDSCAPES, BUILDING FUTURES
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <br></br>
              <span className="text-[#e67e22]">M & M Excavation</span>{' '}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              M & M Excavation and Dirtwork functions as a fully integrated excavating and grading 
              business, specializing in commercial and residential developments. We understand that 
              every project is a unique journey that begins with a vision and ends with a transformed landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="bg-[#e67e22] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d35400] transition-colors duration-200 text-center"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Right content - Equipment placeholder */}
          <div className="hidden lg:block">
            
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="text-white hover:text-[#e67e22] transition-colors duration-200">
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}