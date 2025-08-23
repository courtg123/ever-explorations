import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
                    
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Terms of Service</h1>
                    <p style={{ marginBottom: '40px', opacity: 0.8 }}>Last updated: January 2025</p>
                    
                    <div style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Agreement to Terms</h2>
                        <p style={{ marginBottom: '20px' }}>
                            By accessing or using Ever Explorations ("we", "our", or "us") and any of our services, 
                            you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part 
                            of these terms, then you may not access the Service.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Use License</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Permission is granted to temporarily download materials (information or software) on 
                            Ever Explorations for personal, non-commercial viewing only. This is the grant of a 
                            license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '30px' }}>
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or public display</li>
                            <li>Attempt to reverse engineer any software contained on Ever Explorations</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Disclaimer</h2>
                        <p style={{ marginBottom: '20px' }}>
                            The materials on Ever Explorations are provided on an 'as is' basis. Ever Explorations 
                            makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                            warranties including, without limitation, implied warranties or conditions of merchantability, 
                            fitness for a particular purpose, or non-infringement of intellectual property or other 
                            violation of rights.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            All projects and software presented are experimental in nature and are provided for 
                            educational and demonstration purposes only. Use at your own risk.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Limitations</h2>
                        <p style={{ marginBottom: '20px' }}>
                            In no event shall Ever Explorations or its suppliers be liable for any damages (including, 
                            without limitation, damages for loss of data or profit, or due to business interruption) 
                            arising out of the use or inability to use materials on Ever Explorations, even if 
                            Ever Explorations or an authorized representative has been notified orally or in writing 
                            of the possibility of such damage.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Beta Software</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Any software or applications offered through this site are in beta or experimental stages. 
                            They may contain bugs, errors, or other issues. By using any software from this site, you 
                            acknowledge that:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '30px' }}>
                            <li>The software is experimental and may not function as expected</li>
                            <li>You use the software at your own risk</li>
                            <li>We are not responsible for any data loss or damage</li>
                            <li>Features may change or be removed without notice</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>User Content</h2>
                        <p style={{ marginBottom: '20px' }}>
                            If you submit content, feedback, or suggestions through our contact forms or mailing list, 
                            you grant us the right to use this information to improve our services. We will not share 
                            your personal information with third parties.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Privacy</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Your use of our Service is also governed by our Privacy Policy. Please review our 
                            Privacy Policy, which also governs the Site and informs users of our data collection 
                            practices.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Intellectual Property</h2>
                        <p style={{ marginBottom: '20px' }}>
                            All content, features, and functionality on this site are owned by Ever Explorations, 
                            its licensors, or other providers of such material and are protected by copyright, 
                            trademark, and other intellectual property laws.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Termination</h2>
                        <p style={{ marginBottom: '20px' }}>
                            We may terminate or suspend your access immediately, without prior notice or liability, 
                            for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Changes to Terms</h2>
                        <p style={{ marginBottom: '20px' }}>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any 
                            time. If a revision is material, we will try to provide at least 30 days notice prior 
                            to any new terms taking effect.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>Contact Information</h2>
                        <p style={{ marginBottom: '40px' }}>
                            Questions about the Terms of Service should be sent to us through the contact form on 
                            our website.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                        <p style={{ margin: 0 }}>&copy; 2025 Ever Explorations. Built with curiosity.</p>
                        <div className="footer-links" style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                            <Link to="/">Home</Link>
                            <span style={{ margin: '0 15px', opacity: 0.5 }}>•</span>
                            <Link to="/privacy" style={{ opacity: 0.7 }}>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default TermsOfService;