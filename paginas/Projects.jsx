import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects"

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Resume'}>Resume</Link></li>
            </ul>
           
                {projects.map((project) => (
                    <div>
                        <h2>{project.name}</h2>
                        <h3>ID Project {project.id}</h3>
                        <img src={project.image}/>
                        <p>{project.description}</p>
                        <p>{project.url}</p>
                    </div>
                ))}
            
        </>
    )
}

export default Projects