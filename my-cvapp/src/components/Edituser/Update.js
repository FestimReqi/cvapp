import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as LogoWeb } from "../../doc/logo-black.svg";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Updateuser = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Updateuser/${id}`)
      .then((result) => {
        console.log(result);

        // Check if the expected properties exist in the response data
        if (
          result.data &&
          result.data.name &&
          result.data.lastname &&
          result.data.email &&
          result.data.pwd
        ) {
          setName(result.data.name);
          setLastname(result.data.lastname);
          setEmail(result.data.email);
          setPwd(result.data.pwd);
        } else {
          console.log("Invalid data format in response");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
  const Updateuser = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/Signup" + id, {
        name,
        lastname,
        email,
        pwd,
      })
      .then((result) => {
        console.log(result);
        navigate("/Edituser");
      });
  };
  return (
    <>
      <Container>
        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Col
            sm={8}
            md={8}
            className="p-5 FormsColor"
            style={{ backgroundColor: "#FF6C22" }}
          >
            {/* onSubmit={handleSubmit} */}
            <form onSubmit={Updateuser}>
              <h3 style={{ textAlign: "center" }}>
                {" "}
                <LogoWeb width={20}></LogoWeb> Update user
              </h3>
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
                    value={name}
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
                    value={lastname}
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
                    placeholder="mail@email.com"
                    value={email}
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
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="********"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
              </div>

              <button
                style={{ backgroundColor: "#80B3FF", border: "none" }}
                type="submit"
                className="btn btn-primary"
              >
                Update user
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Updateuser;
