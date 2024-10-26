import React from "react";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Resume'}>Resume</Link></li>
            </ul>
        </>
    )
}

export default Projects