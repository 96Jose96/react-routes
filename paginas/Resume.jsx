import React from "react";
import { Link } from "react-router-dom";
import { studies, experiences } from "../data/resume";

function Resume() {
    return (
        <>
            <h1>Resume</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Projects'}>Projects</Link></li>
            </ul>
            <div>
                <h2>Estudios:</h2>
                {studies.map((study) => (
                    <div>
                        <h3>ID: {study.id}</h3>
                        <p>{study.title}</p>
                        <p>{study.institution}</p>
                        <p>{study.date}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Curriculum:</h2>
                {experiences.map((experience) => (
                    <div>
                        <h3>ID: {experience.id}</h3>
                        <p>{experience.title}</p>
                        <p>{experience.company}</p>
                        <p>{experience.date}</p>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default Resume