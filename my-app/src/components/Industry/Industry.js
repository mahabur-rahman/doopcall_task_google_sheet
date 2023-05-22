import React from "react";
import "./industry.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import indUser from "../../images/indUser.png";
import IndustryCard from "./IndustryCard";

const Industry = () => {
  return (
    <section id="industry">
      <Container>
        <div className="main_title d-flex align-align-items-center mb-3 pb-1">
          <Image src={indUser} alt="user" className="video_img img-fluid" />
          <h3 className="mb-0 course_title mt-2 mx-3">
            ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন
          </h3>
        </div>
        <p
          style={{
            color: "#1D2939",
            fontWeight: "400",
            fontSize: "1rem",
          }}
          className="mb-5"
        >
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>

        <Row>
          <IndustryCard />
        </Row>
      </Container>
    </section>
  );
};

export default Industry;
