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
        return 'dark'; // default to dark mode
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
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <section className="hero-section">
                <div className="hero-container">

                    <div className="hero-text">
                        <span className="badge">Software Engineer | Web Developer | Manual QA Tester</span>
                        <h1>
                            Hi, I'm <span className="highlight">Patrick Gabriel Velasquez</span>
                        </h1>
                        <p>
                            An IT graduate specializing in Software Engineering with internship experience
                            in building responsive, user-friendly full-stack web applications.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#!" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="btn btn-secondary">Contact Me</a>
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