import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    showStarfield?: boolean;
    backLink?: {
        to: string;
        text: string;
    };
}

const Footer: React.FC<FooterProps> = ({ showStarfield = false, backLink }) => {
    return (
        <footer className="main-footer">
            {showStarfield && (
                <div className="starfield-container">
                    <div className="starfield-static"></div>
                </div>
            )}
            <div className="footer-container">
                <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <p style={{ margin: 0 }}>&copy; 2025 Ever Explorations. Built with curiosity.</p>
                    <div className="footer-links" style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                        {backLink ? (
                            <>
                                <Link to={backLink.to}>{backLink.text}</Link>
                                <span style={{ margin: '0 15px', opacity: 0.5 }}>•</span>
                            </>
                        ) : (
                            <>
                                <Link to="/">Home</Link>
                                <span style={{ margin: '0 15px', opacity: 0.5 }}>•</span>
                            </>
                        )}
                        <Link to="/privacy" style={{ opacity: 0.7 }}>Privacy Policy</Link>
                        <span style={{ margin: '0 10px', opacity: 0.5 }}>•</span>
                        <Link to="/terms" style={{ opacity: 0.7 }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;