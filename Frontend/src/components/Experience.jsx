import React from 'react';
import '../styles/home.css';

function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">Experience & Education</h2>

                <div className="timeline-container">
                    {/* WORK EXPERIENCE */}
                    <div className="timeline-box">
                        <h3>Work Experience</h3>
                        <div className="timeline-item">
                            <h4>Web Developer Intern</h4>
                            <p className="timeline-org">International Academy Manila</p>
                            <p className="timeline-date">Feb 2026 - Apr 2026</p>
                            <ul>
                                <li>Contributed to system development initiatives for both International Academy Manila and St. Anthony Mary Claret College.</li>
                                <li>Frontend development, designing and building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and ReactJS.</li>
                                <li>Assisted in backend development and database management utilizing PHP and PostgreSQL to ensure seamless data integration.</li>
                            </ul>
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div className="timeline-box">
                        <h3>Education</h3>
                        <div className="timeline-item">
                            <h4>Bachelor of Science in Information Technology - Software Engineering</h4>
                            <p className="timeline-org">Trinity University of Asia, Quezon City</p>
                            <p className="timeline-date">2022 - 2026</p>
                            {/*<p className="honors">Magna Cum Laude</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
