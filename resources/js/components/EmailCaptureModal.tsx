import React, { useState } from 'react';
import { X, Download, Mail, User } from 'lucide-react';
import axios from 'axios';

interface EmailCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    version: string;
    downloadUrl: string;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ 
    isOpen, 
    onClose, 
    productName, 
    version,
    downloadUrl 
}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [newsletter, setNewsletter] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Save email to database
            await axios.post('/api/email-subscribe', {
                email,
                name,
                download_product: productName,
                download_version: version,
                subscribed_to_newsletter: newsletter
            });

            // Trigger download
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${productName}-${version}.dmg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Close modal after successful submission
            setTimeout(() => {
                onClose();
                // Reset form
                setEmail('');
                setName('');
                setNewsletter(true);
            }, 1000);
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content email-capture-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="modal-header">
                    <div className="modal-icon">
                        <Download size={32} className="download-icon" />
                    </div>
                    <h2 className="modal-title">Almost There!</h2>
                    <p className="modal-subtitle">
                        Just one quick step before downloading {productName} {version}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="email-capture-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            <Mail size={16} />
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            <User size={16} />
                            Name (optional)
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={newsletter}
                                onChange={(e) => setNewsletter(e.target.checked)}
                                className="checkbox-input"
                            />
                            <span>Keep me updated about new features and releases</span>
                        </label>
                    </div>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="btn btn-primary submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>Processing...</>
                        ) : (
                            <>
                                <Download size={18} />
                                Start Download
                            </>
                        )}
                    </button>

                    <p className="privacy-note">
                        We respect your privacy. Your email will only be used for product updates if you opt in.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default EmailCaptureModal;