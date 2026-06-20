import React from 'react';
import { Mic, Briefcase, Lightbulb, PieChart, Video, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero__content">
        <h1 className="hero__title">
          Up Your <span className="hero__title-highlight">Skills</span><br className="hero__title-break" />
          To <span className="hero__title-highlight">Advance</span> Your<br className="hero__title-break" />
          Career Path
        </h1>
        <p className="hero__description">
          Learn UI-UX Design skills with weekend UX. The latest online learning system and material that help your knowledge growing.
        </p>
        
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary">
            Get Started
          </button>
          <button className="hero__btn hero__btn--secondary">
            Get free trial
          </button>
        </div>
        
        <div className="hero__features">
          <div className="hero__feature">
            <div className="hero__feature-icon hero__feature-icon--amber">
              <Mic size={22} />
            </div>
            Public Speaking
          </div>
          <div className="hero__feature">
            <div className="hero__feature-icon hero__feature-icon--rose">
              <Briefcase size={22} />
            </div>
            Career-Oriented
          </div>
          <div className="hero__feature">
            <div className="hero__feature-icon hero__feature-icon--indigo">
              <Lightbulb size={22} />
            </div>
            Creative Thinking
          </div>
        </div>
      </div>
      
      <div className="hero__visual">
        <div className="hero__bg-rings">
           <div className="hero__bg-ring hero__bg-ring--large"></div>
           <div className="hero__bg-ring hero__bg-ring--small"></div>
        </div>
        
        <div className="hero__image-container">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" 
            alt="Student" 
            className="hero__image"
          />
          
          <div className="hero__stat-card hero__stat-card--top-right">
            <div className="hero__stat-icon">
              <PieChart size={24} />
            </div>
            <h3 className="hero__stat-value">5K+</h3>
            <p className="hero__stat-label">Online Courses</p>
          </div>

          <div className="hero__stat-card hero__stat-card--middle-left">
            <div className="hero__stat-icon">
              <Video size={20} />
            </div>
            <div className="hero__stat-text">
              <h3 className="hero__stat-value hero__stat-value--inline">2K+</h3>
              <p className="hero__stat-label">Video Courses</p>
            </div>
          </div>

          <div className="hero__stat-card hero__stat-card--bottom-right">
            <div className="hero__stat-icon">
              <User size={20} />
            </div>
            <div className="hero__stat-text">
              <p className="hero__stat-label hero__stat-label--inline">Tutors</p>
              <h3 className="hero__stat-value">250+</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
