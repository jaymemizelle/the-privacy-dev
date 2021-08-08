import React from "react";
import  {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/lock-shield.png';
import './MyNavbar.css';

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
      </Navbar>
    </>
  );
}

export default MyNavbar;
