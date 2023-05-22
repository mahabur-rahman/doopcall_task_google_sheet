import React from "react";
import "./banner.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import firehydrant from "../../images/firehydrant.png";
import book from "../../images/book.png";
import man from "../../images/man.png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="banner_content">
              <Row>
                <Col xl={2}>
                  <Image src={firehydrant} alt="firehydrant" width={"100px"} />
                </Col>
                <Col xl={9} className="mx-auto">
                  <div className="banner_text">
                    <h2 className="title mt-3 mt-xl-0 mb-0 text-white text-uppercase">
                      Save Lives
                    </h2>
                    <h2 className="title mt-3 mt-xl-0 text-white text-uppercase">
                      Protect Communities
                    </h2>
                    <p className="para my-4 text-light">
                      Are you ready to face the heat? We're looking for
                      courageous individuals like you to become part of our
                      elite firefighting force. Fill out the form below and
                      embark on a thrilling journey of heroism and service.
                    </p>

                    <div className="banner_btn mt-4 mb-4">
                      <Button className="live_btn">
                        <Image src={book} alt="icon" />
                        <span className="mx-2 btn_text">
                          Join Our Fearless Team
                        </span>
                      </Button>
                    </div>

                    <div className="btn_link">
                      <Button className="start_btn">
                        <span className="link_text mx-2"> Apply Here</span>
                        <FaArrowRight />
                      </Button>

                      <Button className="start_btn_two mx-2">
                        <span className="link_text_Two">Join Us</span>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
