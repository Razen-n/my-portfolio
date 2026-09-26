import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profile2.png';
import '../styles/index.css';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle';

function Index() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <main>
            {/* Navbar — ThemeToggle is INSIDE the navbar to avoid overlap */}
            <nav className="navbar" role="navigation" aria-label="Main navigation">
                <a href="#" className="navbar-logo">
                    Patrick<span>.</span>
                </a>
                <ul className="navbar-links">
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li>
                        <a
                            href="#!"
                            className="nav-cta"
                            id="navbar-contact-btn"
                            onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }}
                        >
                            Contact Me
                        </a>
                    </li>
                    <li>
                        <ThemeToggle theme={theme} onToggle={toggleTheme} />
                    </li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="hero-section" id="home">
                <div className="hero-container">

                    <div className="hero-text">
                        <span className="badge">Software Engineer · Web Developer · Tester</span>
                        <h1>
                            Hi, I'm <span className="highlight">Patrick Gabriel Velasquez</span>
                        </h1>
                        <p>
                            An IT graduate specializing in Software Engineering with hands-on
                            internship experience building responsive, user-friendly full-stack
                            web applications using ReactJS and PHP.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary" id="hero-view-work-btn">
                                View My Work ↓
                            </a>
                            <a
                                href="#!"
                                id="hero-contact-btn"
                                onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }}
                                className="btn btn-secondary"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <div className="hero-profile-img-wrapper">
                            <img src={profilePic} alt="Patrick Gabriel M. Velasquez" className="hero-profile-img" />
                        </div>
                        <div className="img-glow-effect"></div>
                    </div>

                </div>
            </section>

            <Skills />
            <Experience />
            <Projects />
            <Contact isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </main>
    );
}

export default Index;