import Navbar from "../home/navbar";
import Firstpageabout from "../About/Firstpageabout";
import Secondpageabout from "../About/Secondpageabout";
import Therdpageabout from "../About/Thirdpageabout";
import Fourthaboutpage from "../About/Fourthpageabout";
import Fivethaboutpage from "../About/fivethpageabout";
import Footer from "../home/footer";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <Firstpageabout></Firstpageabout>
      <Secondpageabout></Secondpageabout>
      <Therdpageabout></Therdpageabout>
      <Fourthaboutpage></Fourthaboutpage>
      <Fivethaboutpage></Fivethaboutpage>
      <Footer></Footer>
    </>
  );
};

export default About;
