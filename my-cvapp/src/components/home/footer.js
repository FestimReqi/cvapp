import Container from "react-bootstrap/Container";
import Logosvg from "../../doc/logo-black.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import facebook from "../../doc/facebook.svg";
import x from "../../doc/x.svg";
import github from "../../doc/github.svg";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const nonBorder = {
    border: "none",
  };
  return (
    <>
      <Container>
        <Row className="mt-5">
          {/* logo */}
          <Col sm={10} md={3}>
            <div className="logo">
              <img src={Logosvg} alt="logo" width={100} />
            </div>
          </Col>
          {/* list one */}
          <Col sm={10} md={3}>
            <ListGroup className="listGroupFooter">
              <ListGroup.Item style={nonBorder}>
                <b>Navbar</b>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <a to="/" href="/">
                  Home
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <a href="/About">About</a>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <a to="/Login" href="/Login">
                  Login
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <a to="/Signup" href="/Signup">
                  Sign up
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* list two */}
          <Col sm={10} md={3}>
            <ListGroup>
              <ListGroup.Item style={nonBorder}>
                <b>Free for Comunity</b>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <Link to="/" href="/">
                  Hani i Elezit, XK, 71510
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <Link to="/" href="/">
                  Republic of Kosova
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* list three */}
          <Col sm={10} md={2}>
            <ListGroup>
              <ListGroup.Item style={nonBorder}>
                <b>About Author</b>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <Link
                  to="https://festimreqi.github.io/festim/"
                  href="https://festimreqi.github.io/festim/"
                  target="_blank"
                >
                  Festim Reci
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <Link
                  to="https://festimreqi.github.io/festim/"
                  href="https://festimreqi.github.io/festim/"
                  target="_blank"
                >
                  Website Author
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="listHover" style={nonBorder}>
                <Link
                  to="https://www.buymeacoffee.com/festimreci"
                  href="https://www.buymeacoffee.com/festimreci"
                  target="_blank"
                >
                  Support Author
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={10} md={3}>
            <p className="forCursorHover">
              <b> Copyright &#169; 2023/24</b>
              <img src={Logosvg} alt="logo" width={30} />
            </p>
          </Col>
          <Col sm={10} md={2}>
            <Link to="/Termsofuse" style={{ textDecoration: "none" }}>
              <p className="forCursorHover">
                <a href="http">Terms of Use</a>
              </p>
            </Link>
          </Col>
          <Col sm={10} md={4}>
            <p className="forCursorHover">
              <a href="http">Privacy Policy</a>
            </p>
          </Col>
          <Col sm={10} md={3}>
            <a href="http" className="changeCursorHover me-1 ms-1">
              <img src={facebook} alt="" width={45} />
            </a>
            <a href="http" className="changeCursorHover me-1 ms-1">
              <img src={x} alt="" width={30} />
            </a>
            <a href="http" className="changeCursorHover me-1 ms-1">
              <img src={github} alt="" width={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
