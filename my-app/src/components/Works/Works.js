import React from "react";
import "./work.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import animated from "../../images/animated.png";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section id="work">
      <Container>
        <div className="main_title d-flex align-align-items-center mb-3 pb-1">
          <Image src={animated} alt="sound" />
          <h3 className="mb-0 course_title mt-2 mx-3">ওয়ার্কশপ</h3>
        </div>
        <Row>
          <WorkCard />
        </Row>
      </Container>
    </section>
  );
};

export default Work;
