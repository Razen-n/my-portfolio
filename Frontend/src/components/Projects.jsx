import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';


function Projects() {

    const projectList = [
        {
            id: 1,
            title: "CEIS Website with 360° Virtual Tour",
            year: "2025",
            description: "Developed a comprehensive full-stack web application for the College of Engineering and Information Sciences, integrating an immersive 360-degree virtual campus tour.",
            image: project1
        },
        {
            id: 2,
            title: "International Academy Manila Portal",
            year: "2026",
            description: "Contributed to the system to build the institution's school portal. Spearheaded the frontend development using ReactJS to ensure intuitive user interfaces, while assisting in backend logic and database connectivity using PHP.",
            image: project2
        },
        {
            id: 3,
            title: "Claret College School Portal",
            year: "2026",
            description: "Contributed to the system development of the Claret College school portal, specializing in creating dynamic frontend components using ReactJS and JavaScript. Also assisted in optimizing backend services and data processes utilizing PHP.",
            image: project3
        },
        {
            id: 4,
            title: "Assoc. of Dermatology and Aesthetic Nurses of the Phil.",
            year: "2026",
            description: "Developed frontend and backend systems using ReactJS and PHP, and successfully implemented Role-Based Access Control (RBAC) to manage secure, distinct permissions for multiple user types.",
            image: project4
        },
        {
            id: 5,
            title: "RZB Development Corp",
            year: "2026",
            description: "Developed dynamic frontend web components using ReactJS and assisted in backend implementation using PHP.",
            image: project5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectList.length);
    };



    // Auto-play effect
    useEffect(() => {
        const timer = setTimeout(() => {
            nextProject();
        }, 3000);


        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>

                <div className="slideshow-container">

                    <div className="project-card slide-active">
                        <img src={projectList[currentIndex].image} alt={projectList[currentIndex].title} className="project-img-slide" />
                        <div className="project-info">
                            <h3>{projectList[currentIndex].title} <span className="project-year">({projectList[currentIndex].year})</span></h3>
                            <p>{projectList[currentIndex].description}</p>
                        </div>
                    </div>
                </div>

                <div className="slideshow-dots">
                    {projectList.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
