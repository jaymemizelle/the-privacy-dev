import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/lock-shield.png";
import "./MyNavbar.css";
import { Link } from "react-router-dom";

function MyNavbar({
  linkOneText,
  linkOnePath,
  linkTwoText,
  linkTwoPath,
  linkThreeText,
  linkThreePath,
  linkFourText,
  linkFourPath,
}) {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="align-top logo"
            alt="The Privacy Dev logo"
          />
          <Link className="link" to="/">
            <span className="brand">The Privacy Dev</span>
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link>
              <Link className="link" to={linkOnePath}>
                {linkOneText}
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="link" to={linkTwoPath}>
                {linkTwoText}
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="link" to={linkThreePath}>
                {linkThreeText}
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="link" to={linkFourPath}>
                {linkFourText}
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default MyNavbar;
