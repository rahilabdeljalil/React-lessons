
import React from "react";
import image from "../images/react-icon.png"
import "./home.css"

function Home(){

    return (
        <nav>
            <img  src={image} alt="React Icon"/> 
            <h1>Fun Facts about react</h1>
            <ul>
                <li>Created by Facebook engineer.</li>
                <li>Efficient web app updates.</li>
                <li>Uses virtual DOM.</li>
                <li>Supports web and mobile.</li>
                <li>Component-based architecture.</li>
            </ul>
        </nav>
    )
}

export default Home;