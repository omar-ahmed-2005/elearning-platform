import React from 'react';

export default function Brands() {
  return (
    <div className="container">
      <section className="brands">
        <div className="brands__stats">
          <span className="brands__stat-value">250+</span>
          <span className="brands__stat-label">Collaboration</span>
        </div>
        
        <div className="brands__list">
          <div className="brands__logo">duolingo</div>
          <div className="brands__logo brands__logo--flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
            Codecov
          </div>
          <div className="brands__logo">UserTesting</div>
          <div className="brands__logo">magic leap</div>
        </div>
      </section>
    </div>
  );
}
