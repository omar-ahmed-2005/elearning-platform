import React from 'react';

export default function Testimonial() {
  return (
    <div className="container">
      <section className="testimonial">
        <div className="testimonial__card">
          <div className="testimonial__icon-wrapper">
            <svg className="testimonial__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          
          <h2 className="testimonial__quote">
            Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.
          </h2>
          
          <div className="testimonial__author">
            <img src="https://i.pravatar.cc/150?img=65" alt="Jacob Jones" className="testimonial__author-img" />
            <h4 className="testimonial__author-name">Jacob Jones</h4>
            <span className="testimonial__author-role">Student, National University</span>
          </div>
        </div>
      </section>
    </div>
  );
}
