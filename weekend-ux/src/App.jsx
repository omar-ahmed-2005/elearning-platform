import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import PopularClasses from './components/PopularClasses';
import Tutors from './components/Tutors';
import Testimonial from './components/Testimonial';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <PopularClasses />
      <Tutors />
      <Testimonial />
      <Blogs />
      <Footer />
    </div>
  );
}
