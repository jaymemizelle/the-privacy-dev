import React from "react";
import { Button, Container } from "react-bootstrap";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./Home.css";
import DuckDuckGoSection from "./Sections/DuckDuckGoSection/DuckDuckGoSection";
import TorSection from "./Sections/TorSection/TorSection";
import Eye from "../../images/eye-ring.jpg";
import MiddlePane from "./Sections/MiddlePane/MiddlePane";

function Home() {
  return (
    <>
      <div className="Home">
          <MyNavbar
            linkOneText="Home"
            linkOnePath="/"
            linkTwoText="About"
            linkTwoPath="/about"
            linkThreeText="Learn"
            linkThreePath="/learn"
          />
        <Container className="heroContainer">
          <div className="heroText">
            <h1>
              {" "}
              Privacy is not a Privelage.
              <br />
              It is a civil human right.
            </h1>
            <Button variant="success">Find out More</Button>
          </div>
        </Container>
      </div>
      <MiddlePane />
      {/* <TorSection /> */}
      {/* <DuckDuckGoSection /> */}
    </>
  );
}

export default Home;
