import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as PencilAbout } from "../../doc/pencilAbout.svg";

const Fivethaboutpage = () => {
  return (
    <>
      <Container style={{ background: "#cacaca" }}>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={10} md={5}>
            <h3>
              <b>
                Welcome to CV-bulder, your trusted partner in creating standout
                Curriculum Vitae (CVs) tailored to your unique career path
              </b>
            </h3>
          </Col>
          <Col sm={10} md={5}>
            <PencilAbout></PencilAbout>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Fivethaboutpage;
