import React from 'react';
import '../styles/index.css';

function Contact({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2 className="section-title" style={{ marginTop: 0 }}>Contact Me</h2>
                <div className="contact-container">
                    <div className="contact-card">
                        <h3>Email</h3>
                        <p><a href="mailto:patvelasquez05@gmail.com" className="contact-link">patvelasquez05@gmail.com</a></p>
                    </div>
                    <div className="contact-card">
                        <h3>Contact No.</h3>
                        <p className="contact-text">09472650004</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
