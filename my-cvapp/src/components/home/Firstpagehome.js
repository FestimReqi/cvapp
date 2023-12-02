// Importimi i komponentit Figure nga react-bootstrap
import Figure from "react-bootstrap/Figure";

// Importimi i ikonës (SVG) nga skedari ../../doc/Profile data-bro.svg dhe përdorimi i aliasit FigureMode për të identifikuar ikonën
import { ReactComponent as FigureMode } from "../../doc/Profile data-bro.svg";

// Importimi i komponenteve shtesë të react-bootstrap për ndërtimin e layout-it si Container, Row, Col
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Importimi i stilit nga dosja ./Firstpagehome.css
import "./Firstpagehome.css";

// Deklarimi i një funksioni të quajtur firstPagehome
const firstPagehome = () => {
  return (
    // Div-i kryesor i komponentit me klasën CSS "height_col_row" dhe "mt-5" për margin-top
    <div className="height_col_row  mt-5">
      {/* Komponenti Container nga react-bootstrap për të mbështetur elementët */}
      <Container>
        {/* Rreshti (Row) që përmban dy kolona */}
        <Row className=" p-5 d-flex justify-content-around  align-items-center height_col_row">
          {/* Kolona e parë, me madhësi të ndryshme për pantallona të ndryshme */}
          <Col sm={10} md={7}>
            {/* Teksti paragrafi me klasën CSS "middleText" */}
            <p className="middleText">
              Web-Based Portfolio and Expert Resume Builder
            </p>
            {/* Titulli i madh me klasën CSS "bigText" */}
            <h1 className="bigText">
              Craft a professional resume in mere minutes for your job-ready
              journey.
            </h1>
            {/* Teksti paragrafi tjetër me klasën CSS "middleText" */}
            <p className="middleText">
              The premier resume and CV creator, relied upon by over 1 million
              individuals to secure their dream careers
            </p>
          </Col>
          {/* Kolona e dytë, me madhësi të ndryshme për pantallona të ndryshme */}
          <Col sm={10} md={3}>
            {/* Komponenti Figure nga react-bootstrap për të mbështetur elementët vizuale */}
            <Figure>
              {/* Përdorimi i ikonës (FigureMode) me width të caktuar dhe alt atributin */}
              <FigureMode width={400} alt="171x180"></FigureMode>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Eksportimi i komponentit për përdorim në tërë aplikacionin
export default firstPagehome;
