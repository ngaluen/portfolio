import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-item-center">
          <Col sm={6} className="text-center">
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
