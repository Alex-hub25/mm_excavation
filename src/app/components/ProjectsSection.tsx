export default function ProjectsSection() {
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
       
        {/* Facebook plugin and Call to Action side by side */}
        <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-8 mt-12">
          <div className="flex-1 flex justify-center">
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <iframe
                title="Facebook Feed"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FMM-Excavation-and-Dirt-Work-LLC-61578877086929%2F&tabs=timeline&width=1500&height=1700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="200%"
                height="700"
                style={{ border: 'none', overflow: 'hidden', display: 'block' }}
                scrolling="no"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-100 rounded-lg p-8 w-full max-w-md" style={{ height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Have a Project in Mind?
              </h3>
              <p className="text-xl text-black mb-6 max-w-2xl mx-auto">
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
                  href="tel:+16365849335"
                  className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-3 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}