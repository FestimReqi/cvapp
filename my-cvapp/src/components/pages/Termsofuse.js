import Container from "react-bootstrap/Container";
import { ReactComponent as Mail } from "../../doc/mail.svg";
import Footer from "../home/footer";
import Navbar from "../home/navbar";

const Termsofuse = () => {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <h1 className="mt-5">Terms of Use</h1>
        <ol>
          <li>Acceptance of Terms</li>
          <p>
            By accessing and using this website, you agree to comply with these
            Terms of Use. If you do not agree with any part of these terms, you
            may not use the website.
          </p>
          <li>Use of Licensed Content</li>
        </ol>
        <ul typeof="cricle">
          <li>
            <dl>
              <dt>Creative Commons</dt>
              <dd>
                This website may utilize content licensed under Creative
                Commons. You are allowed to use such content in accordance with
                the terms specified in the respective Creative Commons license.
              </dd>
              <dt>Public Domain:</dt>
              <dd>
                Works in the public domain, including those created by the U.S.
                government, are freely available for use without copyright
                restrictions.
              </dd>
              <dt> Free Stock Images:</dt>
              <dd>
                Free stock images sourced from websites like Pexels and Unsplash
                are incorporated into this website. These images are
                royalty-free and can be used on this website.
              </dd>
              <dt>Open Source Media:</dt>
              <dd>
                Media available on websites like Wikimedia Commons and the
                Internet Archive are used under open source licenses, allowing
                their use on this website.
              </dd>
              <dt>Free Audio Libraries:</dt>
              <dd>
                Royalty-free audio files obtained from websites such as
                Freesound and SoundBible may be featured on this website for
                use.
              </dd>
              <dt>Free Music Libraries:</dt>
              <dd>
                Royalty-free music tracks from websites like AudioJungle and
                Free Music Archive may be used on this website
              </dd>
              <dt>User Responsibilities</dt>
              <dd>
                You may use the licensed and freely available content on this
                website in accordance with the respective licenses and terms of
                use.
              </dd>
              <dd>
                Respect any restrictions or requirements outlined by the
                original creators or licensors of the content.
              </dd>
              <dt>Disclaimer</dt>
              <dd>
                {" "}
                The website owner makes no guarantee of the accuracy or
                completeness of the licensed or freely available content.
              </dd>
              <dt>Changes to Terms</dt>
              <dd>
                The website owner reserves the right to modify these Terms of
                Use at any time. Users will be notified of changes through the
                website.
              </dd>
              <dt>Governing Law</dt>
              <dd>
                These Terms of Use are governed by the laws of{" "}
                <b>Festim Reci</b>
              </dd>
              <dd>
                For questions or concerns regarding these Terms of Use, please
                contact us at{" "}
                <a href="mailto:festim@mail.com">
                  Festim Reci <Mail width={30} height={30}></Mail>
                </a>
              </dd>
            </dl>
          </li>
        </ul>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default Termsofuse;
