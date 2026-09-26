import React from 'react';
import '../styles/index.css';

const skillCategories = [
    {
        icon: '💻',
        title: 'Programming & Markup',
        skills: ['Java', 'PHP', 'Laravel', 'JavaScript', 'HTML5', 'CSS3', 'ReactJS', 'SQL'],
    },
    {
        icon: '🗄️',
        title: 'Database Management',
        skills: ['MySQL', 'PostgreSQL'],
    },
    {
        icon: '🧪',
        title: 'Testing',
        skills: ['Functional Testing', 'Bug Identification & Tracking', 'Error Logging'],
    },
    {
        icon: '🔧',
        title: 'Version Control & Tools',
        skills: ['Git', 'GitHub', 'Visual Studio Code', 'Visual Studio', 'Sublime Text'],
    },
    {
        icon: '🎨',
        title: 'UI/UX & Design',
        skills: ['Figma', 'Canva'],
    },
    {
        icon: '☁️',
        title: 'Cloud Services',
        skills: ['DigitalOcean'],
    },
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">
                    My <span className="section-title-accent">Skills</span>
                </h2>
                <p className="section-subtitle">Technologies and tools I work with</p>

                <div className="skills-container">
                    {skillCategories.map((category) => (
                        <div className="skill-category" key={category.title}>
                            <span className="skill-category-icon">{category.icon}</span>
                            <h3>{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill) => (
                                    <span className="skill-tag" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
