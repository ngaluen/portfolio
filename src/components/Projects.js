import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import designImg1 from "../assets/img/design-img1.png";
import designImg2 from "../assets/img/design-img2.png";
import designImg3 from "../assets/img/design-img3.png";
import illustrationImg1 from "../assets/img/illustration-img1.gif";
import illustrationImg2 from "../assets/img/illustration-img2.gif";
import illustrationImg3 from "../assets/img/illustration-img3.gif";

export const Projects = () => {
  const projects = [
    {
      title: "Chrome Extension",
      description: "Weather Forecast Ticker",
      imgUrl: projImg1,
      linkUrl: "https://github.com/ngaluen/weather-scroller-chrome-extension",
    },
    {
      title: "Website",
      description: "Food Recommendations",
      imgUrl: projImg2,
      linkUrl: "https://ngaluen.github.io/food-guy/",
    },
  ];

  const designs = [
    {
      title: "Citybus",
      description: "UI/UX Case Study on Public Transport Mobile App",
      imgUrl: designImg1,
      linkUrl: "https://www.behance.net/gallery/181042211/Citybus",
    },
    {
      title: "JHC eShop",
      description: "UI/UX Case Study on eCommerce Website",
      imgUrl: designImg2,
      linkUrl: "https://www.behance.net/gallery/182907821/JHC-eShop",
    },
    {
      title: "Foodpanda",
      description: "UI/UX Case Study on Food Delivery Mobile App",
      imgUrl: designImg3,
      linkUrl: "https://www.behance.net/gallery/182909209/Foodpanda",
    },
  ];

  const illustrations = [
    {
      title: "Borovan Day Hasee",
      description: "For Neopets Art Gallery",
      imgUrl: illustrationImg1,
    },
    {
      title: "Fruit Machine",
      description: "For Neopets Art Gallery",
      imgUrl: illustrationImg2,
    },
    {
      title: "Spring Ona",
      description: "For Neopets Art Gallery",
      imgUrl: illustrationImg3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <p>See below for my recent work! </p>
            <p>
              For the Web Development and UI/UX Projects, if you would like to
              explore further details, simply click on the box, and it will
              direct you to my GitHub or Behance project page!{" "}
            </p>

            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">UI/UX Cases</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Illustrations</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <Row>
                    {designs.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {" "}
                  <Row>
                    {illustrations.map((work, index) => {
                      return <ProjectCard key={index} {...work} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" />
    </section>
  );
};
