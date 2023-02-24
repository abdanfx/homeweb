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
import PHPCertificate from "../src/images/phpcertificate.png";
import SQLCertificate from "../src/images/sqlcertificate.png";
import Project1 from "../src/images/project1.png";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Avatar from "../src/images/avatar.svg";
import Programmer from "../src/images/programmer.svg";

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
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Abdan-Profile
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
              <Col sm={6} className="mt-5 mb-5">
                <h1 className="mt-5 text-justify homeText">
                  Hi, I am Abdan Syakuran
                </h1>
                <h1 className="text-justify homeText">
                  I like to build Web Apps
                </h1>

                <Button
                  md="auto"
                  variant="primary"
                  className="mb-2 homeText"
                  href="#project"
                >
                  My Portfolio
                </Button>

                <a
                  href="https://www.linkedin.com/in/abdan-syakuran-317a02264/"
                  className="mt-2 fa fa-linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://github.com/abdanfx"
                  className="fa fa-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>

                <a
                  href="mailto: abdanandroid123@gmail.com"
                  className="fa fa-google"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
              </Col>
              <Col sm={6}>
                <Figure>
                  <Figure.Image
                    xs={12}
                    sm={4}
                    md={4}
                    className="bg-dark"
                    width={700}
                    height={700}
                    alt="avatar"
                    src={Programmer}
                  />
                </Figure>
              </Col>
            </Row>
            {/* <Row className="justify-content-md-center pt-3">
              <Col md="auto" className="text-center homeText">
                <Button variant="primary" href="#project">
                  My Portfolio
                </Button>{" "}
              </Col>
            </Row> */}
          </Container>
        </div>
        <div className="bg-light" id="profile">
          <Container>
            <Row>
              <Col>
                {" "}
                <h1 className="text-center mt-5">About me</h1>
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
                  I want to make a website design that can be seen and read well
                  by all people, including people with disabilities. I want to
                  design a website that attractive, interactive and responsive
                  for computer screen devices or mobile screens, so that it can
                  attract the interest of visitors when viewing and reading the
                  website. And I want to continue to develop coding and logic
                  skills. Of course I also want knowledge what I learn can
                  benefit everyone and can contribute which is good for the
                  company I work for.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
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
              </Col>
            </Row>
            <Row xs={1} md={3} className="g-4 mt-3">
              <Col>
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <a href={HTMLCertificate}>
                    <Card.Img variant="top" src={HTMLCertificate} />
                  </a>
                  <Card.Body>
                    <Card.Title className="text-center">
                      HTML Certificate
                    </Card.Title>
                    <Card.Text className="text-justify">
                      During the courses, I learn about HTML Basic like Heading,
                      Paragraph, Text Formatting, Elements, Attributes and also
                      some new features in HTML5.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <a href={CSSCertificate}>
                    <Card.Img variant="top" src={CSSCertificate} />
                  </a>
                  <Card.Body>
                    <Card.Title className="text-center">
                      CSS Certificate
                    </Card.Title>
                    <Card.Text className="text-justify">
                      Working with Text, CSS Properties, Positioning and Layout.
                      CSS 3 Basic, Transition and Transform and CSS Filters.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <a href={JSCertificate}>
                    <Card.Img variant="top" src={JSCertificate} />
                  </a>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Javascript Certificate
                    </Card.Title>
                    <Card.Text className="text-justify">
                      This course learn about Javascript Basic, Conditional and
                      Loops. Function, Objects, DOM & Event, ECMAScript 6.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row xs={1} md={3} className="justify-content-md-center g-4">
              <Col>
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <a href={PHPCertificate}>
                    <Card.Img variant="top" src={PHPCertificate} />
                  </a>
                  <Card.Body>
                    <Card.Title className="text-center">
                      PHP Certificate
                    </Card.Title>
                    <Card.Text className="text-justify">
                      This course learn about PHP Basic Syntax, Vaiables,
                      Operators, Array, Control Structure, Function, Working
                      With Files and Objects in PHP.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <a href={SQLCertificate}>
                    <Card.Img variant="top" src={SQLCertificate} />
                  </a>
                  <Card.Body>
                    <Card.Title className="text-center">
                      SQL Certificate
                    </Card.Title>
                    <Card.Text className="text-justify">
                      This course learn about Basic Concepts of SQL. Filtering,
                      Function and Subqueries. Also working with Join, Table
                      Operation.
                    </Card.Text>
                  </Card.Body>
                </Card>
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
                <Card
                  className="shadow ronded p-2 bg-body-tertiary"
                  style={{ width: "22rem" }}
                >
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
                      Web ini didesain untuk kebutuhan akademik Sekolah Menengah
                      Pertama
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
        <div className="bg-light pt-4">
          <Container fluid>
            <Row>
              <Col className="text-center">
                {" "}
                <p> &#169; 2023 All right reserved</p>
                <p className="text-muted"> Made with React-Bootstrap</p>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default BasicExample;
