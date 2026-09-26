import React from 'react';
import '../styles/index.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';

const projectList = [
    {
        id: 1,
        title: 'CEIS Website with 360° Virtual Tour',
        year: '2025',
        description:
            'Full-stack web app for a college featuring an immersive, interactive 360° virtual campus tour that lets visitors explore the campus remotely in real time.',
        image: project1,
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
        id: 2,
        title: 'International Academy Manila Portal',
        year: '2026',
        description:
            'School portal serving students, faculty, and administrators — spearheaded the ReactJS frontend and assisted with PHP & PostgreSQL backend integration.',
        image: project2,
        tech: ['ReactJS', 'PHP', 'PostgreSQL', 'CSS'],
    },
    {
        id: 3,
        title: 'St. Anthony Mary Claret College Portal',
        year: '2026',
        description:
            'Dynamic, component-driven school portal built with ReactJS for the frontend, with backend optimization and data processing handled through PHP.',
        image: project3,
        tech: ['ReactJS', 'JavaScript', 'PHP', 'PostgreSQL'],
    },
    {
        id: 4,
        title: 'ADANP Web Platform',
        year: '2026',
        description:
            'Full-stack platform for the Association of Dermatology & Aesthetic Nurses of the Philippines, featuring Role-Based Access Control (RBAC) for secure multi-user management.',
        image: project4,
        tech: ['ReactJS', 'PHP', 'MySQL', 'RBAC'],
    },
    {
        id: 5,
        title: 'RZB Development Corp Website',
        year: '2026',
        description:
            'Professional corporate website with a clean, modern UI built in ReactJS, showcasing company services, projects, and a content management backend in PHP.',
        image: project5,
        tech: ['ReactJS', 'PHP', 'CSS', 'MySQL'],
    },
    {
        id: 6,
        title: 'AngelBang Bags Showcase & Inventory System',
        year: '2026',
        description:
            'Full-stack web application featuring an elegant product showcase storefront for AngelBang Bags coupled with a comprehensive real-time inventory management system.',
        image: project6,
        tech: ['ReactJS', 'CSS', 'PHP', 'MySQL'],
    },
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">
                    My <span className="section-title-accent">Projects</span>
                </h2>
                <p className="section-subtitle">A showcase of what I've built</p>

                <div className="projects-grid">
                    {projectList.map((project, index) => {
                        // Card 0 is featured. If remaining normal cards count is odd, feature the last card to keep the grid perfectly balanced without empty slots!
                        const isFeatured =
                            index === 0 ||
                            (index === projectList.length - 1 && (projectList.length - 1) % 2 !== 0);

                        return (
                            <div
                                className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}
                                key={project.id}
                            >
                                <div className="project-card-img-wrap">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-card-img"
                                    />
                                </div>
                                <div className="project-card-body">
                                    <div className="project-card-header">
                                        <h3 className="project-card-title">{project.title}</h3>
                                        <span className="project-year">{project.year}</span>
                                    </div>
                                    <p className="project-card-desc">{project.description}</p>
                                    <div className="project-tech-tags">
                                        {project.tech.map((t) => (
                                            <span className="project-tech-tag" key={t}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
