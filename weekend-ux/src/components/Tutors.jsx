import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

export default function Tutors() {
  const tutors = [
    {
      name: "Theresa Webb",
      title: "Application Support Analyst Lead",
      desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      img: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Courtney Henry",
      title: "Director, Undergraduate Analytics",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      img: "https://i.pravatar.cc/150?img=22"
    },
    {
      name: "Albert Flores",
      title: "Career Educator",
      desc: "Former PM for Linear, Lambda School, and On Deck.",
      img: "https://i.pravatar.cc/150?img=53"
    },
    {
      name: "Marvin McKinney",
      title: "Operations Manager",
      desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
      img: "https://i.pravatar.cc/150?img=44"
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
              <a href="#" className="tutor-card__social-link"><Twitter size={20} /></a>
              <a href="#" className="tutor-card__social-link"><Linkedin size={20} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
