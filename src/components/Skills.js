import { Container, Row, Col, CardGroup } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/HTML.svg";
import css from "../assets/img/CSS.svg";
import javascript from "../assets/img/Javascript.svg";
import react from "../assets/img/React.svg";
import illustrator from "../assets/img/Illustrator.svg";
import photoshop from "../assets/img/Photoshop.svg";
import procreate from "../assets/img/Procreate.svg";
import xd from "../assets/img/Xd.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>SKILLS</h2>
              <p>
                Although my academic background is in Social Sciences, I have
                embarked on a dedicated journey to transition into the IT
                industry. I have completed two intensive boot camps: the
                Immersive Quantum Bootcamp in UI & UX Design and the Frontend
                Web Developer Programme.
              </p>
              <div className="coding-skills">
                <div className="icons coding-icons">
                  <img src={html} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="icons coding-icons">
                  <img src={css} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="icons coding-icons">
                  <img src={javascript} alt="Javascript" />
                  <h5>Javascript</h5>
                </div>
                <div className="icons coding-icons">
                  <img src={react} alt="React" />
                  <h5>React</h5>
                </div>
              </div>
              <div className="design-skills">
                <div className="icons design-icons">
                  <img src={illustrator} alt="Illustrator" />
                  <h5>Illustrator</h5>
                </div>
                <div className="icons design-icons">
                  <img src={photoshop} alt="Photoshop" />
                  <h5>Photoshop</h5>
                </div>
                <div className="icons design-icons">
                  <img src={procreate} alt="Procreate" />
                  <h5>Procreate</h5>
                </div>
                <div className="icons design-icons">
                  <img src={xd} alt="Xd" />
                  <h5>Xd</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" />
    </section>
  );
};
