export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Robert Johnson",
      title: "Project Manager - ABC Construction",
      content: "I've had the pleasure of working with M & M Excavation on multiple projects over the past few years. Their team has been an outstanding partner for our business. They're knowledgeable and skilled professionals, both in the office and on the jobsite. I know that when I put M & M on a project, I'm setting my team up for success."
    },
    {
      name: "Sarah Davis",
      title: "Senior Manager - Quality Builders",
      content: "M & M Excavation has been a trusted partner since we started working together over 10 years ago. From small residential projects to large commercial developments, we have grown simultaneously. Their crew works side by side with our teams to ensure projects are completed with the highest quality and safety, on time, and on budget."
    },
    {
      name: "Michael Thompson",
      title: "Principal - Thompson Development",
      content: "I have had the great fortune of working with M & M Excavation for nearly 8 years. Everyone in the company takes great pride in the work they do and it shows in their results. The entire team constantly displays a very high level of knowledge and expertise in their field. Combined with integrity and trustworthiness, they're a company I'd recommend over all others."
    },
    {
      name: "Jennifer Wilson",
      title: "CEO - Wilson Properties LLC",
      content: "We have had the pleasure to work with M & M Excavation since their beginning on some complicated large projects as well as projects that just benefited from their high level of service and cost-effective approach. Each person in the company represents professional values, and we highly recommend them for any excavation and dirtwork needs."
    }
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
          <div className="inline-flex items-center space-x-2 text-[#e67e22] hover:text-[#d35400] transition-colors duration-200">
            <span className="font-semibold">See More Reviews</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.562-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#e67e22] mb-2">15+</div>
            <div className="text-sm text-gray-600 font-medium">Years in Business</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#e67e22] mb-2">500+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#e67e22] mb-2">100%</div>
            <div className="text-sm text-gray-600 font-medium">Licensed & Insured</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#e67e22] mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}