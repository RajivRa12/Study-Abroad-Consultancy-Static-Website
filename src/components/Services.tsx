
import React from 'react';
import { BookOpen, FileText, DollarSign, Globe, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "University Selection",
      description: "Expert guidance to choose the right university and program that matches your career goals and academic profile.",
      features: ["Personalized university matching", "Course selection guidance", "Ranking analysis"]
    },
    {
      icon: FileText,
      title: "Application Assistance",
      description: "Complete support for your application process including document preparation and submission.",
      features: ["SOP writing assistance", "Document verification", "Application review"]
    },
    {
      icon: DollarSign,
      title: "Scholarship Guidance",
      description: "Maximize your chances of securing scholarships and financial aid for your international education.",
      features: ["Scholarship database access", "Application strategies", "Merit assessment"]
    },
    {
      icon: Globe,
      title: "Visa Processing",
      description: "End-to-end visa assistance to ensure smooth approval and timely processing.",
      features: ["Document checklist", "Interview preparation", "Status tracking"]
    },
    {
      icon: Users,
      title: "Pre-departure Support",
      description: "Comprehensive preparation for your journey including accommodation and cultural orientation.",
      features: ["Accommodation assistance", "Cultural briefing", "Travel arrangements"]
    },
    {
      icon: CheckCircle,
      title: "Post-arrival Services",
      description: "Continued support even after you reach your destination to ensure smooth settlement.",
      features: ["Airport pickup coordination", "Local orientation", "Emergency support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From university selection to post-arrival support, we guide you through every step of your study abroad journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
