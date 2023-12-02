import Figure from "react-bootstrap/Figure";
import { ReactComponent as FigureMode } from "../../doc/folderAbout.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Firstpageabout = () => {
  return (
    <>
      <div className="height_col_row  mt-5">
        <Container>
          <Row className=" p-5 d-flex justify-content-around  align-items-center height_col_row">
            <Col sm={10} md={7}>
              <h1 className="bigText">
                Exemplary Resumes for Any Career Path and Occupation
              </h1>
              <p className="middleText" style={{ color: "#676767" }}>
                <b>
                  Craft your resume swiftly with our curated selection of
                  expertly-crafted resume samples
                </b>
              </p>
            </Col>
            <Col sm={10} md={3}>
              <Figure>
                <FigureMode width={400} alt="171x180"></FigureMode>
              </Figure>
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
    </>
  );
};

export default Firstpageabout;
