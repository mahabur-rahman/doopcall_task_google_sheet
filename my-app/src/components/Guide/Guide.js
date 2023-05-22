import React from "react";
import "./guide.scss";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import play from "../../images/play.png";
import book from "../../images/guide_book.png";
import GuideCard from "./GuideCard";

const Guide = () => {
  return (
    <>
      <section id="guide" className="text-light">
        <Container>
          <div className="title_part mb-4">
            <Image src={book} alt="book" />
            <h4 className="carier_title mx-3 mb-0 mt-2 text-uppercase">
              ABOUT US
            </h4>
          </div>

          <div className="row">
            <div className="col-lg-5 mx-auto border border-secondary">
              <div className="p-4">
                <h4 className="text-uppercase mb-4">Our Innovation</h4>
                <p style={{ color: "#a7a7a7" }} className="py-1">
                  Explore helpful resources for ELIDE FIRE's Fire Extinguishing
                  Ball, including usage instructions, product specifications,
                  manuals, and videos to help you get the most out of your fire
                  safety solution.
                </p>
                <div className="text-center">
                  <Button
                    className="live_btn btn-sm fw-bold"
                    variant="secondary"
                  >
                    <span className="mx-2 btn_text text-uppercase">
                      Learn More
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mx-auto border border-secondary">
              <div className="p-4">
                <h4 className="text-uppercase mb-4">Become a distributor</h4>

                <p style={{ color: "#a7a7a7" }} className="py-1">
                  Join us as a distributor and be a part of our mission to
                  protect lives and property with our high-quality firefighting
                  foam solutions. Benefit from our reliable products and
                  excellent customer support to meet the firefighting needs of
                  your market.
                </p>
                <div className="text-center">
                  <Button
                    className="live_btn btn-sm fw-bold"
                    variant="secondary"
                  >
                    <span className="mx-2 btn_text text-uppercase">
                      Apply now
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <Row>
            <GuideCard />
          </Row> */}
        </Container>
      </section>
    </>
  );
};

export default Guide;
