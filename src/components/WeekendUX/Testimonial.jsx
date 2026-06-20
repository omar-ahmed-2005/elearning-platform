import React from 'react';
import testimonialAvatar from '../../image/image.jpg';
import quoteIcon from '../../image/image 2.jpg';

export default function Testimonial() {
  return (
    <div className="container">
      <section className="testimonial">
        <div className="testimonial__card">
          <div className="testimonial__icon-wrapper">
            <img src={quoteIcon} alt="Quote" className="testimonial__icon" style={{ height: '56px', width: 'auto' }} />
          </div>
          
          <h2 className="testimonial__quote">
            Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.
          </h2>
          
          <div className="testimonial__author">
            <img src={testimonialAvatar} alt="Jacob Jones" className="testimonial__author-img" />
            <h4 className="testimonial__author-name">Jacob Jones</h4>
            <span className="testimonial__author-role">Student, National University</span>
          </div>
        </div>
      </section>
    </div>
  );
}
