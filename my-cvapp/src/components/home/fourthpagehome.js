import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as ResumeBuilder } from "../../doc/ResumeBuilder.svg";
import { ReactComponent as ShareAndSave } from "../../doc/shareandsave.svg";
import { ReactComponent as HandleMultipleResumes } from "../../doc/HandleMultipleResumes.svg";
import { ReactComponent as MonitorYourProgress } from "../../doc/MonitorYourProgress.svg";
import { ReactComponent as ReceiveInput } from "../../doc/ReceiveInput.svg";
import { ReactComponent as DataandPrivacyManagement } from "../../doc/DataandPrivacyManagement.svg";
import "./fourthpagehome.css";

const Forthpagehome = () => {
  return (
    <>
      <Container className=" mt-5">
        <Row className="justify-content-md-center mt-5">
          <Col md={4} sm={20} className="text-center ">
            {/* 1 */}
            <ResumeBuilder></ResumeBuilder>
            <h4 className="fourth_bold">Resume Builder</h4>
            <p className="width_text">
              With our web-based resume builder, you have the flexibility to
              choose a template, import an existing resume, or create a new one
              from scratch in just a matter of minutes.
            </p>
          </Col>
          <Col sm={20} md={4} className="text-center  ">
            {/* 2 */}
            <ShareAndSave></ShareAndSave>
            <h4 className="fourth_bold">Share and Save</h4>
            <p className="width_text">
              Easily distribute your resume with a shareable link through email
              or social media, and it as a PDF for direct application to
              potential employers.
            </p>
          </Col>
          <Col sm={20} md={4} className="text-center  ">
            {/* 3 */}
            <HandleMultipleResumes></HandleMultipleResumes>
            <h4 className="fourth_bold">Handle Multiple Resumes</h4>
            <p className="width_text">
              In today's competitive job market, personalization is paramount.
              Effortlessly oversee various VisualCV versions, tailored for each
              specific application
            </p>
          </Col>
          <Col sm={20} md={4} className="text-center ">
            {/* 4 */}
            <MonitorYourProgress></MonitorYourProgress>
            <h4 className="fourth_bold">Monitor Your Progress</h4>
            <p className="width_text">
              Resume analytics will provide insights into when an employer views
              or downloads your resume, ensuring you stay informed and engaged
              in the hiring process
            </p>
          </Col>
          <Col sm={20} md={4} className="text-center ">
            {/* 5 */}
            <ReceiveInput></ReceiveInput>
            <h4 className="fourth_bold">Receive Input</h4>
            <p className="width_text">
              Obtain a complimentary resume assessment from our affiliates, or
              share it with your friends to gather feedback
            </p>
          </Col>
          <Col sm={20} md={4} className="text-center ">
            {/* 6 */}
            <DataandPrivacyManagement></DataandPrivacyManagement>
            <h4 className="fourth_bold">Data and Privacy Management</h4>
            <p className="width_text">
              In today's competitive job market, personalization is paramount.
              Effortlessly oversee various VisualCV versions, tailored for each
              specific application
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Forthpagehome;
