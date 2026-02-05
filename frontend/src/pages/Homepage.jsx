import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      icon: 'pricing',
      title: 'Transparent Pricing',
      description: 'Clear, fair pricing with no hidden fees. Flexible packages for schools of all sizes.'
    },
    {
      icon: 'school',
      title: 'School-Centered Programs',
      description: 'Curriculum designed to integrate seamlessly with your existing educational framework.'
    },
    {
      icon: 'rocket',
      title: 'Future-Ready Skills',
      description: 'Equip students with coding, robotics, and AI skills for tomorrow\'s digital economy.'
    },
    {
      icon: 'shield',
      title: 'Safe & Engaging Learning',
      description: 'Age-appropriate content in a secure, monitored environment that keeps students engaged.'
    },
    {
      icon: 'growth',
      title: 'Long-Term Digital Growth',
      description: 'Progressive curriculum that grows with your students from basics to advanced concepts.'
    }
  ];

  const getAdvantageIcon = (iconType) => {
    const icons = {
      pricing: (
        <svg className="advantage-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M12 6v12M9 9h6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      school: (
        <svg className="advantage-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2"/>
          <polyline points="9 22 9 12 15 12 15 22" strokeWidth="2"/>
        </svg>
      ),
      rocket: (
        <svg className="advantage-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeWidth="2"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeWidth="2"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeWidth="2"/>
        </svg>
      ),
      shield: (
        <svg className="advantage-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2"/>
        </svg>
      ),
      growth: (
        <svg className="advantage-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
          <polyline points="17 6 23 6 23 12" strokeWidth="2"/>
        </svg>
      )
    };
    return icons[iconType];
  };

  const pathways = [
    {
      title: 'Coding & Algorithms',
      ageGroup: 'Ages 8-16',
      skills: ['Python', 'JavaScript', 'Problem Solving', 'Logic'],
      project: 'Build interactive games and apps',
      color: 'from-blue-500 to-cyan-500',
      icon: 'code'
    },
    {
      title: 'Robotics Engineering',
      ageGroup: 'Ages 10-18',
      skills: ['Circuit Design', 'Sensors', 'Motors', 'Programming'],
      project: 'Create autonomous robots',
      color: 'from-purple-500 to-pink-500',
      icon: 'robot'
    },
    {
      title: 'Internet & Communication',
      ageGroup: 'Ages 9-15',
      skills: ['Web Development', 'Networking', 'Digital Safety', 'APIs'],
      project: 'Design personal websites',
      color: 'from-green-500 to-teal-500',
      icon: 'globe'
    },
    {
      title: 'AI & Application Development',
      ageGroup: 'Ages 12-18',
      skills: ['Machine Learning', 'Data Science', 'App Development', 'AI Ethics'],
      project: 'Train AI models for real problems',
      color: 'from-orange-500 to-red-500',
      icon: 'brain'
    }
  ];

  const getPathwayIcon = (iconType) => {
    const icons = {
      code: (
        <svg className="pathway-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="16 18 22 12 16 6" strokeWidth="2"/>
          <polyline points="8 6 2 12 8 18" strokeWidth="2"/>
        </svg>
      ),
      robot: (
        <svg className="pathway-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2"/>
          <circle cx="9" cy="16" r="1" fill="currentColor"/>
          <circle cx="15" cy="16" r="1" fill="currentColor"/>
          <path d="M12 2v3" strokeWidth="2"/>
          <circle cx="12" cy="7" r="1" fill="currentColor"/>
        </svg>
      ),
      globe: (
        <svg className="pathway-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
        </svg>
      ),
      brain: (
        <svg className="pathway-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3V9a3 3 0 0 0-3-3V5a3 3 0 0 0-3-3z" strokeWidth="2"/>
          <path d="M12 11v4" strokeWidth="2"/>
          <path d="M9 13h6" strokeWidth="2"/>
        </svg>
      )
    };
    return icons[iconType];
  };

  const experiences = [
    {
      title: 'Boot Camps',
      description: 'Intensive, project-based learning experiences during school breaks',
      icon: 'camp'
    },
    {
      title: 'Competitions',
      description: 'Regional and national coding and robotics competitions',
      icon: 'trophy'
    },
    {
      title: 'Community Projects',
      description: 'Real-world projects that make a difference in local communities',
      icon: 'community'
    }
  ];

  const getExperienceIcon = (iconType) => {
    const icons = {
      camp: (
        <svg className="experience-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 20l9-15 9 15H3z" strokeWidth="2"/>
          <path d="M12 5v15" strokeWidth="2"/>
        </svg>
      ),
      trophy: (
        <svg className="experience-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeWidth="2"/>
          <path d="M6 9v6a6 6 0 0 0 12 0V9" strokeWidth="2"/>
          <path d="M6 9h12" strokeWidth="2"/>
          <path d="M9 21h6" strokeWidth="2"/>
          <path d="M12 18v3" strokeWidth="2"/>
        </svg>
      ),
      community: (
        <svg className="experience-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" strokeWidth="2"/>
          <path d="M2 12h20" strokeWidth="2"/>
        </svg>
      )
    };
    return icons[iconType];
  };

  const audiences = [
    {
      title: 'Schools',
      description: 'Comprehensive STEM programs that integrate with your curriculum',
      icon: 'school-audience',
      cta: 'View School Programs'
    },
    {
      title: 'Parents',
      description: 'After-school and weekend programs to nurture your child\'s potential',
      icon: 'family',
      cta: 'Explore Parent Options'
    },
    {
      title: 'Organizations',
      description: 'Custom training programs for youth organizations and community centers',
      icon: 'organization',
      cta: 'Partner With Us'
    }
  ];

  const getAudienceIcon = (iconType) => {
    const icons = {
      'school-audience': (
        <svg className="audience-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2"/>
        </svg>
      ),
      family: (
        <svg className="audience-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
          <circle cx="8.5" cy="7" r="4" strokeWidth="2"/>
          <path d="M20 8v6M23 11h-6" strokeWidth="2"/>
        </svg>
      ),
      organization: (
        <svg className="audience-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" strokeWidth="2"/>
        </svg>
      )
    };
    return icons[iconType];
  };

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
            <Link to="/" className="logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeWidth="2"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeWidth="2"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeWidth="2"/>
              </svg>
              <span className="logo-text">Giftech</span>
            </Link>
            <nav className="nav-menu">
              <Link to="/programs">Programs</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
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
        {/* Background image overlay */}
        <div className="hero-bg-overlay"></div>
        {/* Floating gradient shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
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
              <svg className="play-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
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
                <div className="advantage-icon">{getAdvantageIcon(advantage.icon)}</div>
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
                  <div className="pathway-header-icon">{getPathwayIcon(pathway.icon)}</div>
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
                <div className="experience-icon">{getExperienceIcon(experience.icon)}</div>
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
                <div className="audience-icon">{getAudienceIcon(audience.icon)}</div>
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
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15 18 9 12 15 6" strokeWidth="2"/>
              </svg>
            </button>
            <div className="testimonial-content">
              <div className="testimonial-quote">"{testimonials[currentTestimonial].quote}"</div>
              <div className="testimonial-author">
                <strong>{testimonials[currentTestimonial].author}</strong>
                <span>{testimonials[currentTestimonial].school || testimonials[currentTestimonial].role || testimonials[currentTestimonial].achievement}</span>
              </div>
            </div>
            <button className="carousel-btn next" onClick={nextTestimonial}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 6 15 12 9 18" strokeWidth="2"/>
              </svg>
            </button>
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
        <div className="floating-shapes">
          <div className="shape shape-cta-1"></div>
          <div className="shape shape-cta-2"></div>
        </div>
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
                <li>Nairobi, Kenya</li>
                <li>+254 712 333 444</li>
                <li>info@giftech.com</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#facebook" className="social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#twitter" className="social-icon" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="#instagram" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
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