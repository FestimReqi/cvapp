import Card from "react-bootstrap/Card";
import festimimg from "../../doc/festim.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shpetimimg from "../../doc/shpetim.jpg";
import Container from "react-bootstrap/Container";
import "./Fivethpagehome.css";

const fivethpagehome = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 justify-content-md-between d-flex align-items-center">
          {/* card first */}
          <Col sm={4}>
            <Card className="cardModeFive" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Img
                  className="imageCircleFive paddingMode"
                  variant="top"
                  src={festimimg}
                />
                <Card.Title className="paddingMode titleFive">
                  Festim Reçi
                </Card.Title>
                <Card.Text className="paddingMode titleUni">
                  Industrial Engineering and Informatics - Software Engineer
                </Card.Text>
                <Card.Text className="paddingMode textAboutFestim">
                  I'm absolutely thrilled with this app - I only wish I had
                  discovered it earlier! The PDF export feature is a
                  game-changer, and the skills section on my resume is
                  fantastic. Kudos to the Visual CV team for creating such a
                  user-friendly and visually appealing app! 😊 You guys are
                  doing an amazing job!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            {/* capital text and row */}
            <div className="text_and_paragah mt-5">
              <h3>Effortless Resume Creator</h3>
              <p>
                Utilize the user-friendly resume builder to swiftly incorporate
                resume content, switch between templates, and personalize fonts.
                No need for downloads
              </p>
            </div>
          </Col>
        </Row>
        <Row className=" mt-5 justify-content-md-between d-flex align-items-center">
          {/* capital text and paragah */}
          <Col sm={4}>
            <div className="text_and_paragah  mt-5">
              <h3>Resume and CV Performance Insights</h3>
              <p>
                Exhausted from feeling invisible in the CV abyss? Our advanced
                CV tracking feature reveals when your CV has been viewed or
                downloaded, providing essential insights to help you manage your
                applications effectively and optimize your job search
              </p>
            </div>
          </Col>
          {/* second card */}
          <Col sm={4}>
            <Card className="cardModeFive" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Img
                  className="imageCircleFive paddingMode"
                  variant="top"
                  src={shpetimimg}
                />
                <Card.Title className="paddingMode titleFive">
                  Shpetim Hasallari
                </Card.Title>
                <Card.Text className="paddingMode titleUni">
                  Industrial Engineering and Informatics -Project Engineer
                </Card.Text>
                <Card.Text className="paddingMode textAboutFestim">
                  Absolutely incredible app. The templates make it a breeze to
                  create a sophisticated and imaginative resume. The support
                  team is exceptionally warm and helpful; I wholeheartedly
                  endorse it. If I could, I'd give it more than 5 stars—more
                  like a thousand!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default fivethpagehome;
