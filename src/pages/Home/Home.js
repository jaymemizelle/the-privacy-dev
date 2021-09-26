import React from "react";
import { Button, Container } from "react-bootstrap";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./Home.css";
import ThirdPane from "./Sections/ThirdPane/ThirdPane";
import SecondPane from "./Sections/SecondPane/SecondPane";
import {useHistory} from "react-router-dom";

function Home() {
  let history = useHistory();

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
            <Button variant="success" onClick={() => history.push('/learn')}>Find out More</Button>
          </div>
        </Container>
      </div>
      <SecondPane />
      <ThirdPane />
    </>
  );
}

export default Home;
