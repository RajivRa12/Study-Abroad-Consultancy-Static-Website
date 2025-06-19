
import React from 'react';
import { ArrowRight, Calendar, Users, Award } from 'lucide-react';

const CallToAction = () => {
  const handleBookConsultation = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppConsultation = () => {
    const phoneNumber = "918438327763";
    const message = "Hi! I would like to book a free consultation for studying abroad.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of successful students who have achieved their dreams of studying abroad with Nextstep Education
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="opacity-90">Get personalized guidance from our experts</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="opacity-90">Dedicated counselors for your success</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="opacity-90">95% visa success rate</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookConsultation}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleWhatsAppConsultation}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              WhatsApp Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
