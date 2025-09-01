import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Project } from '../types';
import Footer from './Footer';

const HomePage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [scrolled, setScrolled] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [contactSubmitting, setContactSubmitting] = useState(false);
    const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
    const [contactMessage, setContactMessage] = useState('');
    const [newsletterMessage, setNewsletterMessage] = useState('');

    useEffect(() => {
        // Fetch projects from API
        axios.get('/api/projects')
            .then(response => {
                // Ensure we have an array
                const projectsData = Array.isArray(response.data) ? response.data : [];
                setProjects(projectsData);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setProjects([]); // Set empty array on error
            });

        // Handle scroll for header
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        // Mouse move handler for comet trail
        const handleMouseMove = (e: MouseEvent) => {
            // Create comet trail
            if (Math.random() > 0.8) {
                const trail = document.createElement('div');
                trail.className = 'comet-trail';
                trail.style.left = e.clientX + 'px';
                trail.style.top = e.clientY + 'px';
                document.body.appendChild(trail);
                
                setTimeout(() => trail.remove(), 1000);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Create random sparkles
        const createSparkle = () => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
            document.querySelector('.starfield-container')?.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 4000);
        };

        const sparkleInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                createSparkle();
            }
        }, 500);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousemove', handleMouseMove);
            clearInterval(sparkleInterval);
        };
    }, []);

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setContactSubmitting(true);
        setContactMessage('');
        
        try {
            const response = await axios.post('/api/contact', contactForm);
            if (response.data.success) {
                setContactMessage('Thank you! Your message has been sent.');
                setContactForm({ name: '', email: '', message: '' });
            }
        } catch (error) {
            setContactMessage('Sorry, there was an error. Please try again.');
        } finally {
            setContactSubmitting(false);
        }
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setNewsletterSubmitting(true);
        setNewsletterMessage('');
        
        try {
            const response = await axios.post('/api/email-subscribe', { 
                email: newsletterEmail,
                subscribed_to_newsletter: true
            });
            if (response.data.success) {
                setNewsletterMessage('Thank you for subscribing!');
                setNewsletterEmail('');
            }
        } catch (error) {
            setNewsletterMessage('Sorry, there was an error. Please try again.');
        } finally {
            setNewsletterSubmitting(false);
        }
    };

    return (
        <>
            {/* Header Navigation */}
            <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
                <nav className="nav-container">
                    <div className="nav-brand">
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="brand-text" 
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                            Ever Explorations
                        </a>
                    </div>
                    <ul className="nav-menu">
                        <li>
                            <a 
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('projects');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('about');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                Contact
                            </a>
                        </li>
                        <li><span className="nav-download-btn" style={{ cursor: 'default', opacity: 0.7 }}>Coming Soon</span></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                {/* Starfield Background */}
                <div className="starfield-container">
                    <div className="starfield-static"></div>
                </div>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Ever Explorations
                            </h1>
                            <p className="hero-subtitle">
                                Digital Workshop & Creative Playground
                            </p>
                            <Link to="/project/e1" className="hero-announcement" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className="announcement-badge">NEW</span>
                                <p className="announcement-text">
                                    Ever e.1 - A new digital workspace app coming soon
                                </p>
                            </Link>
                            <div className="hero-actions">
                                <button className="btn btn-primary" disabled style={{ opacity: 0.7, cursor: 'not-allowed' }}>
                                    Coming Soon
                                </button>
                                <button 
                                    onClick={() => {
                                        const element = document.getElementById('projects');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                    className="btn btn-secondary"
                                >
                                    View All Projects
                                </button>
                            </div>
                        </div>
                        <div className="hero-visual" style={{ maxWidth: '350px', margin: '0 auto' }}>
                            <img src="/images/explore.png" alt="Explorer Diagram" className="hero-image" />
                            <div className="hero-glow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Letter Style */}
            <section id="about" className="content-section">
                <div className="content-container">
                    <div className="letter-container" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '60px 50px',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 20px 80px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-100px',
                            right: '-100px',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent)',
                            borderRadius: '50%',
                            filter: 'blur(60px)'
                        }}></div>
                        <h2 className="section-title" style={{
                            fontSize: '2.5rem',
                            marginBottom: '40px',
                            textAlign: 'left',
                            fontFamily: 'Georgia, serif',
                            fontWeight: '400',
                            letterSpacing: '-0.5px'
                        }}>Fellow Explorer,</h2>
                        
                        <div className="letter-body" style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.8',
                            color: 'rgba(255, 255, 255, 0.85)',
                            fontFamily: 'Georgia, serif'
                        }}>
                            <p style={{ marginBottom: '25px' }}>
                                Welcome to my digital workshop, a place where curiosity leads. 
                                Ever Explorations is my personal playground for ideas that won't sit still.
                            </p>
                            
                            <p style={{ marginBottom: '25px' }}>
                                Nothing here is ever truly finished, because the joy is in the journey of building, breaking, and rebuilding. 
                                I'm a tinkerer at heart, I love to explore and experiment, and that's what this space is for.
                            </p>
                            
                            <p style={{ marginBottom: '25px' }}>
                                Every project here is perpetually in beta, constantly evolving as I learn something new. 
                                Enjoying some of the freedom to experiment and the excitement of sharing 
                                discoveries along the way.
                            </p>
                            
                            <p style={{ marginBottom: '40px' }}>
                                Whether you're a fellow explorer or just curious about what I'm up to, I hope you'll find something here that 
                                peaks your interest.
                            </p>
                            
                            <div className="signature" style={{
                                marginTop: '50px',
                                textAlign: 'right',
                                fontStyle: 'italic',
                                fontSize: '1.1rem',
                                color: 'rgba(255, 255, 255, 0.9)'
                            }}>
                                <p style={{ marginBottom: '10px' }}>Ever exploring,</p>
                                <p className="signature-name" style={{
                                    fontSize: '1.4rem',
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: '500',
                                    color: 'rgba(255, 255, 255, 0.9)'
                                }}>Courtney</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="content-section projects-section">
                <div className="content-container">
                    <div className="section-header">
                        <h2 className="section-title">Active Experiments</h2>
                        <p className="section-subtitle">Current projects and explorations</p>
                    </div>
                    
                    {projects.length > 0 ? (
                        <div className="projects-grid">
                            {projects.map(project => (
                                <Link to="/project/e1" key={project.id} className="project-card-link">
                                    <div className="project-card project-card-horizontal">
                                        <div className="project-screenshot">
                                            <img src="/images/screenshots/e1-main.png" alt="Ever e.1" />
                                        </div>
                                        <div className="project-card-content">
                                            <div className="project-card-header">
                                                <h3 className="project-name">{project.name}</h3>
                                                <span className={`project-badge badge-${project.status}`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <p className="project-description">{project.description}</p>
                                            <div className="project-footer">
                                                <span className="project-link">View Project →</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <p>// New experiments loading...</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact & Mailing List Section */}
            <section id="contact" className="contact-section">
                <div className="content-container">
                    <div className="section-header">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-subtitle">Stay updated or reach out with your ideas</p>
                    </div>
                    <div className="contact-grid">
                        <div className="mailing-list-card glass-card">
                            <h3>Stay Updated</h3>
                            <p>Join the mailing list to get updates on new experiments and features.</p>
                            <form className="mailing-list-form" onSubmit={handleNewsletterSubmit}>
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="email-input"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    required
                                    disabled={newsletterSubmitting}
                                />
                                <button type="submit" className="btn btn-primary" disabled={newsletterSubmitting}>
                                    {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                            {newsletterMessage && (
                                <p style={{ marginTop: '10px', color: newsletterMessage.includes('Thank') ? '#10b981' : '#ef4444', fontSize: '0.9rem' }}>
                                    {newsletterMessage}
                                </p>
                            )}
                        </div>
                        
                        <div className="contact-card glass-card">
                            <h3>Get in Touch</h3>
                            <p>Have questions or ideas? I'd love to hear from you.</p>
                            <form className="contact-form" onSubmit={handleContactSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="form-input"
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                                    required
                                    disabled={contactSubmitting}
                                />
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="form-input"
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                                    required
                                    disabled={contactSubmitting}
                                />
                                <textarea 
                                    placeholder="Your message..." 
                                    className="form-textarea"
                                    rows={4}
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                                    required
                                    disabled={contactSubmitting}
                                ></textarea>
                                <button type="submit" className="btn btn-primary" disabled={contactSubmitting}>
                                    {contactSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                            {contactMessage && (
                                <p style={{ marginTop: '10px', color: contactMessage.includes('Thank') ? '#10b981' : '#ef4444', fontSize: '0.9rem' }}>
                                    {contactMessage}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer showStarfield={true} />
        </>
    );
};

export default HomePage;