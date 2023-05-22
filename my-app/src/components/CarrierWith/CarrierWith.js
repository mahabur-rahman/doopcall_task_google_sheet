import React from "react";
import "./carrierWith.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import flag from "../../images/flag.png";

const CarrierWith = () => {
  return (
    <section id="carrier">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="car_content">
              <div className="d-flex align-items-center">
                <Image src={flag} alt="flag" />
                <h2 className="main_title mb-4 mt-5 mx-3">
                  Ostad helps you in your career with
                </h2>
              </div>
              <p className="text">
                স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
                নিচের বাটনে।
              </p>
            </div>
          </Col>
        </Row>
        <hr style={{ color: "#4b4b4b" }} />
      </Container>
    </section>
  );
};

export default CarrierWith;
