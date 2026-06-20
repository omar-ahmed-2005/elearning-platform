import React from 'react';
import { Link } from 'react-router-dom';
import studentImg from '../../image/young-student-woma.png';
import frame16 from '../../image/Frame 16.jpg';

export default function Hero() {
  return (
    <section className="hero">
        <div className="hero-gradient"></div>
        
        {/* HERO - LEFT COLUMN */}
        <div className="hero-left">
            <div className="green-dot-h1"></div>
            
            <div className="hero-left-content">
                <h1>
                    Up Your <span>Skills</span><br />
                    To <span>Advance Your</span><br />
                    <span>Career</span> Path
                </h1>
                <p className="hero-desc">
                    Learn UI-UX Design skills with weekend UX. The latest online
                    learning system and material that help your knowledge growing.
                </p>
                
                <div className="buttons-row">
                    <Link to="#" className="btn btn-filled">Get Started</Link>
                    <Link to="#" className="btn btn-outlined">Get free trial</Link>
                </div>
                
                <div className="features-row">
                    <div className="feature">
                        <div className="feature-icon bg-orange"><i className="fas fa-microphone"></i></div>
                        Public Speaking
                    </div>
                    <div className="feature">
                        <div className="feature-icon bg-green"><i className="fas fa-briefcase"></i></div>
                        Career-Oriented
                    </div>
                    <div className="feature">
                        <div className="feature-icon bg-yellow"><i className="fas fa-lightbulb"></i></div>
                        Creative Thinking
                    </div>
                </div>
                
                <div className="collab-row">
                    <div className="collab-text">
                        <span className="num">250+</span>
                        <span className="label">Collaboration</span>
                    </div>
                    <div className="logos">
                        <img src={frame16} alt="Partner Logos" className="logos-img" />
                    </div>
                </div>
            </div>
        </div>

        {/* HERO - RIGHT COLUMN */}
        <div className="hero-right">
            
            <div className="hero-visual">
                <div className="right-ring-1"></div>
                <div className="right-ring-2"></div>
                <div className="circle-bg">
                    <img src={studentImg} alt="Student" className="student-img" />
                </div>
            </div>

            {/* Floating white stat cards */}
            <div className="stat-card card-top-right">
                <div className="progress-arc-container">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                        <path className="circle-bg-path"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path className="circle"
                            strokeDasharray="75, 100"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div className="progress-icon">
                        <i className="fas fa-file-alt"></i>
                    </div>
                </div>
                <div className="stat-info">
                    <h3>5K+</h3>
                    <p>Online Courses</p>
                </div>
            </div>

            <div className="stat-card card-middle-left">
                <div className="stat-icon bg-light-green">
                    <i className="fas fa-play-circle"></i>
                </div>
                <div className="stat-info">
                    <h3>2K+</h3>
                    <p>Video Courses</p>
                </div>
            </div>

            <div className="stat-card card-bottom-right">
                <div className="stat-icon bg-light-green">
                    <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <div className="stat-info">
                    <p>Tutors</p>
                    <h3>250+</h3>
                </div>
            </div>
        </div>

    </section>
  );
}
