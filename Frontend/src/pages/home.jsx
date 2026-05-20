import React from 'react';
import profilePic from '../assets/profile.png';
import '../styles/home.css';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
function Home() {
    return (
        <main>
            <section className="hero-section">
                <div className="hero-container">

                    <div className="hero-text">
                        <span className="badge">Software Engineer & Web Developer</span>
                        <h1>
                            Hi, I'm <span className="highlight">Patrick Gabriel Velasquez</span>
                        </h1>
                        <p>
                            An IT student specializing in Software Engineering with internship experience
                            in building responsive, user-friendly full-stack web applications.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-secondary">Contact Me</a>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <img src={profilePic} alt="Patrick Gabriel M. Velasquez" className="hero-profile-img" />
                        <div className="img-glow-effect"></div>
                    </div>

                </div>
            </section>

            <Skills />
            <Experience />
            <Projects />
        </main>
    );
}

export default Home;