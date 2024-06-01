
import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Pricing</h2>
        <div className="pricing-table">
          <div className="pricing-plan">
            <h3>Basic</h3>
            <p>$10/month</p>
            <ul>
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="pricing-plan">
            <h3>Pro</h3>
            <p>$30/month</p>
            <ul>
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
              <li>Feature D</li>
            </ul>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="pricing-plan">
            <h3>Enterprise</h3>
            <p>$100/month</p>
            <ul>
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
              <li>Feature D</li>
              <li>Feature E</li>
            </ul>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
