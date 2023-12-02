// import { ReactComponent as Logo } from "../../doc/logo-black.svg";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ReactComponent as LogoWeb } from "../../doc/logo-black.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="brake-line">
        <Container>
          <Navbar.Brand href="#home" alt="logo">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <LogoWeb width="25" alt="logo"></LogoWeb>
              CV-Write
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Button href="/" className="button1" variant="outline-dark">
                  Home
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button
                  href="/About"
                  variant="outline-dark"
                  className="button1"
                >
                  About
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button
                  href="/Login"
                  className="button1"
                  variant="outline-dark"
                >
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button
                  href="/Signup"
                  className="button1"
                  variant="outline-primary"
                >
                  Sign up
                </Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
