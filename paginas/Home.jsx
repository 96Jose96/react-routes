import React from "react";
import { Link } from 'react-router-dom'

function Home() {
    return(
        <>
            <h1>Bienvenido a la HOME</h1>
            <ul>
                <li><Link to={'/Projects'}>Projects</Link></li>
                <li><Link to={'/Resume'}>Resume</Link></li>
            </ul>
        </>
    )
}

export default Home