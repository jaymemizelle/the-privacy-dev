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
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link>
              <Link className="link" to="/os">
                OS
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="link" to="/browsers">
               Web Browsers
              </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link className="link" to="/search-engines">
               Search Engines
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default MyNavbar;
