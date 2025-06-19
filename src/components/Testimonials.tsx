
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      destination: "Stanford University, USA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "GlobalEd made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable, and I secured a 50% scholarship!",
      program: "Computer Science"
    },
    {
      name: "Rohit Patel",
      destination: "University of Toronto, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "The team helped me navigate the complex visa process seamlessly. I'm now pursuing my MBA at one of Canada's top universities.",
      program: "MBA"
    },
    {
      name: "Ananya Reddy",
      destination: "University of Melbourne, Australia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "From university selection to post-arrival support, GlobalEd was with me every step of the way. Couldn't have asked for better guidance!",
      program: "Biomedical Engineering"
    },
    {
      name: "Karan Singh",
      destination: "Technical University of Munich, Germany",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Thanks to GlobalEd, I'm studying at one of Europe's best technical universities with zero tuition fees. Their scholarship guidance was exceptional.",
      program: "Mechanical Engineering"
    },
    {
      name: "Sneha Gupta",
      destination: "London School of Economics, UK",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "The personalized attention and expert advice I received helped me get into my dream university. The SOP writing assistance was particularly helpful.",
      program: "Economics & Finance"
    },
    {
      name: "Vikram Kumar",
      destination: "National University Singapore",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "GlobalEd's network and expertise in Asian universities is outstanding. I'm now studying at NUS with a full scholarship, living my dream!",
      program: "Data Science"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who are now thriving in top universities worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.destination}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
