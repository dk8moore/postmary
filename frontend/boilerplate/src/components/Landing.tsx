import React from 'react';
import Header from './landing/Header';
import Hero from './landing/Hero';
import Features from './landing/Features';
import SocialProof from './landing/Proof';
import Template from './landing/Template';
import Pricing from './landing/Pricing';
import CTA from './landing/CTA';
import Footer from './landing/Footer';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      {/* <Template /> */}
      <Pricing />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
