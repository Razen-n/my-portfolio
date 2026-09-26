import React from 'react';
import '../styles/index.css';

function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">
                    Experience &amp; <span className="section-title-accent">Education</span>
                </h2>
                <p className="section-subtitle">My professional journey and academic background</p>

                <div className="timeline-container">
                    {/* WORK EXPERIENCE */}
                    <div className="timeline-box">
                        <div className="timeline-box-header">
                            <span className="timeline-box-icon">💼</span>
                            <h3>Professional Experience</h3>
                        </div>
                        <div className="timeline-item">
                            <h4>Web Developer Intern</h4>
                            <p className="timeline-org">International Academy Manila</p>
                            <p className="timeline-date">Feb 2026 – Apr 2026</p>
                            <ul>
                                <li>
                                    Assisted in frontend development for both International Academy Manila and
                                    St. Anthony Mary Claret College portals, serving hundreds of students
                                    and staff.
                                </li>
                                <li>
                                    Designed and built responsive, mobile-friendly web interfaces using
                                    ReactJS, HTML, CSS, and JavaScript.
                                </li>
                                <li>
                                    Assisted in backend development and database management with PHP
                                    and PostgreSQL, ensuring seamless data flow and integration.
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div className="timeline-box">
                        <div className="timeline-box-header">
                            <span className="timeline-box-icon">🎓</span>
                            <h3>Education</h3>
                        </div>
                        <div className="timeline-item">
                            <h4>Bachelor of Science in Information Technology</h4>
                            <p className="timeline-org">Major in Software Engineering</p>
                            <p className="timeline-org" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                                Trinity University of Asia, Quezon City
                            </p>
                            <p className="timeline-date">2022 – 2026</p>
                            <p className="honors"> Magna Cum Laude</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
