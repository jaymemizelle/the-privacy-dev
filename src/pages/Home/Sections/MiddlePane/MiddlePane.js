import React from 'react';
import "./MiddlePane.css";
import EyeImage from "../../../../images/eye-ring.jpg";

function MiddlePane() {
    return (
        <section className="middlePane">
            <h2 className="sectionTitle">The Privacy Dev</h2>
            <div className="text">
            The Privacy dev is dedicated to educating both developers and other online users what we can all to protect our privacy in today's ever-evolving digital world.
            </div>
            <div>
                <img className="eye" src={EyeImage} />
            </div>
        </section>
    )
}

export default MiddlePane;
