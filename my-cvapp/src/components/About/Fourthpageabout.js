import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Fourthpageabout.css";

const Fourthaboutpage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <h3 className="mt-2" style={{ textAlign: "center" }}>
              <b>
                Here are some brief points on why individuals in various
                professions might find a Curriculum Vitae (CV) essential
              </b>
            </h3>
            <h5
              className="mt-2"
              style={{ color: "#676767", textAlign: "center" }}
            >
              <b>
                A well-crafted CV is a versatile tool for professionals across
                various industries, helping them advance in their careers,
                secure desirable positions, and communicate their expertise
                effectively.
              </b>
            </h5>
          </Col>
        </Row>
        {/* start 10 professions */}
        <Row className="professionEditStyle  d-flex justify-content-center">
          {/* 1 */}
          <Col sm={3} md={5}>
            <h4>Academics and Researchers</h4>
            <ul>
              <li>
                Document their educational background, research work, and
                publications.
              </li>
              <li>Highlight their expertise in a specific field.</li>
              <li>Apply for academic positions or research grants</li>
            </ul>
          </Col>
          {/* 2 */}
          <Col sm={3} md={5}>
            <h4>Medical Professionals</h4>
            <ul>
              <li>
                Showcase their medical education, clinical experience, and
                specializations
              </li>
              <li>
                Apply for medical residencies, fellowships, or hospital
                positions.
              </li>
              <li>Present credentials to gain patients' trust.</li>
            </ul>
          </Col>
          {/* 3 */}
          <Col sm={3} md={5}>
            <h4>IT and Tech Experts</h4>
            <ul>
              <li>
                Exhibit their technical skills, certifications, and project
                experience.
              </li>
              <li>Seek employment in the rapidly evolving tech industry.</li>
              <li>
                Prove their competency to potential employers and clients.
              </li>
            </ul>
          </Col>
          {/* 4 */}
          <Col sm={3} md={5}>
            <h4>Legal Practitioners</h4>
            <ul>
              <li>
                Detail their legal education, bar admissions, and case history.
              </li>
              <li>
                Apply for law firm positions, judicial roles, or legal
                consultancy.
              </li>
              <li>Demonstrate their legal expertise and achievements.</li>
            </ul>
          </Col>
          {/* 5 */}
          <Col sm={3} md={5}>
            <h4>Creative Professionals (Artists, Writers, Designers)</h4>
            <ul>
              <li>
                howcase their portfolio, artistic achievements, and creative
                projects.
              </li>
              <li>Attract clients, publishers, or art galleries.</li>
              <li>Communicate their unique talents and vision.</li>
            </ul>
          </Col>
          {/* 6 */}
          <Col sm={3} md={5}>
            <h4>Business and Finance Professionals</h4>
            <ul>
              <li>
                Present their educational background, certifications, and work
                history.
              </li>
              <li>
                Apply for positions in finance, banking, or business management.
              </li>
              <li>
                Demonstrate their financial acumen and decision-making skills.
              </li>
            </ul>
          </Col>
          {/* 7 */}
          <Col sm={3} md={5}>
            <h4>Teachers and Educators</h4>
            <ul>
              <li>
                Outline their teaching experience, subject expertise, and
                educational philosophy.
              </li>
              <li>Apply for teaching positions in schools and universities.</li>
              <li>Convey their commitment to quality education.</li>
            </ul>
          </Col>
          {/* 8 */}
          <Col sm={3} md={5}>
            <h4>Engineers</h4>
            <ul>
              <li>
                Detail their engineering qualifications, projects, and technical
                skills.
              </li>
              <li>
                Apply for engineering positions, research roles, or project
                management.
              </li>
              <li>Prove their ability to design and innovate.</li>
            </ul>
          </Col>
          {/* 9 */}
          <Col sm={3} md={5}>
            <h4>Sales and Marketing Professionals</h4>
            <ul>
              <li>
                Highlight their sales achievements, marketing strategies, and
                communication skills.
              </li>
              <li>Pursue positions in sales, marketing, or advertising.</li>
              <li>Showcase their ability to drive revenue and brand growth.</li>
            </ul>
          </Col>
          {/* 10 */}
          <Col sm={3} md={5}>
            <h4>Public Servants and Government Officials</h4>
            <ul>
              <li>
                Document their public service experience, policy contributions,
                and government roles.
              </li>
              <li>
                Apply for government positions, leadership roles, or advisory
                positions.
              </li>
              <li>
                Communicate their commitment to public service and governance.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Fourthaboutpage;
