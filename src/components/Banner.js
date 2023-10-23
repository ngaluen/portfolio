import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import portfoImg from "../assets/img/portfo-img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Developer", "UX/UI Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{`Hello, This Is Rhea!`}</h1>
            <h2>
              {`I'm on my way to become a `}
              <span className="wrap">{text}</span>
            </h2>
            <p>
              Originally majoring in social sciences, I gradually found and
              developed my true passion as a designer/creator during my
              internship experiences devoting in community work.
            </p>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={portfoImg} alt="Header Img" id="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
