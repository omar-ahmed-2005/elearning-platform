import { useState } from 'react';
import Navbar from '../../components/WeekendUX/Navbar';
import Footer from '../../components/WeekendUX/Footer';

import courseImg1 from '../../image/corursr-01.png';
import courseImg2 from '../../image/corursr-02.png';
import courseImg3 from '../../image/corursr-03.png';
import courseImg4 from '../../image/corursr-04.png';
import courseImg5 from '../../image/corursr-05.png';
import courseImg6 from '../../image/corursr-06.png';
import courseImg7 from '../../image/corursr-07.png';
import courseImg8 from '../../image/corursr-08.png';
import courseImg9 from '../../image/corursr-09.png';
import courseImg10 from '../../image/corursr-10.png';

import avatar1 from '../../image/alexander.jpg';
import avatar2 from '../../image/leon.jpg';
import avatar3 from '../../image/nubleson.jpg';
import avatar4 from '../../image/photo.jpg';

import './Courses.css'; 

const allCourses = [
  { id: 1, title: 'Figma UI UX Design Essentials', category: 'DESIGN', image: courseImg1, description: 'Master the complete Figma workflow from wireframes to high-fidelity prototypes.', rating: 4.8, reviewsCount: '16,325', instructor: 'Jane Cooper', instructorAvatar: avatar1, duration: '08 hr 12 mins', price: '$17.84' },
  { id: 2, title: 'Advanced UI Design Mastery', category: 'DESIGN', image: courseImg2, description: 'Push your UI skills further with advanced component systems and design tokens.', rating: 4.9, reviewsCount: '4,210', instructor: 'Marcus Lee', instructorAvatar: avatar2, duration: '12 hr 45 mins', price: '$24.99' },
  { id: 3, title: 'Motion Graphics Fundamentals', category: 'ANIMATION', image: courseImg3, description: 'Bring your designs to life with animation principles and motion design.', rating: 4.6, reviewsCount: '800', instructor: 'Sarah Lin', instructorAvatar: avatar3, duration: '05 hr 20 mins', price: '$15.99' },
  { id: 4, title: 'Web Development with React', category: 'DEVELOPMENT', image: courseImg4, description: 'Build modern web apps with React hooks and ecosystem tools.', rating: 4.9, reviewsCount: '12,500', instructor: 'Ahmed Karim', instructorAvatar: avatar4, duration: '15 hr 30 mins', price: '$32.00' },
  { id: 5, title: 'Product Management Foundations', category: 'BUSINESS', image: courseImg5, description: 'Learn to drive product strategy, roadmaps, and user research.', rating: 4.7, reviewsCount: '2,140', instructor: 'Priya Sharma', instructorAvatar: avatar1, duration: '09 hr 15 mins', price: '$28.50' },
  { id: 6, title: 'Typography Masterclass', category: 'DESIGN', image: courseImg6, description: 'Master the art of type — pairing, hierarchy, and readability.', rating: 4.5, reviewsCount: '560', instructor: 'Elena Vasquez', instructorAvatar: avatar2, duration: '04 hr 45 mins', price: '$12.99' },
  { id: 7, title: 'Branding & Identity Design', category: 'MARKETING', image: courseImg7, description: 'Create powerful brand identities that stand out in any market.', rating: 4.6, reviewsCount: '930', instructor: 'Chris Martinez', instructorAvatar: avatar3, duration: '04 hr 15 mins', price: '$19.99' },
  { id: 8, title: 'JavaScript Deep Dive', category: 'DEVELOPMENT', image: courseImg8, description: 'From closures to async/await — master JS from the ground up.', rating: 4.8, reviewsCount: '8,450', instructor: 'Kyle Thompson', instructorAvatar: avatar4, duration: '20 hr 00 mins', price: '$45.00' },
  { id: 9, title: 'UX Research Methods', category: 'DESIGN', image: courseImg9, description: 'User interviews, usability tests, surveys, and synthesis techniques.', rating: 4.5, reviewsCount: '920', instructor: 'Maria Johnson', instructorAvatar: avatar1, duration: '07 hr 45 mins', price: '$22.00' },
  { id: 10, title: 'Design Systems at Scale', category: 'DESIGN', image: courseImg10, description: 'Build, document, and maintain scalable design systems for teams.', rating: 4.9, reviewsCount: '1,840', instructor: 'David Park', instructorAvatar: avatar2, duration: '11 hr 10 mins', price: '$35.00' },
  { id: 11, title: 'Micro-interactions Design', category: 'INTERACTION', image: courseImg1, description: 'Create delightful micro-animations that improve UX significantly.', rating: 4.4, reviewsCount: '420', instructor: 'Anna Kim', instructorAvatar: avatar3, duration: '06 hr 30 mins', price: '$14.00' },
];

const categories = ['All', 'DESIGN', 'DEVELOPMENT', 'BUSINESS', 'MARKETING', 'ANIMATION', 'INTERACTION'];

function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allCourses
    : allCourses.filter((c) => c.category === activeCategory);

  return (
    <div className="courses-page">
      <Navbar />
      <main className="courses-container">
        <header className="courses-header">
          <p className="catalog-sub">BROWSE CATALOG</p>
          <h1 className="catalog-title">Our Most Popular Classes</h1>
          <p className="catalog-desc">
            Discover top-rated courses across design, development, business, and more. Taught by industry experts to help you reach your goals.
          </p>

          <div className="filter-bar">
            <nav className="categories-nav" aria-label="Course categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </nav>
            <span className="courses-count">Showing {filtered.length} courses</span>
          </div>
        </header>

        <section className="courses-grid" aria-label="Course grid">
          {filtered.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-img-wrapper">
                <img src={course.image} alt={course.title} className="course-main-img" />
                <div className="course-duration-badge">{course.duration}</div>
              </div>
              <div className="course-card-body">
                <div className="course-top-row">
                  <span className={`course-cat-tag tag-${course.category.toLowerCase()}`}>
                    {course.category}
                  </span>
                  <div className="course-arrow-icon">↗</div>
                </div>
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.description}</p>
                <div className="course-rating-wrapper">
                  <span className="rating-num">{course.rating}</span>
                  <span className="stars-row">★★★★★</span>
                  <span className="reviews-count">({course.reviewsCount})</span>
                </div>
                <div className="course-footer-row">
                  <div className="instructor-info">
                    <img src={course.instructorAvatar} alt={course.instructor} className="instructor-avatar" />
                    <span className="instructor-name">{course.instructor}</span>
                  </div>
                  <span className="course-card-price">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Courses;