import React from "react";
import "./liveCourse.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import sound from "../../images/sound.png";
import LiveModal from "./LiveModal";

const LiveCourse = () => {
  return (
    <section id="liveCourse">
      <Container>
        <div className="main_title d-flex align-align-items-center mb-3 pb-1">
          <Image src={sound} alt="sound" />
          <h3 className="mb-0 course_title mt-2 mx-3">লাইভ কোর্সসমূহ</h3>
        </div>
        <Row>
          <LiveModal />
        </Row>
      </Container>
    </section>
  );
};

export default LiveCourse;
