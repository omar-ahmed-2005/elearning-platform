import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

export default function PopularClasses() {
  const classes = [
    {
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      category: "Design",
      title: "Figma UI UX Design..",
      description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rating: 4.8,
      reviews: "163,254",
      author: "Jane Cooper",
      authorRole: "2001 Enrolled",
      authorImg: "https://i.pravatar.cc/150?img=47",
      price: "$17.84"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      category: "Design",
      title: "Learn With Shoaib",
      description: "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      rating: 4.8,
      reviews: "163,254",
      author: "Jenny Wilson",
      authorRole: "2001 Enrolled",
      authorImg: "https://i.pravatar.cc/150?img=12",
      price: "$8.99"
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      category: "Design",
      title: "Building User Interface..",
      description: "Learn how to apply User Experience (UX) principles to your website designs.",
      rating: 4.8,
      reviews: "163,254",
      author: "Esther Howard",
      authorRole: "2001 Enrolled",
      authorImg: "https://i.pravatar.cc/150?img=33",
      price: "$11.70"
    }
  ];

  return (
    <section className="popular-classes container">
      <div className="popular-classes__header">
        <h4 className="popular-classes__subtitle">Explore Programs</h4>
        <h2 className="popular-classes__title">Our Most Popular Class</h2>
        <p className="popular-classes__desc">Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
      </div>

      <div className="popular-classes__grid">
        {classes.map((cls, idx) => (
          <div key={idx} className="course-card">
            <div className="course-card__image-container">
              <img 
                src={cls.image} 
                alt={cls.title} 
                className="course-card__image" 
              />
            </div>
            
            <div className="course-card__body">
              <div className="course-card__category-wrapper">
                <span className="course-card__category">
                  {cls.category}
                </span>
              </div>
              
              <h3 className="course-card__title">
                {cls.title} 
                <ArrowUpRight size={24} className="course-card__icon" />
              </h3>
              
              <p className="course-card__description">
                {cls.description}
              </p>
              
              <div className="course-card__rating-wrapper">
                <span className="course-card__rating-score">{cls.rating}</span>
                <div className="course-card__rating-stars"><Star fill="currentColor" size={16} /></div>
                <span className="course-card__rating-count">({cls.reviews})</span>
              </div>
              
              <div className="course-card__footer">
                <div className="course-card__author">
                  <img src={cls.authorImg} alt={cls.author} className="course-card__author-img" />
                  <div className="course-card__author-info">
                    <h4 className="course-card__author-name">{cls.author}</h4>
                    <p className="course-card__author-role">{cls.authorRole}</p>
                  </div>
                </div>
                <div className="course-card__price">{cls.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="popular-classes__footer">
        <button className="btn btn--outline">
          Explore All Programs
        </button>
      </div>
    </section>
  );
}
