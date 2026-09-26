import React from 'react';
import '../styles/index.css';

const contactLinks = [
    {
        id: 'contact-email',
        icon: '✉️',
        label: 'Email',
        value: 'patvelasquez05@gmail.com',
        href: 'mailto:patvelasquez05@gmail.com',
    },
    {
        id: 'contact-phone',
        icon: '📱',
        label: 'Contact No.',
        value: '+63 947 265 0004',
        href: 'tel:+639472650004',
    },
    {
        id: 'contact-linkedin',
        icon: '💼',
        label: 'LinkedIn',
        value: 'linkedin.com/in/patrick-gabriel-velasquez-21607225b',
        href: 'https://www.linkedin.com/in/patrick-gabriel-velasquez-21607225b',
        target: '_blank',
    },
    {
        id: 'contact-github',
        icon: '🐙',
        label: 'GitHub',
        value: 'github.com/Razen-n',
        href: 'https://github.com/Razen-n',
        target: '_blank',
    },
];

function Contact({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="contact-modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Contact modal"
        >
            <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                <button
                    className="close-btn"
                    onClick={onClose}
                    aria-label="Close contact modal"
                    id="contact-modal-close-btn"
                >
                    &times;
                </button>

                <h2 className="contact-modal-title">Get In Touch</h2>
                <p className="contact-modal-subtitle">
                    Feel free to reach out — I'd love to connect!
                </p>

                <div className="contact-links-grid">
                    {contactLinks.map((link) => (
                        <a
                            key={link.id}
                            id={link.id}
                            href={link.href}
                            className="contact-link-row"
                            target={link.target || '_self'}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                        >
                            <span className="contact-link-icon">{link.icon}</span>
                            <div className="contact-link-info">
                                <div className="contact-link-label">{link.label}</div>
                                <div className="contact-link-value">{link.value}</div>
                            </div>
                            <span className="contact-link-arrow">→</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
