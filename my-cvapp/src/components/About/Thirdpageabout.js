import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Thirdpageabout.css";
import { ReactComponent as Leftbutton } from "../../doc/leftbutton.svg";
import { ReactComponent as Rightbutton } from "../../doc/rightButton.svg";
import { useState } from "react";
import { ReactComponent as SvgShowFig } from "../../doc/FolderAboutFor.svg";

const Therdpageabout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "A well-crafted CV is your first opportunity to make a positive impression on potential employers or academic institutions. It showcases your qualifications and achievements, helping you stand out from the competition.",
    "Our website provides templates and guidelines that ensure your CV is organized and easy to read. It allows you to present your qualifications systematically, enhancing clarity and understanding.",
    "Crafting a CV from scratch can be time-consuming. Our platform simplifies the process, enabling you to create a polished CV within minutes, saving you valuable time for other career-related activities",
    "We offer a range of templates and formatting options, allowing you to tailor your CV to suit your specific career goals and the industry you are targeting",
    "Our user-friendly interface ensures that you can easily navigate and enter your information. No prior design or technical skills are required",
    "Your career evolves, and so should your CV. We make it easy to update and modify your CV whenever necessary to reflect your most recent achievements and experiences",
    "Our website is accessible from anywhere, providing an online solution for job seekers and students around the world",
  ];

  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const paragraphs = [
    "Professional Image",
    "Structured Information",
    "Time Efficiency",
    "Customization",
    "User-Friendly Interface",
    "Regular Updates",
    "Global Accessibility",
  ];

  const nextText = () => {
    setCurrentIndex((currentIndex + 1) % texts.length);
  };

  const previousText = () => {
    setCurrentIndex((currentIndex - 1 + texts.length) % texts.length);
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="textCenterThpage" sm={20} md={20}>
            <h3>
              <b>The Expert Resume Creator and Curriculum Vitae Builder</b>
            </h3>
          </Col>
          <Col sm={20} md={20}>
            <h4 className="h4textCenterThpage">
              <b>
                A Curriculum Vitae (CV) is a comprehensive document that
                outlines an individual's educational background, work
                experience, skills, and accomplishments. Our website, dedicated
                to CV creation, serves as an invaluable resource for
                professionals at all career stages. Here's why you need our
                platform:
              </b>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col sm={5} md={5} className=" mt-5 text_mode_change">
            <div className="positionButton">
              <h1 id="number" style={{ fontSize: 100 }}>
                {numbers[currentIndex]}
              </h1>
              <h3 id="text">{paragraphs[currentIndex]}</h3>
              <p id="paragrah">{texts[currentIndex]}</p>
              <div className="buttoAll">
                <button
                  type="button"
                  className="buttonLeft"
                  onClick={previousText}
                >
                  <Leftbutton />
                </button>
                <button
                  type="button"
                  className="buttonRight"
                  onClick={nextText}
                >
                  <Rightbutton />
                </button>
              </div>
            </div>
          </Col>
          <Col sm={5} md={5} className="mt-5 ">
            <SvgShowFig></SvgShowFig>
          </Col>
          <Col sm={20} md={20}>
            <h3>
              <b>
                Investing in a professional, well-structured CV is an essential
                step in advancing your career. Let our platform help you create
                a compelling and effective CV that opens doors to your desired
                opportunities.
              </b>
            </h3>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
};

export default Therdpageabout;
