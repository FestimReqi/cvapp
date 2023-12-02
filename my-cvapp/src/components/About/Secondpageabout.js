import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as FigSettingAbout } from "../../doc/settingAbout.svg";
import "./Secondpageabout.css";

const Secondpageabout = () => {
  return (
    <>
      <Container style={{ background: "none" }} className="th-page  mt-5">
        <Row className=" mt-5 d-flex   d-flex justify-content-center ">
          <Col sm={20} md={20}>
            <h3>
              <b>Why Do You Require a Curriculum Vitae for Your Career?</b>
            </h3>
            <h3>
              Understanding the Necessity of a Curriculum Vitae in Your Career
            </h3>
          </Col>
          <Col sm={20} md={20}>
            <FigSettingAbout width="500"></FigSettingAbout>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Secondpageabout;
