import react from "react";

export default function Navbar() {
    return (
        <nav>
            <div className="nav--web-logo">
                <img src="./images/troll-face.png" alt="troll-logo" className="nav--logo"></img>
                <h2>MemeGenerator</h2>
            </div>
            <h4>React Course - Project 3</h4>
        </nav>
    );
}