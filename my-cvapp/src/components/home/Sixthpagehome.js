import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Sixthpagehome.css";
import Imgsvgapsolute from "../../doc/logo-black.svg";

const sixthpagehome = () => {
  return (
    <>
      <Container className="">
        <div className="text_and_button mt-5  p-5 text-center image_mode ">
          <h3>Begin Your Journey with Our Free Resume Builder Today!</h3>
          <h5>Sign Up for Free – No Credit Card Needed</h5>
          <Button className="button" variant="primary">
            Sign Up
          </Button>
          <img
            src={Imgsvgapsolute}
            alt=""
            className="imgmodeapsolute"
            width={100}
          />
        </div>
      </Container>
    </>
  );
};

export default sixthpagehome;
