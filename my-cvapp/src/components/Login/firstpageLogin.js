import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as LogoWeb } from "../../doc/logo-black.svg";
import { ReactComponent as MobileSVG } from "../../doc/mobile.svg";

const FirstPageLogin = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/Login", {
        email,
        pwd,
      });

      console.log(response);

      if (response.data === "Success") {
        history.push("/Cvapp");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p style={{ textAlign: "right" }}>
              Tashmë keni një llogari?
              <Link to="/Signup">Regjistrohu</Link>
            </p>
          </Col>
        </Row>

        <Row className="d-flex align-items-center">
          <Col>
            <MobileSVG width={500} />
          </Col>
          <Col sm={5} md={6}>
            <form className="FormsColor p-5" onSubmit={handleSubmit}>
              <h3 style={{ textAlign: "center" }}>
                <LogoWeb width={20} />
                Identifikohu
              </h3>

              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Fjalëkalimi
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FirstPageLogin;
