import React from 'react';
import '../styles/index.css';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>Programming & Markup Languages</h3>
                        <p>C++, C#, Java, Python, SQL, PHP, JavaScript, HTML, CSS, ReactJS</p>
                    </div>

                    <div className="skill-category">
                        <h3>Database Management</h3>
                        <p>MySQL, PostgreSQL</p>
                    </div>

                    <div className="skill-category">
                        <h3>Version Control & Tools</h3>
                        <p>GitHub, Visual Studio, Visual Studio Code, Antigravity</p>
                    </div>

                    <div className="skill-category">
                        <h3>UI/UX & Design Tools</h3>
                        <p>Figma, Canva</p>
                    </div>

                    <div className="skill-category">
                        <h3>Cloud Services</h3>
                        <p>Digital Ocean</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
