
import React from 'react';

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <img src="/logo192.png" alt="Feature 1" />
            <h3>Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="feature">
            <img src="/logo192.png" alt="Feature 2" />
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="feature">
            <img src="/logo192.png" alt="Feature 3" />
            <h3>Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
