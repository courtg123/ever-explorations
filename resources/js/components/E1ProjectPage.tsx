import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/e1-parallax.css';
import EmailCaptureModal from './EmailCaptureModal';
import { 
    ArrowLeft, 
    Code2, 
    Layers, 
    FileText, 
    Monitor,
    Package,
    Cpu,
    Download,
    Apple,
    MonitorSmartphone,
    Terminal,
    Sparkles,
    Grid3x3,
    ClipboardPen,
    Globe,
    StickyNote,
    Mail,
    BarChart3,
    Workflow,
    Brain,
    Maximize2,
    Wand2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const E1ProjectPage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const screenshots = [
        {
            src: '/images/screenshots/e1-infinite-canvas_cropped.png',
            title: 'Infinite Canvas Workspace',
            description: 'Experience true spatial organization with unlimited workspaces. Pan and zoom through your projects, organizing work the way your mind naturally thinks. Each workspace persists exactly as you left it.'
        },
        {
            src: '/images/screenshots/e1-magic-windows_cropped.png',
            title: 'Magic Windows & Custom Widgets',
            description: 'Create mini-apps and custom tools that live right in your workspace. Build calculators, timers, data visualizers, or any utility you need. Magic windows are fully interactive components that enhance your workflow.'
        },
        {
            src: '/images/screenshots/e1-main-editor_cropped.png',
            title: 'Professional Code Editor',
            description: 'Full IDE capabilities powered by Monaco Editor. Features IntelliSense, syntax highlighting for 20+ languages, multi-cursor editing, and integrated terminal. All the power you expect from a professional development environment.'
        },
        {
            src: '/images/screenshots/e1-multi-tab_cropped.png',
            title: 'Multi-Tab Interface',
            description: 'Work with multiple files simultaneously in a familiar tabbed interface. Keep documentation, code, and references open side by side. Each tab maintains its own state and can be positioned anywhere on your infinite canvas.'
        }
    ];

    useEffect(() => {
        // Handle hash navigation only when there's a hash
        if (location.hash === '#download') {
            setTimeout(() => {
                const element = document.getElementById('download');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // If no hash, ensure we're at the top
            window.scrollTo(0, 0);
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Staged parallax effect for screenshot containers
            const stages = document.querySelectorAll('.screenshot-stage');
            stages.forEach((stage: Element) => {
                const container = stage.querySelector('.screenshot-parallax-container') as HTMLElement;
                const description = stage.querySelector('.screenshot-description') as HTMLElement;
                if (!container) return;
                
                const rect = stage.getBoundingClientRect();
                const stageCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = stageCenter - viewportCenter;
                
                // Remove all state classes
                container.classList.remove('in-focus', 'passed', 'coming');
                
                // Determine state based on position
                if (Math.abs(distance) < window.innerHeight * 0.3) {
                    // This screenshot is in focus
                    container.classList.add('in-focus');
                    if (description) {
                        description.classList.add('visible');
                    }
                } else if (distance < 0) {
                    // This screenshot has been passed
                    container.classList.add('passed');
                    if (description) {
                        description.classList.remove('visible');
                    }
                } else {
                    // This screenshot is coming up
                    container.classList.add('coming');
                    if (description) {
                        description.classList.remove('visible');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

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


    const features = [
        {
            icon: <Maximize2 className="feature-icon" />,
            title: 'Infinite Canvas',
            description: 'Spread your work across unlimited workspaces. Like having infinite tables where you can pick up, work on, and place back any piece of your project.'
        },
        {
            icon: <Wand2 className="feature-icon" />,
            title: 'Magic Windows',
            description: 'Create mini apps and widgets for your projects. Custom tools and utilities that live right in your workspace.'
        },
        {
            icon: <Layers className="feature-icon" />,
            title: 'Persistent Sessions',
            description: 'Switch contexts without losing anything. Every workspace maintains its state, letting you return exactly where you left off.'
        },
        {
            icon: <Code2 className="feature-icon" />,
            title: 'Advanced Code Editing',
            description: 'Full IDE capabilities with Monaco Editor at its core, featuring IntelliSense, syntax highlighting, and multi-file editing.'
        },
        {
            icon: <FileText className="feature-icon" />,
            title: 'Rich Document Support',
            description: 'View Markdown in rich text, render Mermaid diagrams, work with spreadsheets, all within your workspace.'
        },
        {
            icon: <ClipboardPen className="feature-icon" />,
            title: 'Whiteboards & Scratch Pads',
            description: 'Sketch ideas on whiteboards, jot quick notes in scratch pads. Perfect for brainstorming and capturing thoughts.'
        },
        {
            icon: <Globe className="feature-icon" />,
            title: 'Integrated Browser',
            description: 'Browse the web without leaving your workspace. Keep reference materials and documentation right alongside your work.'
        },
        {
            icon: <Brain className="feature-icon" />,
            title: 'AI Integration',
            description: 'Claude Code CLI integration with hooks and MCP. AI can see your open files, help create magic windows, and assist with your workflow.'
        },
        {
            icon: <Grid3x3 className="feature-icon" />,
            title: 'Spatial Organization',
            description: 'Pan and zoom through your infinite canvas. Organize work spatially, creating mental maps of your projects.'
        }
    ];

    return (
        <>
            {/* Header Navigation */}
            <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
                <nav className="nav-container">
                    <div className="nav-brand">
                        <Link to="/" className="brand-text" style={{ textDecoration: 'none' }}>Ever Explorations</Link>
                    </div>
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <a 
                                href="#features"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('features');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                Features
                            </a>
                        </li>
                        <li><Link to="/changelog">Changelog</Link></li>
                        <li>
                            <span className="nav-download-btn" style={{ cursor: 'default', opacity: 0.7 }}>
                                Coming Soon
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section project-hero">
                {/* Starfield Background */}
                <div className="starfield-container">
                    <div className="starfield-static"></div>
                </div>
                <div className="hero-container">
                    <Link to="/" className="back-button">
                        <ArrowLeft size={20} />
                        <span>Back to Explorations</span>
                    </Link>
                    
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">Ever e.1</h1>
                            <p className="hero-subtitle">
                                Your Infinite Digital Workspace
                            </p>
                            <div className="project-badges-row">
                                <span className="status-badge badge-beta">Beta</span>
                                <span className="status-badge badge-version">v1.0.0</span>
                            </div>
                            <p className="hero-description">
                                Ever e.1 is more than an IDE—it's an infinite canvas workspace where code, ideas, and creativity converge. 
                                Imagine having unlimited tables where you can spread out all your work, pick up any piece to focus on it, 
                                then place it back. With persistent sessions, magic windows, integrated AI, and spatial organization, 
                                e.1 transforms how you think about digital workspaces.
                            </p>
                            <div className="hero-actions">
                                <button 
                                    className="btn btn-primary btn-purple"
                                    disabled
                                    style={{ opacity: 0.7, cursor: 'not-allowed' }}
                                >
                                    <span style={{whiteSpace: 'nowrap'}}>Coming Soon</span>
                                </button>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <img src="/images/e1-planets.png" alt="Ever e.1" className="hero-image project-logo" />
                            <div className="hero-glow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots Section with Staged Parallax */}
            <section className="screenshots-parallax-section">
                <div className="parallax-content">
                    <h2>Reimagine Your Workflow</h2>
                    <p>Everything you need in one infinite, intelligent workspace</p>
                </div>
                
                <div className="screenshot-stage">
                    <div className="screenshot-parallax-container left coming">
                        <div className="screenshot-parallax">
                            <img src="/images/screenshots/e1-infinite-canvas_cropped.png" alt="e.1 Infinite Canvas" />
                        </div>
                        <div className="screenshot-description">
                            <h3>Infinite Canvas</h3>
                            <p>Spread your work across unlimited workspaces. Like having infinite tables where you can pick up, work on, and place back any piece of your project.</p>
                        </div>
                    </div>
                </div>
                
                <div className="screenshot-stage">
                    <div className="screenshot-parallax-container right coming">
                        <div className="screenshot-parallax">
                            <img src="/images/screenshots/e1-magic-windows_cropped.png" alt="e.1 Magic Windows" />
                        </div>
                        <div className="screenshot-description">
                            <h3>Magic Windows</h3>
                            <p>Create mini apps and widgets for your projects. Custom tools and utilities that live right in your workspace.</p>
                        </div>
                    </div>
                </div>
                
                <div className="screenshot-stage">
                    <div className="screenshot-parallax-container left coming">
                        <div className="screenshot-parallax">
                            <img src="/images/screenshots/e1-main-editor_cropped.png" alt="e.1 Advanced Code Editor" />
                        </div>
                        <div className="screenshot-description">
                            <h3>Advanced Code Editing</h3>
                            <p>Full IDE capabilities with Monaco Editor at its core, featuring IntelliSense, syntax highlighting, and multi-file editing.</p>
                        </div>
                    </div>
                </div>
                
                <div className="screenshot-stage">
                    <div className="screenshot-parallax-container right coming">
                        <div className="screenshot-parallax">
                            <img src="/images/screenshots/e1-multi-tab_cropped.png" alt="e.1 Multi-tab Interface" />
                        </div>
                        <div className="screenshot-description">
                            <h3>Persistent Sessions</h3>
                            <p>Switch contexts without losing anything. Every workspace maintains its state, letting you return exactly where you left off.</p>
                        </div>
                    </div>
                </div>
                
                <div className="screenshot-stage">
                    <div className="screenshot-parallax-container left coming">
                        <div className="screenshot-parallax">
                            <img src="/images/screenshots/e1-integrated-browser_cropped.png" alt="e.1 Integrated Browser" />
                        </div>
                        <div className="screenshot-description">
                            <h3>Integrated Browser</h3>
                            <p>Browse the web without leaving your workspace. Keep reference materials, documentation, and research right alongside your work.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Flowing List */}
            <section id="features" className="content-section">
                <div className="content-container">
                    <div className="section-header">
                        <h2 className="section-title">Core Features</h2>
                        <p className="section-subtitle">Powerful tools that transform how you work</p>
                    </div>
                    
                    <div className="features-flow" style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        padding: '40px 0'
                    }}>
                        {features.map((feature, index) => (
                            <div key={index} className="feature-row" style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                marginBottom: '50px',
                                padding: '0 20px',
                                opacity: '0',
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                            }}>
                                <div style={{
                                    flex: '0 0 60px',
                                    marginRight: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '60px',
                                    width: '60px',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(167, 139, 250, 0.1))',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    {React.cloneElement(feature.icon, { size: 28 })}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '10px',
                                        background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>{feature.title}</h3>
                                    <p style={{
                                        fontSize: '1.05rem',
                                        lineHeight: '1.7',
                                        color: 'rgba(255, 255, 255, 0.65)',
                                        margin: 0
                                    }}>{feature.description}</p>
                                    {index < features.length - 1 && (
                                        <div style={{
                                            height: '1px',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                                            marginTop: '40px'
                                        }}></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <style>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </section>

            {/* Use Cases Section */}
            <section className="content-section">
                <div className="content-container">
                    <div className="section-header">
                        <h2 className="section-title">Built for How You Think</h2>
                        <p className="section-subtitle">From coding to creativity, e.1 adapts to your workflow</p>
                    </div>
                    
                    <div className="use-cases-grid">
                        <div className="use-case-card glass-card">
                            <Workflow className="feature-icon" />
                            <h3>Development Projects</h3>
                            <p>Code editing with full IDE features, terminal access, and version control. Keep documentation, references, and browser tabs all in view.</p>
                        </div>
                        <div className="use-case-card glass-card">
                            <BarChart3 className="feature-icon" />
                            <h3>Research & Analysis</h3>
                            <p>Spreadsheets, markdown notes, and diagrams side by side. Perfect for data analysis, research projects, and documentation.</p>
                        </div>
                        <div className="use-case-card glass-card">
                            <Sparkles className="feature-icon" />
                            <h3>Creative Work</h3>
                            <p>Whiteboards for brainstorming, scratch pads for quick thoughts, and spatial organization for creative projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="content-section download-section">
                <div className="content-container">
                    <div className="section-header">
                        <h2 className="section-title">Download e.1</h2>
                        <p className="section-subtitle">Available for macOS with more platforms coming soon</p>
                    </div>
                    
                    <div className="download-grid">
                        <div className="download-card glass-card disabled">
                            <Apple className="platform-icon" size={48} />
                            <h3>macOS</h3>
                            <p className="version-info">Coming Soon</p>
                            <p className="requirements">Requires macOS 10.13 or later</p>
                            <button 
                                className="btn btn-secondary download-button"
                                disabled
                            >
                                Coming Soon
                            </button>
                            <Link 
                                to="/#contact"
                                className="btn btn-link"
                                style={{ 
                                    marginTop: '8px', 
                                    color: '#a78bfa', 
                                    fontSize: '0.9rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    display: 'inline-block'
                                }}
                            >
                                Get notified →
                            </Link>
                        </div>
                        
                        <div className="download-card glass-card disabled">
                            <Monitor className="platform-icon" size={48} />
                            <h3>Windows</h3>
                            <p className="version-info">Coming Soon</p>
                            <p className="requirements">Windows 10 or later</p>
                            <button className="btn btn-secondary download-button" disabled>
                                Coming Soon
                            </button>
                            <Link 
                                to="/#contact"
                                className="btn btn-link"
                                style={{ 
                                    marginTop: '8px', 
                                    color: '#a78bfa', 
                                    fontSize: '0.9rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    display: 'inline-block'
                                }}
                            >
                                Get notified →
                            </Link>
                        </div>
                        
                        <div className="download-card glass-card disabled">
                            <Terminal className="platform-icon" size={48} />
                            <h3>Linux</h3>
                            <p className="version-info">Coming Soon</p>
                            <p className="requirements">Ubuntu 20.04+ / Similar</p>
                            <button className="btn btn-secondary download-button" disabled>
                                Coming Soon
                            </button>
                            <Link 
                                to="/#contact"
                                className="btn btn-link"
                                style={{ 
                                    marginTop: '8px', 
                                    color: '#a78bfa', 
                                    fontSize: '0.9rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    display: 'inline-block'
                                }}
                            >
                                Get notified →
                            </Link>
                        </div>
                    </div>
                    
                    {/* Email Signup CTA */}
                    <div className="download-cta glass-card" style={{ 
                        marginTop: '3rem', 
                        padding: '2rem', 
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.05))'
                    }}>
                        <h3 style={{ marginBottom: '1rem' }}>Be the First to Know</h3>
                        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                            Join our mailing list to get notified when e.1 becomes available for your platform.
                            We'll also send you exclusive updates about new features and beta access.
                        </p>
                        <Link 
                            to="/#contact"
                            className="btn btn-primary"
                            style={{ 
                                background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
                                border: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                textDecoration: 'none'
                            }}
                        >
                            <Mail size={18} style={{ marginRight: '8px' }} />
                            Subscribe for Updates
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technical Specs Section */}
            <section className="content-section">
                <div className="content-container">
                    <div className="section-header">
                        <h2 className="section-title">Technical Specifications</h2>
                    </div>
                    
                    <div className="specs-card glass-card">
                        <div className="spec-row">
                            <span className="spec-label">
                                <Cpu size={18} />
                                Core Technologies
                            </span>
                            <span className="spec-value">Electron, React, Monaco Editor</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-label">
                                <Brain size={18} />
                                AI Integration
                            </span>
                            <span className="spec-value">Anthropic Claude, Claude Code CLI with MCP, Context-Aware Assistance</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-label">
                                <FileText size={18} />
                                Supported Formats
                            </span>
                            <span className="spec-value">Code (20+ languages), Markdown, Mermaid, Spreadsheets, Rich Text</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-label">
                                <MonitorSmartphone size={18} />
                                Status
                            </span>
                            <span className="spec-value">Beta - Actively developed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                {/* Subtle starfield for footer */}
                <div className="starfield-container">
                    <div className="starfield-static"></div>
                </div>
                <div className="footer-container">
                    <div className="footer-content">
                        <p>&copy; 2025 Ever Explorations. Built with curiosity.</p>
                        <div className="footer-links">
                            <Link to="/">&nbsp;&nbsp;Back to Home</Link>
                        </div>
                    </div>
                </div>
            </footer>

            <EmailCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName="Ever e.1"
                version="v1.0.0"
                downloadUrl="/downloads/ever-e1-v1.0.0.dmg"
            />
        </>
    );
};

export default E1ProjectPage;