
import React from 'react';

function Hero() {
    console.log("Test Hero");
  return (
    <section className="hero">
      <div className="container">
        <h1>Your SaaS Headline</h1>
        <p>Your subheadline explaining the SaaS</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
