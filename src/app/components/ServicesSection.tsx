export default function ServicesSection() {
  const services = [
    {
      icon: "🚜",
      title: "Excavation Services",
      description: "Our excavation services are tailored to meet the unique needs of each project, ensuring precision and efficiency in every dig."
    },
    {
      icon: "🏗️",
      title: "Site Development",
      description: "We offer creative and sustainable development solutions that enhance the functionality and value of your property."
    },
    {
      icon: "📏",
      title: "Grading and Leveling",
      description: "Ensure a solid foundation with our professional grading and leveling services, perfect for any construction or landscaping project."
    },
    {
      icon: "🌲",
      title: "Site Clearing",
      description: "Ensure your construction project starts with a clean, obstacle-free foundation. We efficiently remove trees, debris, and unwanted structures."
    },
    {
      icon: "🌊",
      title: "Soil Erosion Control",
      description: "Our soil erosion control services are designed to protect your land and project site from water and wind damage."
    },
    {
      icon: "🚧",
      title: "Land Management",
      description: "Whether for agriculture, development, or conservation, our team delivers efficient, sustainable solutions to keep your land in top condition."
    },
    {
      icon: "💥",
      title: "Site Demolition",
      description: "With skilled operators and specialized equipment, we ensure a controlled demolition process that meets safety standards and project timelines."
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of expert services designed to transform your outdoor environment 
            and bring your construction dreams to reality.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block bg-[#e67e22] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d35400] transition-colors duration-200"
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="text-[#e67e22] font-medium hover:text-[#d35400] transition-colors duration-200 flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#e67e22] to-[#f39c12] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today for a free consultation and estimate. Our expert team is ready to help transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-white text-[#e67e22] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Call (636) 584-9335
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#e67e22] transition-colors duration-200"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}