import React, { useState } from "react";
import { Col, Image, Card, Button, Row } from "react-bootstrap";
import { community } from "../../data/data";

import cUser from "../../images/cUser.png";
import fb from "../../images/fb.png";

const CommunityCard = () => {
  const [data, setData] = useState(community);

  return (
    <>
      {data.map((item) => {
        return (
          <Col xl={6} lg={6} md={12} key={item.id} className="my-3">
            <Row className="row_bg">
              <Col xl={5}>
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="img-fluid cm_img mx-3"
                />
              </Col>

              <Col xl={7} lg={6} md={12}>
                <Card>
                  <Card.Body>
                    <Button className="member_btn mb-1">
                      <Image src={cUser} alt="user" />
                      <span className="member mx-1">{item.userNumbers}</span>
                    </Button>
                    <h5 className="main_title mt-2">{item.members}</h5>
                    <h5 className="main_title">{item.subMembers}</h5>

                    <div className="cart_footer d-flex align-items-center justify-content-between">
                      <div className="btn_desc">
                        <a href="#">
                          <Button className="card_btn">
                            <span className="btn_text mx-3">{item.text}</span>
                            <span className="arrow">
                              <Image src={fb} alt="fb" />
                            </span>
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        );
      })}
    </>
  );
};

export default CommunityCard;
