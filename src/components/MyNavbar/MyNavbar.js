import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/lock-shield.png";
import "./MyNavbar.css";
import { Link } from "react-router-dom";

function MyNavbar() {
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
          <span className="brand">The Privacy Dev</span>
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link className="right">
          <Link className="link" to="/">Home</Link>
        </Nav.Link>
        <Nav.Link className="right">
          <Link className="link" to="/about">About</Link>
        </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default MyNavbar;
