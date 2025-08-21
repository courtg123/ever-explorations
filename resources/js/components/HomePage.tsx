import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Project } from '../types';

const HomePage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <>
            {/* Starfield Background */}
            <div className="starfield-container">
                <div className="starfield-static"></div>
            </div>

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
                                    Ever e.1 - Professional code editor coming soon
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
                        <div className="hero-visual">
                            <img src="/images/explore.png" alt="Explorer Diagram" className="hero-image" />
                            <div className="hero-glow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="content-section">
                <div className="content-container">
                    <div className="section-header">
                        <h2 className="section-title">About This Space</h2>
                    </div>
                    <div className="message-grid">
                        <div className="message-card">
                            <h3>Welcome Explorer</h3>
                            <p>
                                Welcome to my digital workshop—a place where curiosity leads and perfection takes a backseat to discovery.
                                Ever Explorations is my personal playground for ideas that won't sit still.
                            </p>
                        </div>
                        <div className="message-card">
                            <h3>The Journey</h3>
                            <p>
                                Nothing here is ever truly finished, because the joy is in the journey of building, breaking, and rebuilding.
                                I'm a tinkerer at heart. I love getting lost in code, chasing down weird bugs, and staying up too late because 
                                I just need to see if something works.
                            </p>
                        </div>
                        <div className="message-card">
                            <h3>Beta Forever</h3>
                            <p>
                                Every project here is perpetually in beta, constantly evolving as I learn something new. That's the beauty of it. 
                                There's no pressure to ship a polished product, just the freedom to experiment and the excitement of sharing 
                                discoveries along the way.
                            </p>
                        </div>
                    </div>
                    <div className="signature-section">
                        <p className="signature-text">
                            Whether you're a fellow explorer or just curious about what I'm up to, I hope you'll find something here that 
                            sparks your own sense of wonder. The best discoveries often come from simply asking, "I wonder what would happen if..."
                        </p>
                        <p className="signature">
                            Ever exploring,<br />
                            <span className="signature-name">Courtney</span>
                        </p>
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
                                    <div className="project-card">
                                        <div className="project-screenshot">
                                            <img src="/images/screenshots/e1-infinite-canvas_cropped.png" alt="e.1 Infinite Canvas" />
                                        </div>
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
                            <form className="mailing-list-form" onSubmit={(e) => e.preventDefault()}>
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="email-input"
                                    required
                                />
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>
                        </div>
                        
                        <div className="contact-card glass-card">
                            <h3>Get in Touch</h3>
                            <p>Have questions or ideas? I'd love to hear from you.</p>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="form-input"
                                    required
                                />
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="form-input"
                                    required
                                />
                                <textarea 
                                    placeholder="Your message..." 
                                    className="form-textarea"
                                    rows={4}
                                    required
                                ></textarea>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <p>&copy; 2024 Ever Explorations. Built with curiosity.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;