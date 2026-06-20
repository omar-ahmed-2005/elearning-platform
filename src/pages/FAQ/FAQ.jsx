import { useState } from 'react';
import Navbar from '../../components/WeekendUX/Navbar';
import Footer from '../../components/WeekendUX/Footer';
import './FAQ.css'; // استيراد ملف الـ CSS المتروق

const faqs = [
  {
    id: 1,
    question: 'How do I access my certificates after completion?',
    answer:
      'Once you complete all the lessons and pass the final assessment of a course, your certificate will be automatically generated. You can view, download, or share it directly from your \'Achievement\' dashboard under your profile settings.',
  },
  {
    id: 2,
    question: 'Can I get a refund if I am not satisfied with a course?',
    answer:
      'Yes! We offer a 30-day money-back guarantee on all courses. Contact support within 30 days of purchase for a full refund.',
  },
  {
    id: 3,
    question: 'Are the courses self-paced or do they have deadlines?',
    answer:
      'All courses are fully self-paced with no deadlines. You have lifetime access including all future updates.',
  },
  {
    id: 4,
    question: 'How many devices can I use to access my account?',
    answer:
      'You can access your account on up to 3 devices simultaneously. Progress syncs automatically across all devices.',
  },
  {
    id: 5,
    question: 'Do you offer corporate or team training packages?',
    answer:
      'Yes! We offer custom corporate packages for teams of 5 or more, including bulk discounts, a dedicated account manager, and custom learning paths.',
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(1);
  const [search, setSearch] = useState('');

  const filtered = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="faq-page">
      <Navbar />
      
      <main className="faq-container">
        
        {/* ==================== HEADER SECTION ==================== */}
        <header className="faq-header">
          <span className="faq-badge">SUPPORT CENTER</span>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-desc">Need help with your learning journey? Find quick answers to common questions or reach out to our dedicated support team.</p>
          
          <div className="faq-search-wrapper">
            {/* أيقونة العدسة الشيك جوه السيرش */}
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              id="faq-search"
              type="search"
              placeholder="Search for answers (e.g. billing, certificates, course access)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        {/* ==================== ACCORDION SECTION ==================== */}
        <section className="faq-accordion-box" aria-label="FAQ accordion">
          {filtered.length === 0 && <p className="no-results">No results found for "{search}".</p>}
          
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <article key={faq.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <h2>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    {/* سهم الـ Chevron اللي بيلف بدال علامة الزائد */}
                    <span className="faq-icon-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </button>
                </h2>
                
                <div 
                  id={`faq-answer-${faq.id}`} 
                  className={`faq-content ${isOpen ? 'show' : ''}`}
                  role="region"
                >
                  <div className="faq-content-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* ==================== BOTTOM FOOTER CALLOUT ==================== */}
        <section className="faq-footer-callout">
          <h2 className="callout-title">Still have questions?</h2>
          <p className="callout-desc">If you can't find what you're looking for, our support specialists are available 24/7 to help you with anything you need.</p>
          
          <div className="callout-actions">
            <a href="/contact" className="btn-contact-support">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Support
            </a>
            <button type="button" className="btn-live-chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Live Chat
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default FAQ;