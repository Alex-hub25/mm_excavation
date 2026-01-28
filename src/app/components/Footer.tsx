export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-[#e67e22] mb-4">
              M & M Excavation and Dirtwork
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional excavation and earthwork services for commercial and residential projects. 
              Transforming landscapes and building futures with expert craftsmanship and reliable service.
            </p>
            <div className="flex space-x-4">
        
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#e67e22] transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#e67e22] transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#e67e22] transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-[#e67e22] transition-colors duration-200">
                  Recent Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#e67e22] transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Excavation Services</li>
              <li className="text-gray-300">Site Development</li>
              <li className="text-gray-300">Grading & Leveling</li>
              <li className="text-gray-300">Site Clearing</li>
              <li className="text-gray-300">Utility Installation</li>
              <li className="text-gray-300">Land Management</li>
            </ul>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:space-x-12 items-center w-full">

            <div className="flex items-center justify-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-[#e67e22] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">(636) 584-9335</div>
                <div className="text-gray-400 text-sm">24/7 Emergency Service</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-[#e67e22] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <a href="mailto:lucasclavenna5@gmail.com" className="font-medium hover:underline">lucasclavenna5@gmail.com</a>
                <div className="text-gray-400 text-sm">Get a Free Quote</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-2 md:mb-0">
              © 2026 M & M Excavation and Dirtwork. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#e67e22] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e67e22] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e67e22] transition-colors duration-200">
                Safety Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}