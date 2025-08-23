import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Header Navigation */}
            <header className="main-header">
                <nav className="nav-container">
                    <div className="nav-brand">
                        <Link to="/" className="brand-text" style={{ textDecoration: 'none' }}>Ever Explorations</Link>
                    </div>
                </nav>
            </header>

            {/* Content */}
            <section className="content-section" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                <div className="content-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <Link to="/" className="back-button" style={{ marginBottom: '30px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                    
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Privacy Policy</h1>
                    <p style={{ marginBottom: '40px', opacity: 0.8 }}>Last updated: January 2025</p>
                    
                    <div style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Overview</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Ever Explorations ("we", "our", or "us") operates the everexplorations.com website (the "Service"). 
                            This page informs you of our policies regarding the collection, use, and disclosure of personal data 
                            when you use our Service.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Information We Collect</h2>
                        <p style={{ marginBottom: '20px' }}>
                            We collect minimal information necessary to provide our Service:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '30px' }}>
                            <li>Email address (if you subscribe to our mailing list)</li>
                            <li>Name (if provided through contact forms)</li>
                            <li>Usage data (through Google Analytics)</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>How We Use Your Information</h2>
                        <p style={{ marginBottom: '20px' }}>
                            We use the collected data for various purposes:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '30px' }}>
                            <li>To provide and maintain our Service</li>
                            <li>To notify you about changes to our Service</li>
                            <li>To provide updates about new projects and features (if subscribed)</li>
                            <li>To monitor the usage of our Service</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Data Storage</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Your information is stored securely and we implement appropriate technical and organizational measures 
                            to protect your personal data. We do not sell, trade, or otherwise transfer your personal information 
                            to third parties.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Cookies</h2>
                        <p style={{ marginBottom: '20px' }}>
                            We use cookies and similar tracking technologies to track activity on our Service. You can instruct 
                            your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Third-Party Services</h2>
                        <p style={{ marginBottom: '20px' }}>
                            We use Google Analytics to analyze the use of our Service. Google Analytics collects information 
                            such as how often users visit the site and what pages they visit. This information is used to 
                            improve our Service.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Your Rights</h2>
                        <p style={{ marginBottom: '20px' }}>
                            You have the right to:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '30px' }}>
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Unsubscribe from our mailing list at any time</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Contact Us</h2>
                        <p style={{ marginBottom: '40px' }}>
                            If you have any questions about this Privacy Policy, please contact us through the contact form 
                            on our website.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <p>&copy; 2025 Ever Explorations. Built with curiosity.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default PrivacyPolicy;