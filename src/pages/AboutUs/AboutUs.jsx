import Navbar from '../../components/WeekendUX/Navbar';
import Footer from '../../components/WeekendUX/Footer';
import { Link } from 'react-router-dom';

import imageAbout1 from '../../image/image-about-01.jpg';
import imageAbout2 from '../../image/image-about-02.jpg';
import imageAbout3 from '../../image/image-about-03.jpg'; // استيراد صورة اللمبات

import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">

      <Navbar />

      <main className="about-container">

        {/* ================= HERO SECTION ================= */}

        <section className="hero-wrapper">

          {/* LEFT SIDE */}
          <div className="hero-left">

            <h5 className="about-us-title">
              About Us
            </h5>

            <h1 className="hero-main-title">
              <span>WEEKEND UX</span> Providing The Best Opportunities To The Students Around The Globe.
            </h1>

            <p className="hero-description">
              Weekend UX is a UI/UX Design Academy helping students learn
              User Experience and User Interface Design through modern training
              and practical coaching.
            </p>

            <p className="hero-description">
              Our mission is to empower students with strong design knowledge
              and practical skills for building successful careers.
            </p>

            <Link to="/register" className="hero-btn">
              Join Us →
            </Link>

          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right">

            <div className="images-wrapper">

             
              <img
                src={imageAbout1}
                alt=""
                className="top-image"
              />

              <img
                src={imageAbout2}
                alt=""
                className="bottom-image"
              />

            </div>

          </div>

        </section>

        {/* ==================== FEATURES SECTION (جديد) ==================== */}

        <section className="features-wrapper">
          
          {/* LEFT SIDE: الصورة المربعة على الشمال */}
          <div className="features-left">
            <div className="feature-image-container">
              <img 
                src={imageAbout3} 
                alt="Features backdrop" 
                className="feature-img"
              />
            </div>
          </div>

          {/* RIGHT SIDE: الكلام جنبها على اليمين */}
          <div className="features-right">
            <h5 className="features-sub-title">Features</h5>
            <h2 className="features-main-heading">
              We are always working to provide you best of the features in all aspects.
            </h2>
            <p className="features-description">
              At WEEKENDUX the chief determination is to clear the minds of our
              students about their goals, while making them consistent in their ambitions
              and pushing them to be confident for their journey towards the course of
              time.
            </p>
            <p className="features-description">
              You will find every little thing on the internet in just a click of hand, but here
              we admire that without knowledge and practice the internet may even also
              fail you in your life.
            </p>
            <Link to="/courses" className="features-btn">Explore More</Link>
          </div>

        </section>

      {/* ==================== BENEFITS SECTION ==================== */}

<section className="benefits-wrapper">
  
  <div className="benefits-header">
    <h5 className="benefits-sub-title">Our Benefits</h5>
    <h2 className="benefits-main-heading">
      By Joining WEEKENS UX Platform, One Can Avail a Lot Of Benefits.
    </h2>
    <p className="benefits-sub-text">
      Install our top-rated dropshipping app to your e-commerce site and get <br />
      access to US Suppliers, AliExpress vendors, and the best.
    </p>
  </div>

  <ol className="benefits-grid">
    
    <li className="benefit-card">
      <span className="benefit-num">01</span>
      <h3 className="benefit-title">Standardization</h3>
      <p className="benefit-desc">
        When working in a global workplace, it’s often difficult to gauge learners’ training experiences. 
        Our platform ensures a highly standardized curriculum that aligns completely with global tech standards 
        and industry workflows used by top international teams worldwide.
      </p>
    </li>
    
    <li className="benefit-card">
      <span className="benefit-num">02</span>
      <h3 className="benefit-title">Reduced Costs</h3>
      <p className="benefit-desc">
        With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning 
        ecosystems, companies and individual students can save thousands of dollars on traditional instructor-led 
        training, expensive physical learning materials, and unnecessary commuting costs.
      </p>
    </li>
    
    <li className="benefit-card">
      <span className="benefit-num">03</span>
      <h3 className="benefit-title">More Customization</h3>
      <p className="benefit-desc">
        Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different 
        flexible learning pathways, our platform enables you to fully customize your daily study schedule, select the 
        exact skills you want to focus on, and skip what you already know.
      </p>
    </li>
    
    <li className="benefit-card">
      <span className="benefit-num">04</span>
      <h3 className="benefit-title">Affordable Pricing</h3>
      <p className="benefit-desc">
        We believe that high-quality design education should be accessible to everyone around the globe. 
        That is why we provide flexible monthly and yearly subscription plans specifically tailored to suit 
        the budgets of both college students and transition professionals.
      </p>
    </li>
    
    <li className="benefit-card">
      <span className="benefit-num">05</span>
      <h3 className="benefit-title">Learner Satisfaction</h3>
      <p className="benefit-desc">
        If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad 
        user experiences lead to drops in course completion, which is why our interactive materials and supportive 
        mentor network maintain an incredible 95% satisfaction rate.
      </p>
    </li>
    
    <li className="benefit-card">
      <span className="benefit-num">06</span>
      <h3 className="benefit-title">Multimedia Materials</h3>
      <p className="benefit-desc">
        One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for 
        diverse content styles. Enjoy rich high-definition video lectures, interactive quizzes, hands-on layout 
        exercises, downloadable templates, and weekly live feedback sessions.
      </p>
    </li>

  </ol>

</section>

      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;