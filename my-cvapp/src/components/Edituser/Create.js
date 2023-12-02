import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { ReactComponent as LogoWeb } from "../../doc/logo-black.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { name, lastname, email, pwd });

    axios
      .post("http://localhost:3001/Signup", { name, lastname, email, pwd })
      .then((result) => {
        console.log(result);
        navigate("/Edituser");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Col
            sm={8}
            md={8}
            className="p-5 FormsColor"
            style={{ backgroundColor: "#83A2FF" }}
          >
            {/* onSubmit={handleSubmit} */}
            <form onSubmit={Submit}>
              <h3 style={{ textAlign: "center" }}> Add new user register</h3>
              <div className="row mb-3">
                <label
                  htmlFor="inputFirstName3"
                  className="col-sm-2 col-form-label"
                  style={{ fontSize: 20 }}
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
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <label
                  htmlFor="inputFirstName3"
                  className="col-sm-2 col-form-label"
                  style={{ fontSize: 20 }}
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
                    required
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                  style={{ fontSize: 20 }}
                >
                  Email
                </label>
                <div className="col-sm-10">
                  {/* email */}
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    required
                    placeholder="mail@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                  style={{ fontSize: 20 }}
                >
                  Password
                </label>
                <div className="col-sm-10">
                  {/* pwd */}
                  <input
                    type="password"
                    className="form-control"
                    required
                    id="inputPassword3"
                    placeholder="********"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Add new user
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Createuser;
