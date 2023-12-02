import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./fristpageSignup.css";
import { ReactComponent as LogoWeb } from "../../doc/logo-black.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FirstpageSignup = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Signup", { name, lastname, email, pwd })
      .then((result) => {
        console.log(result);
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p style={{ textAlign: "right" }}>
              Already have an account
              <a href="/Login"> Login</a>
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={5} md={5} className="p-5 FormsColor">
            <form onSubmit={handleSubmit}>
              <h3 style={{ textAlign: "center" }}>
                {" "}
                <LogoWeb width={20}></LogoWeb> Create Account
              </h3>
              <div className="row mb-3">
                <label
                  htmlFor="inputFirstName3"
                  className="col-sm-2 col-form-label"
                >
                  First Name
                </label>
                <div className="col">
                  {/* name */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <label
                  htmlFor="inputFirstName3"
                  className="col-sm-2 col-form-label"
                >
                  Last Name
                </label>
                <div className="col">
                  {/* lastname */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  {/* email */}
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="mail@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  {/* pwd */}
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="********"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Female
                    </label>
                  </div>
                </div>
              </fieldset> */}
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FirstpageSignup;
