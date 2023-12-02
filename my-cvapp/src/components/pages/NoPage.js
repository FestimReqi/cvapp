import { ReactComponent as Errorfor } from "../../doc/404NotFound.svg";
import Container from "react-bootstrap/Container";
import { ReactComponent as IconSVG } from "../../doc/homeSVG.svg";

const NoPage = () => {
  return (
    <>
      <Container className="mt-5" style={{ textAlign: "center" }}>
        {/* <button type="button" class="btn btn-info">
          Homepage
        </button> */}
        <a href="/" class="btn btn-info">
          <IconSVG width="30" height="30"></IconSVG> <b>Back homepage</b>
        </a>
      </Container>
      <Errorfor></Errorfor>
    </>
  );
};

export default NoPage;
