// Importimet e komponenteve nga libraritë e react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ReactComponent as Click } from "../../doc/click.svg"; // Importimi i ikonës (SVG) nga skedari ../../doc/click.svg dhe përdorimi i aliasit Click për ta identifikuar atë
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

// Importimi i stilit nga dosja ./Secondpagehome.css
import "./Secondpagehome.css";

// Deklarimi i komponentit të quajtur Secondpagehome
const Secondpagehome = () => {
  return (
    <>
      {/* Komponenti Container nga react-bootstrap për të mbështetur elementët */}
      <Container className="th-page  mt-5">
        {/* Rreshti (Row) që përmban një kolonë */}
        <Row className="p-5">
          {/* Kolona e vetme */}
          <Col>
            {/* Teksti me një titull dhe një Badge (ngjyrë të ndryshme) për të shfaqur diçka të re */}
            <h3 className="therth_intro_cv">
              Krijuesi Ideal i CV dhe Resume për Rrugën Tuaj Profesionale{" "}
              <Badge bg="secondary">New</Badge>
            </h3>
            {/* Teksti tjetër përshkrues */}
            <h3 className="text-mute therth_intro_cv ">
              Nëse jeni në Teknologji, Inxhinieri, Menaxhim, ose Marketing,
              krijuesi ynë i CV ofron template të personalizuara për të shfaqur
              trajektoren tuaj profesionale
            </h3>
            {/* Butoni Start me një ikonë Click brenda */}
            <Button className="button therth_intro_cv " variant="primary">
              {" "}
              Start
              <Click width={30} height={30} style={{ color: "#fff" }}></Click>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Eksportimi i komponentit për përdorim në tërë aplikacionin
export default Secondpagehome;
