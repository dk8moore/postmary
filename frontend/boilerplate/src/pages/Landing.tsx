import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import SocialProof from '../components/landing/Proof';
import Template from '../components/landing/Template';
import Pricing from '../components/landing/Pricing';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

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
