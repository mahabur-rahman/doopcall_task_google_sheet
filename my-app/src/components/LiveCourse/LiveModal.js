import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { liveCourse } from "../../data/data";
import sitImg from "../../images/sitImg.png";
import clock from "../../images/clock.png";
import { FaArrowRight } from "react-icons/fa";
import blackClock from "../../images/black_clock.png";
import blackMan from "../../images/black_man.png";

const GuideCard = () => {
  const [data, setData] = useState(liveCourse);

  return (
    <>
      {data.map((item) => {
        return (
          <Col xl={4} key={item.id} className="my-3">
            <Card>
              <Card.Img variant="top" src={item.img} className="img-fluid" />
              <div className="top_btn py-2">
                <Button className="batch_btn">{item.sit}</Button>
                <Button className="course_btn d-sm-none">
                  {item.btnLabel}
                </Button>
                <Button className="sit_btn mx-2">
                  <Image
                    src={sitImg}
                    alt="sit"
                    className="mx-1 d-none d-sm-block"
                  />
                  <Image src={blackMan} alt="sit" className="mx-1 d-sm-none" />
                  <span> {item.emptySit}</span>
                </Button>
                <Button className="sit_btn">
                  <Image
                    src={clock}
                    alt="clock"
                    className="mx-1 d-none d-sm-block"
                  />
                  <Image
                    src={blackClock}
                    alt="clock"
                    className="mx-1 d-sm-none"
                  />
                  {item.day}
                </Button>
              </div>
              <Card.Body>
                <h5 className="main_title mb-5">{item.title}</h5>

                <div className="cart_footer d-flex align-items-center justify-content-between">
                  <div className="rate">
                    <div className="b_rate">{item.beforRate}</div>
                    <div className="main_rate">{item.mainRate}</div>
                  </div>
                  <div className="btn_desc">
                    <Button className="card_btn">
                      <span className="btn_text mx-2"> {item.text}</span>
                      <span className="arrow">
                        <FaArrowRight />
                      </span>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default GuideCard;
