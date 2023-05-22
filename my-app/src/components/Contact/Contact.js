import React from "react";
// scss
import "./contact.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
import Map from "./Map";
import ContactForm from "./ContactForm";
import pencil from "../../images/animated.png";

const Contact = () => {
  return (
    <section id="contact">
      <Container fluid>
        <div className="main_title d-flex  mb-3 pb-1 justify-content-center">
          <div className="text-center">
            <Image
              src={pencil}
              alt="sound"
              className="pencil img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="mb-4 course_title mt-2 mx-3 text-uppercase">
            Get In Touch
          </h3>
        </div>
        {/* google map */}
        <Row className="mt-3">
          <Map />
        </Row>
      </Container>

      <Container>
        {/* contact form */}
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
