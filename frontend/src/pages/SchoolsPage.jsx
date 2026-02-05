import React, { useState } from 'react';
import './SchoolsPage.css';

const SchoolsPage = () => {
  const [activeModel, setActiveModel] = useState('onsite');

  const workflowSteps = [
    {
      number: '01',
      title: 'Needs Assessment',
      description: 'We evaluate your school\'s current tech curriculum, infrastructure, and learning objectives.',
      icon: '📋'
    },
    {
      number: '02',
      title: 'Program Customization',
      description: 'Tailored curriculum aligned with your academic calendar and educational standards.',
      icon: '⚙️'
    },
    {
      number: '03',
      title: 'Teacher Training',
      description: 'Comprehensive training for your educators to deliver or support our programs effectively.',
      icon: '👨‍🏫'
    },
    {
      number: '04',
      title: 'Student Delivery',
      description: 'Engaging, project-based learning experiences that excite and empower students.',
      icon: '🎓'
    },
    {
      number: '05',
      title: 'Progress Reporting',
      description: 'Regular updates on student performance, skill development, and program impact.',
      icon: '📊'
    }
  ];

  const benefits = [
    {
      icon: '🔗',
      title: 'Curriculum Integration',
      description: 'Seamlessly aligns with national and international educational standards including CBC, IGCSE, and IB frameworks.'
    },
    {
      icon: '📈',
      title: 'Student Performance Tracking',
      description: 'Comprehensive dashboards showing individual and class progress, skill mastery, and project completion rates.'
    },
    {
      icon: '🎯',
      title: 'Flexible Delivery Models',
      description: 'Choose from on-site, hybrid, or fully online programs that fit your school\'s unique needs and resources.'
    },
    {
      icon: '💳',
      title: 'Affordable Term-Based Pricing',
      description: 'Transparent, predictable costs with flexible payment plans that work with your school\'s budget cycle.'
    }
  ];

  const deliveryModels = [
    {
      id: 'onsite',
      title: 'On-Site Training',
      icon: '🏫',
      description: 'Our instructors come to your school',
      features: [
        'Dedicated Giftech instructors on campus',
        'Full equipment and materials provided',
        'Integrated into school timetable',
        'Direct student interaction',
        'Ideal for schools with adequate facilities'
      ],
      pricing: 'From KES 80,000/term'
    },
    {
      id: 'hybrid',
      title: 'Hybrid Delivery',
      icon: '🔄',
      description: 'Best of both worlds',
      features: [
        'Combination of on-site and online sessions',
        'Flexible scheduling options',
        'Your teachers supported by Giftech experts',
        'Reduced on-site instructor time',
        'Cost-effective for growing programs'
      ],
      pricing: 'From KES 50,000/term'
    },
    {
      id: 'online',
      title: 'Fully Online Programs',
      icon: '💻',
      description: 'Complete digital learning experience',
      features: [
        'Live virtual classes with Giftech instructors',
        'Self-paced learning modules',
        'Digital project submissions and feedback',
        'Access to online learning platform',
        'Perfect for remote or distributed learning'
      ],
      pricing: 'From KES 30,000/term'
    }
  ];

  const successMetrics = [
    {
      metric: 'Skill Improvement',
      before: 35,
      after: 92,
      description: 'Average student coding proficiency score',
      color: '#3b82f6'
    },
    {
      metric: 'Engagement Rates',
      before: 68,
      after: 95,
      description: 'Active participation in tech programs',
      color: '#10b981'
    },
    {
      metric: 'Student Retention',
      before: 72,
      after: 96,
      description: 'Students continuing to next level',
      color: '#f59e0b'
    }
  ];

  const testimonials = [
    {
      quote: "Giftech transformed our technology curriculum. Students who once struggled with basic concepts are now building impressive projects.",
      author: "Dr. Margaret Wambui",
      position: "Principal, Nairobi International School",
      image: "👩‍💼"
    },
    {
      quote: "The teacher training program was exceptional. Our staff now confidently supports students in coding and robotics classes.",
      author: "James Ochieng",
      position: "ICT Coordinator, Strathmore School",
      image: "👨‍💼"
    }
  ];

  return (
    <div className="schools-page">
      {/* Navigation Header */}
      <header className="schools-header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <span className="logo-icon">🚀</span>
              <span>Giftech</span>
            </div>
            <nav className="nav-menu">
              <a href="/">Home</a>
              <a href="/schools" className="active">Schools</a>
              <a href="/parents">Parents</a>
              <a href="#about">About</a>
            </nav>
            <div className="nav-actions">
              <button className="btn-secondary">Login</button>
              <button className="btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1 - Institutional Hero */}
      <section className="institutional-hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <div className="hero-badge">FOR SCHOOLS & ORGANIZATIONS</div>
              <h1 className="hero-title">Future-Proof Your School's Curriculum</h1>
              <p className="hero-subtitle">
                Curriculum-aligned technology education programs that prepare students for the digital economy. 
                Trusted by 50+ schools across Kenya and beyond.
              </p>
              <div className="hero-ctas">
                <button className="btn-hero-primary">Request School Proposal</button>
                <button className="btn-hero-secondary">Schedule a Call</button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Partner Schools</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">3,000+</span>
                  <span className="stat-label">Students Trained</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Satisfaction Rate</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-card card-1">
                <div className="card-icon">👨‍💻</div>
                <div className="card-text">
                  <div className="card-label">Live Coding Session</div>
                  <div className="card-value">24 students active</div>
                </div>
              </div>
              <div className="visual-card card-2">
                <div className="card-icon">🤖</div>
                <div className="card-text">
                  <div className="card-label">Robotics Lab</div>
                  <div className="card-value">12 projects in progress</div>
                </div>
              </div>
              <div className="visual-card card-3">
                <div className="card-icon">📊</div>
                <div className="card-text">
                  <div className="card-label">Performance Analytics</div>
                  <div className="card-value">Real-time tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - How Giftech Works */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Giftech Works</h2>
            <p className="section-subtitle">
              A proven 5-step process to transform your technology education program
            </p>
          </div>
          <div className="workflow-timeline">
            {workflowSteps.map((step, index) => (
              <div key={index} className="workflow-step">
                <div className="step-connector">
                  {index < workflowSteps.length - 1 && <div className="connector-line"></div>}
                </div>
                <div className="step-content">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Program Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Program Benefits</h2>
            <p className="section-subtitle">
              Everything your school needs for successful technology education
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Implementation Models */}
      <section className="delivery-models-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Implementation Models</h2>
            <p className="section-subtitle">
              Choose the delivery model that works best for your school
            </p>
          </div>
          <div className="model-selector">
            {deliveryModels.map((model) => (
              <button
                key={model.id}
                className={`model-tab ${activeModel === model.id ? 'active' : ''}`}
                onClick={() => setActiveModel(model.id)}
              >
                <span className="model-icon">{model.icon}</span>
                <span>{model.title}</span>
              </button>
            ))}
          </div>
          <div className="model-details">
            {deliveryModels.map((model) => (
              <div
                key={model.id}
                className={`model-content ${activeModel === model.id ? 'active' : ''}`}
              >
                <div className="model-info">
                  <div className="model-header">
                    <div className="model-icon-large">{model.icon}</div>
                    <div>
                      <h3 className="model-title">{model.title}</h3>
                      <p className="model-description">{model.description}</p>
                    </div>
                  </div>
                  <div className="model-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {model.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="model-pricing">
                    <span className="pricing-label">Starting at</span>
                    <span className="pricing-value">{model.pricing}</span>
                  </div>
                  <button className="btn-model-select">Select This Model</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Success Metrics */}
      <section className="metrics-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Proven Results</h2>
            <p className="section-subtitle">
              Real data from schools implementing Giftech programs
            </p>
          </div>
          <div className="metrics-grid">
            {successMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <h3 className="metric-title">{metric.metric}</h3>
                <p className="metric-description">{metric.description}</p>
                <div className="metric-bars">
                  <div className="metric-bar">
                    <div className="bar-label">
                      <span>Before Giftech</span>
                      <span className="bar-value">{metric.before}%</span>
                    </div>
                    <div className="bar-container">
                      <div
                        className="bar-fill before"
                        style={{ width: `${metric.before}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="metric-bar">
                    <div className="bar-label">
                      <span>After Giftech</span>
                      <span className="bar-value">{metric.after}%</span>
                    </div>
                    <div className="bar-container">
                      <div
                        className="bar-fill after"
                        style={{
                          width: `${metric.after}%`,
                          backgroundColor: metric.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="metric-improvement">
                  <span className="improvement-badge">
                    +{metric.after - metric.before}% Improvement
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Schools Are Saying</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote-mark">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-image">{testimonial.image}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-position">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Large CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your School's Tech Education?</h2>
            <p className="cta-subtitle">
              Join 50+ forward-thinking schools preparing students for the digital future
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Free needs assessment</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Custom proposal within 48 hours</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Flexible payment terms</span>
              </div>
            </div>
            <button className="btn-cta-large">Book Institutional Demo</button>
            <p className="cta-note">
              Or call us directly at <a href="tel:+254700000000">+254 700 000 000</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <span className="logo-icon">🚀</span>
                <span>Giftech</span>
              </div>
              <p className="footer-description">
                Empowering the next generation with technology education
              </p>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/schools">Schools</a></li>
                <li><a href="/parents">Parents</a></li>
                <li><a href="#about">About Us</a></li>
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

export default SchoolsPage;