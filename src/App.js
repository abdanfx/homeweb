import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Logo from "../src/logo.svg";
import HTMLCertificate from "../src/images/htmlcertificate.png";
import CSSCertificate from "../src/images/csscertificate.png";
import JSCertificate from "../src/images/jscertificate.png";
import Project1 from "../src/images/project1.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Figure from "react-bootstrap/Figure";
import Avatar from "../src/images/avatar.svg";
import ListGroup from "react-bootstrap/ListGroup";

function BasicExample() {
  return (
    <div id="home">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img
                alt=""
                src={Logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#certificate">Certificate</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <div
          className="bg-dark text-white d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Container>
            <Row>
              <Col>
                <h1 className="text-center">Hi, I am Abdan Syakuran</h1>
                <h3 className="text-center">I like to build Web Apps</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center pt-3">
              <Col md="auto" className="text-center">
                <Button variant="primary">My Portofolio</Button>{" "}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light" id="profile">
          <Container>
            <Row>
              <Col>
                {" "}
                <h1 className="text-center mt-5">Abot me</h1>
                <hr />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light d-flex justify-content-center align-items-center">
          <Container>
            <Row>
              <Col sm={4} className="m-auto">
                <Figure>
                  <Figure.Image
                    xs={12}
                    sm={4}
                    md={4}
                    className="d-block mx-auto img-fluid.max-width: 100% bg-info rounded-circle"
                    width={500}
                    height={400}
                    alt="avatar"
                    src={Avatar}
                  />
                </Figure>
              </Col>
              <Col sm className="text-justify">
                <p>
                  I am a software developer with a passion for web development.
                  I have a background in computer science and mathematics, and I
                  have a strong interest in the intersection of technology and
                  art. I am currently working as a software developer at example
                  org. in San Francisco, CA. I am currently working on a project
                  that will be used to help people find the best way to get
                  around the city.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item as="li">HTML</ListGroup.Item>
                  <ListGroup.Item as="li">CSS</ListGroup.Item>
                  <ListGroup.Item as="li">Javascript</ListGroup.Item>
                  <ListGroup.Item as="li">React Bootstrap</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-light" id="certificate">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center mt-5">My Achievements</h1>
                <hr />
                <CardGroup className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <Card>
                    <a href={HTMLCertificate}>
                      <Card.Img variant="top" src={HTMLCertificate} />
                    </a>
                    <Card.Body>
                      <Card.Title className="text-center">
                        HTML Certificate
                      </Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <a href={CSSCertificate}>
                      <Card.Img variant="top" src={CSSCertificate} />
                    </a>
                    <Card.Body>
                      <Card.Title className="text-center">
                        CSS Certificate
                      </Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <a href={JSCertificate}>
                      <Card.Img variant="top" src={JSCertificate} />
                    </a>
                    <Card.Body>
                      <Card.Title className="text-center">
                        Javascript Certificate
                      </Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light" id="project">
          <Container>
            <Row>
              <Col>
                {" "}
                <h1 className="text-center mt-5">My Work</h1>
                <hr />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="auto" className="m-auto">
                <Card style={{ width: "20.5rem" }}>
                  <Card.Img
                    className="d-block mx-auto img-fluid.max-width: 100%"
                    variant="top"
                    src={Project1}
                    xs={12}
                    sm={4}
                    md={4}
                  />
                  <Card.Body>
                    <Card.Title>Web Sekolah</Card.Title>
                    <Card.Text>
                      Web ini didesain untuk kebutuhan akademik Sekolah Menengah Pertama
                    </Card.Text>

                    <Button
                      variant="primary"
                      href="https://sistempendaftaransmp.000webhostapp.com/"
                      target="_blank"
                    >
                      Demo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light pt-5">
          <Card>
            <Card.Header as="h5">Footer</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <p className="text-center">&copy; Abdan Syakuran 2023</p>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default BasicExample;
