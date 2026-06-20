import React from 'react';

import avatar1 from '../../image/image-01.png';
import avatar2 from '../../image/image-02.png';
import avatar3 from '../../image/image-03.png';
import avatar4 from '../../image/image-04.png';

export default function Tutors() {
  const tutors = [
    {
      name: "Theresa Webb",
      title: "Application Support Analyst Lead",
      desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      img: avatar1
    },
    {
      name: "Courtney Henry",
      title: "Director, Undergraduate Analytics",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      img: avatar2
    },
    {
      name: "Albert Flores",
      title: "Career Educator",
      desc: "Former PM for Linear, Lambda School, and On Deck.",
      img: avatar3
    },
    {
      name: "Marvin McKinney",
      title: "Operations Manager",
      desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
      img: avatar4
    }
  ];

  return (
    <section className="tutors container">
      <h4 className="tutors__subtitle">Tutors</h4>
      <h2 className="tutors__title">Meet the Heroes</h2>
      <p className="tutors__desc">
        On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.
      </p>

      <div className="tutors__grid">
        {tutors.map((tutor, idx) => (
          <div key={idx} className="tutor-card">
            <div className="tutor-card__avatar-container">
              <img src={tutor.img} alt={tutor.name} className="tutor-card__avatar" />
            </div>
            
            <h3 className="tutor-card__name">{tutor.name}</h3>
            <p className="tutor-card__title">{tutor.title}</p>
            <p className="tutor-card__desc">{tutor.desc}</p>
            
            <div className="tutor-card__socials">
              <a href="#" className="tutor-card__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="tutor-card__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
