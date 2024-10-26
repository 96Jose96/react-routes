import React from "react";
import { Link } from "react-router-dom";

function Resume() {
    return (
        <>
            <h1>Resume</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Projects'}>Projects</Link></li>
            </ul>
        </>
    )
}

export default Resume