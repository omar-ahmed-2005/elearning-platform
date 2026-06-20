import React from 'react';
import frame16 from '../../image/Frame 16.jpg';

export default function Brands() {
  return (
    <div className="container">
      <section className="brands">
        <div className="brands__stats">
          <span className="brands__stat-value">250+</span>
          <span className="brands__stat-label">Collaboration</span>
        </div>
        
        <div className="brands__list">
          <img src={frame16} alt="Collaboration Logos" className="brands__image" />
        </div>
      </section>
    </div>
  );
}
