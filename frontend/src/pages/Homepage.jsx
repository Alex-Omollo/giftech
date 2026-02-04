import React, { useState } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { number: '50+', label: 'Schools Served' },
    { number: '3,000+', label: 'Students Taught' },
    { number: '5', label: 'Learning Pathways' },
    { number: 'Global', label: 'Expanding Reach' }
  ];

  const advantages = [
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'Clear, fair pricing with no hidden fees. Flexible packages for schools of all sizes.'
    },
    {
      icon: '🏫',
      title: 'School-Centered Programs',
      description: 'Curriculum designed to integrate seamlessly with your existing educational framework.'
    },
    {
      icon: '🚀',
      title: 'Future-Ready Skills',
      description: 'Equip students with coding, robotics, and AI skills for tomorrow\'s digital economy.'
    },
    {
      icon: '🛡️',
      title: 'Safe & Engaging Learning',
      description: 'Age-appropriate content in a secure, monitored environment that keeps students engaged.'
    },
    {
      icon: '📈',
      title: 'Long-Term Digital Growth',
      description: 'Progressive curriculum that grows with your students from basics to advanced concepts.'
    }
  ];

  const pathways = [
    {
      title: 'Coding & Algorithms',
      ageGroup: 'Ages 8-16',
      skills: ['Python', 'JavaScript', 'Problem Solving', 'Logic'],
      project: 'Build interactive games and apps',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Robotics Engineering',
      ageGroup: 'Ages 10-18',
      skills: ['Circuit Design', 'Sensors', 'Motors', 'Programming'],
      project: 'Create autonomous robots',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Internet & Communication',
      ageGroup: 'Ages 9-15',
      skills: ['Web Development', 'Networking', 'Digital Safety', 'APIs'],
      project: 'Design personal websites',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI & Application Development',
      ageGroup: 'Ages 12-18',
      skills: ['Machine Learning', 'Data Science', 'App Development', 'AI Ethics'],
      project: 'Train AI models for real problems',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const experiences = [
    {
      title: 'Boot Camps',
      description: 'Intensive, project-based learning experiences during school breaks',
      icon: '⛺'
    },
    {
      title: 'Competitions',
      description: 'Regional and national coding and robotics competitions',
      icon: '🏆'
    },
    {
      title: 'Community Projects',
      description: 'Real-world projects that make a difference in local communities',
      icon: '🌍'
    }
  ];

  const audiences = [
    {
      title: 'Schools',
      description: 'Comprehensive STEM programs that integrate with your curriculum',
      icon: '🏫',
      cta: 'View School Programs'
    },
    {
      title: 'Parents',
      description: 'After-school and weekend programs to nurture your child\'s potential',
      icon: '👨‍👩‍👧‍👦',
      cta: 'Explore Parent Options'
    },
    {
      title: 'Organizations',
      description: 'Custom training programs for youth organizations and community centers',
      icon: '🏢',
      cta: 'Partner With Us'
    }
  ];

  const testimonials = [
    {
      quote: "Giftech transformed how we teach technology. Our students are more engaged and confident than ever.",
      author: "Principal Sarah Johnson",
      school: "Greenwood Academy",
      type: 'school'
    },
    {
      quote: "My daughter went from knowing nothing about coding to building her own app in just 6 months!",
      author: "Michael Chen",
      role: "Parent",
      type: 'parent'
    },
    {
      quote: "I built a robot that can sort recyclables! Now I want to be an engineer when I grow up.",
      author: "Amina, Age 13",
      achievement: "National Robotics Competition Winner",
      type: 'student'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="homepage">
      {/* Header / Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <span className="logo-icon">🚀</span>
              <span className="logo-text">Giftech</span>
            </div>
            <nav className="nav-menu">
              <a href="#programs">Programs</a>
              <a href="#about">About</a>
              <a href="#impact">Impact</a>
              <a href="#resources">Resources</a>
            </nav>
            <div className="nav-actions">
              <button className="btn-secondary">Contact</button>
              <button className="btn-primary">Partner With Us</button>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1 - Hero */}
      <section className="hero">
        <div className="hexagon-bg"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Building Tomorrow's Innovators — Today
            </h1>
            <p className="hero-subtitle">
              Coding, Robotics, and AI education designed for schools, trusted by parents, 
              and scalable globally.
            </p>
            <div className="hero-ctas">
              <button className="btn-hero-primary">Explore Programs</button>
              <button className="btn-hero-secondary">Partner With Us</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="video-placeholder">
              <div className="play-icon">▶</div>
              <p>Watch students learn & create</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Trusted Impact Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Why Giftech */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Giftech</h2>
          <p className="section-subtitle">
            We're not just teaching code — we're building confident, creative problem-solvers
          </p>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">{advantage.icon}</div>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Learning Pathways */}
      <section className="pathways-section">
        <div className="container">
          <h2 className="section-title">Learning Pathways</h2>
          <p className="section-subtitle">
            Structured programs that take students from curiosity to competency
          </p>
          <div className="pathways-scroll">
            {pathways.map((pathway, index) => (
              <div key={index} className="pathway-card">
                <div className={`pathway-header bg-gradient-to-br ${pathway.color}`}>
                  <h3 className="pathway-title">{pathway.title}</h3>
                  <span className="pathway-age">{pathway.ageGroup}</span>
                </div>
                <div className="pathway-body">
                  <div className="pathway-skills">
                    <p className="skills-label">Skills Gained:</p>
                    <div className="skills-tags">
                      {pathway.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pathway-project">
                    <p className="project-label">Sample Project:</p>
                    <p className="project-description">{pathway.project}</p>
                  </div>
                  <button className="pathway-btn">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Beyond Classroom Experience */}
      <section className="experiences-section">
        <div className="container">
          <h2 className="section-title">Beyond the Classroom</h2>
          <p className="section-subtitle">
            Real-world applications and memorable experiences
          </p>
          <div className="experiences-grid">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <div className="experience-icon">{experience.icon}</div>
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-description">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Who We Serve */}
      <section className="audiences-section">
        <div className="container">
          <h2 className="section-title">Who We Serve</h2>
          <div className="audiences-grid">
            {audiences.map((audience, index) => (
              <div key={index} className="audience-card">
                <div className="audience-icon">{audience.icon}</div>
                <h3 className="audience-title">{audience.title}</h3>
                <p className="audience-description">{audience.description}</p>
                <button className="audience-btn">{audience.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonial-carousel">
            <button className="carousel-btn prev" onClick={prevTestimonial}>‹</button>
            <div className="testimonial-content">
              <div className="testimonial-quote">"{testimonials[currentTestimonial].quote}"</div>
              <div className="testimonial-author">
                <strong>{testimonials[currentTestimonial].author}</strong>
                <span>{testimonials[currentTestimonial].school || testimonials[currentTestimonial].role || testimonials[currentTestimonial].achievement}</span>
              </div>
            </div>
            <button className="carousel-btn next" onClick={nextTestimonial}>›</button>
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Call To Action */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Empower Your Learners?</h2>
          <p className="cta-subtitle">
            Join forward-thinking schools and parents investing in their children's future
          </p>
          <div className="cta-buttons">
            <button className="btn-cta-primary">Schedule Demo</button>
            <button className="btn-cta-secondary">Request Proposal</button>
          </div>
        </div>
      </section>

      {/* Section 9 - Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Programs</h4>
              <ul>
                <li><a href="#coding">Coding & Algorithms</a></li>
                <li><a href="#robotics">Robotics Engineering</a></li>
                <li><a href="#internet">Internet & Communication</a></li>
                <li><a href="#ai">AI & App Development</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>Email: hello@giftech.edu</li>
                <li>Phone: +254 700 000 000</li>
                <li>Location: Nairobi, Kenya</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📸</a>
                <a href="#" className="social-icon">💼</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Giftech. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;