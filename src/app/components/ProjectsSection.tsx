export default function ProjectsSection() {
  const projects = [
    {
      title: "Commercial Shopping Center",
      category: "Commercial Development",
      description: "Complete site preparation and grading for a major retail development project.",
      features: ["Site Clearing", "Grading", "Utility Installation"]
    },
    {
      title: "Residential Subdivision",
      category: "Residential Development", 
      description: "Comprehensive earthwork for a 50-home residential subdivision development.",
      features: ["Excavation", "Road Preparation", "Drainage Systems"]
    },
    {
      title: "Industrial Complex",
      category: "Industrial Project",
      description: "Large-scale excavation and site preparation for manufacturing facility.",
      features: ["Mass Excavation", "Foundation Prep", "Parking Areas"]
    },
    {
      title: "Municipal Water Treatment",
      category: "Municipal Project",
      description: "Specialized excavation work for water treatment facility expansion.",
      features: ["Precise Excavation", "Utility Work", "Environmental Compliance"]
    },
    {
      title: "Private Estate Development",
      category: "Residential Project",
      description: "Custom site work including pond construction and landscape preparation.",
      features: ["Pond Construction", "Landscape Grading", "Driveway Installation"]
    },
    {
      title: "Highway Infrastructure",
      category: "Infrastructure Project",
      description: "Road widening project with complex drainage and utility coordination.",
      features: ["Road Work", "Bridge Support", "Drainage Systems"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our completed projects that showcase our expertise 
            in excavation, site development, and earth moving services.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className="bg-[#e67e22] text-white px-6 py-2 rounded-full font-medium hover:bg-[#d35400] transition-colors duration-200"
            suppressHydrationWarning
          >
            All Projects
          </button>
          <button 
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors duration-200"
            suppressHydrationWarning
          >
            Commercial
          </button>
          <button 
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors duration-200"
            suppressHydrationWarning
          >
            Residential
          </button>
          <button 
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors duration-200"
            suppressHydrationWarning
          >
            Industrial
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🏗️</div>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <div className="text-sm text-[#e67e22] font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* View project link */}
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
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether it's a small residential project or a large commercial development, 
              we have the expertise and equipment to handle projects of any size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#e67e22] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d35400] transition-colors duration-200"
              >
                Get Free Estimate
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-3 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}