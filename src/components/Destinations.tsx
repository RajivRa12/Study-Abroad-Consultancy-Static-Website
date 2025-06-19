import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      country: "United States",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      universities: "500+",
      programs: "Business, Engineering, Medicine",
      description: "Home to world's top universities like Harvard, MIT, and Stanford"
    },
    {
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      universities: "200+",
      programs: "Liberal Arts, Sciences, Law",
      description: "Experience education at Oxford, Cambridge, and Imperial College"
    },
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
      universities: "150+",
      programs: "Technology, Healthcare, Natural Sciences",
      description: "Quality education with excellent post-study work opportunities"
    },
    {
      country: "Australia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      universities: "100+",
      programs: "Marine Sciences, Mining, Agriculture",
      description: "World-class education in a vibrant multicultural environment"
    },
    {
      country: "Germany",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      universities: "120+",
      programs: "Engineering, Automotive, Research",
      description: "Tuition-free education at top technical universities"
    },
    {
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      universities: "50+",
      programs: "Business, Finance, Technology",
      description: "Gateway to Asia with world-renowned institutions"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular Study Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class education opportunities across the globe with our expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {destination.country}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{destination.country}</h3>
                  <div className="flex items-center text-orange-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">{destination.universities}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-1">Popular Programs:</div>
                  <div className="text-blue-600 font-medium">{destination.programs}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
