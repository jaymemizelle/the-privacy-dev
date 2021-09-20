import React from "react";
import "./MiddlePane.css";
import EyeImage from "../../../../images/lock-ondata-SS-1920x1280.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function MiddlePane() {
  return (
    <section className="middlePane">
      <div className="text">
        <h2 className="sectionTitle">The Privacy Dev</h2>
        <p>
          The Privacy dev is dedicated to educating both developers and other
          online users what we can all to protect our privacy in today's
          ever-evolving digital world.
        </p>
      </div>
      {/* <div>
                <img className="eye" src={EyeImage} />
            </div> */}
    </section>
  );
}

export default MiddlePane;
