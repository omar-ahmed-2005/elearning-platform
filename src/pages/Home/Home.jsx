import React from 'react';
import Navbar from '../../components/WeekendUX/Navbar';
import Hero from '../../components/WeekendUX/Hero';
import Services from '../../components/WeekendUX/Services';
import PopularClasses from '../../components/WeekendUX/PopularClasses';
import Tutors from '../../components/WeekendUX/Tutors';
import Testimonial from '../../components/WeekendUX/Testimonial';
import Blogs from '../../components/WeekendUX/Blogs';
import Footer from '../../components/WeekendUX/Footer';
import './Home.css';


function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <PopularClasses />
      <Tutors />
      <Testimonial />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;