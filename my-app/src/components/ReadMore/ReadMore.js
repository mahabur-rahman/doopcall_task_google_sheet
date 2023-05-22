import React from "react";
import "./readMore.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import pencil from "../../images/pencil.png";
import ReadMoreCard from "./ReadMoreCard";

const ReadMore = () => {
  return (
    <section id="readMore">
      <Container>
        <div className="main_title d-flex  mb-3 pb-1">
          <div>
            <Image
              src={pencil}
              alt="sound"
              className="pencil img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="mb-0 course_title mt-2 mx-3 text-uppercase">
            Events & News
          </h3>
        </div>
        <p
          style={{
            color: "#1D2939",
            fontWeight: "400",
            fontSize: "1rem",
          }}
        >
          Regularly visit news websites that cover fire safety, firefighting,
          and emergency management
        </p>

        <Row>
          <ReadMoreCard />
        </Row>
      </Container>
    </section>
  );
};

export default ReadMore;
