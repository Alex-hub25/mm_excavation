export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Brandon Rolf",
      title: "",
      content: "Easy to communicate with and friendly service. Thanks for the help!"
    },
    {
      name: "Micheal Hawk Clavenna",
      title: "",
      content: "These guys came out and solved some huge problems I was having. The knowledge shared put me at ease, and I'm extremely happy with the removal of the trees and grading of my lot!"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about 
            working with M & M Excavation and Dirtwork.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {/* Quote icon */}
              <div className="text-[#e67e22] text-4xl mb-4">"</div>
              
              {/* Testimonial content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                {testimonial.content}
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#e67e22] to-[#d35400] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews link */}
        <div className="text-center">
          <a
            href="https://www.facebook.com/profile.php?id=61578877086929&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-[#e67e22] hover:text-[#d35400] transition-colors duration-200 px-6 py-3 rounded-lg text-xl font-semibold shadow-md hover:shadow-lg"
          >
            <span className="font-semibold text-xl">See More Reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
}