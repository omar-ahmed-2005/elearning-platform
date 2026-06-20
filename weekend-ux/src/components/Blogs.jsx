import React from 'react';

export default function Blogs() {
  return (
    <section className="blogs container">
      <h2 className="blogs__title">Our recent blogs</h2>
      
      <div className="blogs__grid">
        <div className="blogs__list">
          <div className="blog-card blog-card--row">
            <div className="blog-card__image-container">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Blog 1" className="blog-card__image" />
            </div>
            <div className="blog-card__body">
              <span className="blog-card__date">November 16, 2014</span>
              <h3 className="blog-card__title">Three Pillars of User Delight</h3>
              <p className="blog-card__description">
                Delight can be experienced viscerally, behaviourally, and reflectively. A great design is...
              </p>
              <div className="blog-card__tags">
                <span className="blog-card__tag blog-card__tag--rose">Research</span>
                <span className="blog-card__tag blog-card__tag--indigo">UI UX</span>
              </div>
            </div>
          </div>

          <div className="blog-card blog-card--row">
            <div className="blog-card__image-container">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Blog 2" className="blog-card__image" />
            </div>
            <div className="blog-card__body">
              <span className="blog-card__date">September 24, 2017</span>
              <h3 className="blog-card__title">UX Mapping Methods</h3>
              <p className="blog-card__description">
                Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
              </p>
              <div className="blog-card__tags">
                <span className="blog-card__tag blog-card__tag--rose">Research</span>
                <span className="blog-card__tag blog-card__tag--primary">UI Design</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="blogs__featured">
          <div className="blog-card blog-card--col">
             <div className="blog-card__image-container blog-card__image-container--large">
               <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Featured" className="blog-card__image" />
             </div>
             <span className="blog-card__date">March 13, 2014</span>
             <h3 className="blog-card__title">Agile Development Projects and Usability</h3>
             <p className="blog-card__description blog-card__description--expand">
               Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. 
             </p>
             <div className="blog-card__tags">
                <span className="blog-card__tag blog-card__tag--amber">Programming</span>
                <span className="blog-card__tag blog-card__tag--indigo">Research</span>
                <span className="blog-card__tag blog-card__tag--rose">Developments</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
