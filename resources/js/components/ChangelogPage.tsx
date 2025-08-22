import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
    ArrowLeft, 
    Sparkles, 
    Wrench, 
    Bug,
    Calendar,
    Tag
} from 'lucide-react';

interface ChangelogEntry {
    id: number;
    version: string;
    title: string;
    description: string;
    features: string[] | null;
    improvements: string[] | null;
    fixes: string[] | null;
    release_date: string;
    is_major: boolean;
}

const ChangelogPage: React.FC = () => {
    const [changelogs, setChangelogs] = useState<ChangelogEntry[]>([]);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Fetch changelogs from API
        axios.get('/api/changelogs')
            .then(response => {
                setChangelogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching changelogs:', error);
            });

        // Handle scroll for header
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        // Mouse move handler for comet trail
        const handleMouseMove = (e: MouseEvent) => {
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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

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
                        <Link to="/" className="brand-text" style={{ textDecoration: 'none' }}>Ever Explorations</Link>
                    </div>
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project/e1">e.1 Project</Link></li>
                        <li><span className="nav-download-btn" style={{ cursor: 'default', opacity: 0.7 }}>Coming Soon</span></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section project-hero">
                <div className="hero-container">
                    <Link to="/project/e1" className="back-button">
                        <ArrowLeft size={20} />
                        <span>Back to e.1</span>
                    </Link>
                    
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">Changelog</h1>
                            <p className="hero-subtitle">
                                Track the evolution of Ever e.1
                            </p>
                            <p className="hero-description">
                                Every update, improvement, and fix documented here. 
                                Watch as e.1 grows from beta to your indispensable workspace companion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Changelog Entries */}
            <section className="content-section">
                <div className="content-container">
                    {changelogs.map((entry) => (
                        <div key={entry.id} className="changelog-entry glass-card" style={{ marginBottom: '40px' }}>
                            <div className="changelog-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <h2 style={{ 
                                        fontFamily: 'Forum, serif', 
                                        fontSize: '32px',
                                        background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--cosmic-purple) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        margin: 0
                                    }}>
                                        v{entry.version}
                                    </h2>
                                    {entry.is_major && (
                                        <span className="status-badge badge-beta" style={{ background: 'var(--cosmic-purple)' }}>
                                            Major Release
                                        </span>
                                    )}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                                    <Calendar size={16} />
                                    <span style={{ fontFamily: 'Ubuntu Mono, monospace', fontSize: '14px' }}>
                                        {formatDate(entry.release_date)}
                                    </span>
                                </div>
                            </div>

                            <h3 style={{ 
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '20px',
                                color: 'var(--text-primary)',
                                marginBottom: '10px'
                            }}>
                                {entry.title}
                            </h3>
                            
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                marginBottom: '25px',
                                lineHeight: '1.6'
                            }}>
                                {entry.description}
                            </p>

                            {entry.features && entry.features.length > 0 && (
                                <div className="changelog-section" style={{ marginBottom: '20px' }}>
                                    <h4 style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '10px',
                                        color: 'var(--cosmic-purple)',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        marginBottom: '10px'
                                    }}>
                                        <Sparkles size={18} />
                                        New Features
                                    </h4>
                                    <ul style={{ 
                                        listStyle: 'none', 
                                        paddingLeft: '28px',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {entry.features.map((feature, index) => (
                                            <li key={index} style={{ 
                                                marginBottom: '8px',
                                                position: 'relative'
                                            }}>
                                                <span style={{ 
                                                    position: 'absolute', 
                                                    left: '-20px',
                                                    color: 'var(--cosmic-purple)'
                                                }}>•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {entry.improvements && entry.improvements.length > 0 && (
                                <div className="changelog-section" style={{ marginBottom: '20px' }}>
                                    <h4 style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '10px',
                                        color: '#88c5ff',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        marginBottom: '10px'
                                    }}>
                                        <Wrench size={18} />
                                        Improvements
                                    </h4>
                                    <ul style={{ 
                                        listStyle: 'none', 
                                        paddingLeft: '28px',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {entry.improvements.map((improvement, index) => (
                                            <li key={index} style={{ 
                                                marginBottom: '8px',
                                                position: 'relative'
                                            }}>
                                                <span style={{ 
                                                    position: 'absolute', 
                                                    left: '-20px',
                                                    color: '#88c5ff'
                                                }}>•</span>
                                                {improvement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {entry.fixes && entry.fixes.length > 0 && (
                                <div className="changelog-section">
                                    <h4 style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '10px',
                                        color: 'var(--nebula-pink)',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        marginBottom: '10px'
                                    }}>
                                        <Bug size={18} />
                                        Bug Fixes
                                    </h4>
                                    <ul style={{ 
                                        listStyle: 'none', 
                                        paddingLeft: '28px',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {entry.fixes.map((fix, index) => (
                                            <li key={index} style={{ 
                                                marginBottom: '8px',
                                                position: 'relative'
                                            }}>
                                                <span style={{ 
                                                    position: 'absolute', 
                                                    left: '-20px',
                                                    color: 'var(--nebula-pink)'
                                                }}>•</span>
                                                {fix}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <p>&copy; 2025 Ever Explorations. Built with curiosity.</p>
                        <div className="footer-links">
                            <Link to="/project/e1">&nbsp;&nbsp;Back to e.1</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ChangelogPage;