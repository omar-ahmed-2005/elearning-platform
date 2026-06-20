import React, { useState } from 'react';
import './Services.css';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      icon: 'fas fa-table-columns',
      title: 'Interaction Design',
      desc: 'Lessons on design that cover the most recent developments.',
      defaultIconBg: '#e8f8ef',
      defaultIconColor: '#2ECC8F'
    },
    {
      icon: 'fas fa-desktop',
      title: 'UX Design Course',
      desc: 'Classes in development that cover the most recent advancements in web.',
      defaultIconBg: '#dff0fb',
      defaultIconColor: '#2f80ed'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'User Interface Design',
      desc: 'User Interface Design courses that cover the most recent trends.',
      defaultIconBg: '#fce4f0',
      defaultIconColor: '#e91e63'
    }
  ];

  return (
    <section className="services-section">
      <div className="svc-header">
        <span className="svc-label">OUR SERVICES</span>
        <h2 className="svc-heading">
          Fostering a playful & engaging learning environment
        </h2>
      </div>

      <div className="svc-cards-container">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`svc-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div 
              className="svc-icon-wrapper"
              style={{
                backgroundColor: activeIndex === index ? 'rgba(255,255,255,0.25)' : card.defaultIconBg,
                color: activeIndex === index ? '#ffffff' : card.defaultIconColor
              }}
            >
              <i className={card.icon}></i>
            </div>
            <h3 className="svc-title">{card.title}</h3>
            <p className="svc-desc">{card.desc}</p>
            <div className="svc-link">
              Learn More <i className="fas fa-chevron-right" style={{ fontSize: '11px', marginLeft: '4px' }}></i>
            </div>
          </div>
        ))}
      </div>

      <div className="svc-dots-container">
        {cards.map((_, index) => (
          <div 
            key={index}
            className={`svc-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
