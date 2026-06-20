import React from 'react';
import { Monitor, Layout, Smartphone, ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="services container">
      <h4 className="services__subtitle">Our Services</h4>
      <h2 className="services__title">
        Fostering a playful & engaging learning environment
      </h2>
      
      <div className="services__grid">
         <div className="service-card service-card--primary">
           <div className="service-card__icon">
             <Layout size={32} />
           </div>
           <h3 className="service-card__title">Interaction Design</h3>
           <p className="service-card__description">Lessons on design that cover the most recent developments.</p>
           <a href="#" className="service-card__link">
             Learn More <ChevronRight size={18} />
           </a>
         </div>

         <div className="service-card">
           <div className="service-card__icon">
             <Monitor size={32} />
           </div>
           <h3 className="service-card__title">UX Design Course</h3>
           <p className="service-card__description">Classes in development that cover the most recent advancements in web.</p>
           <a href="#" className="service-card__link">
             Learn More <ChevronRight size={18} />
           </a>
         </div>

         <div className="service-card">
           <div className="service-card__icon">
             <Smartphone size={32} />
           </div>
           <h3 className="service-card__title">User Interface Design</h3>
           <p className="service-card__description">User Interface Design courses that cover the most recent trends.</p>
           <a href="#" className="service-card__link">
             Learn More <ChevronRight size={18} />
           </a>
         </div>
      </div>
    </section>
  );
}
