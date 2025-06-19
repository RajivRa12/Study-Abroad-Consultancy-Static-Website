
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
