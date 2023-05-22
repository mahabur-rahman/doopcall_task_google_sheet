import React, { Component } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { readMore } from "../../data/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// slick
import Slider from "react-slick";

export default class ReadMoreCard extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {readMore.map((item) => {
            return (
              <>
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.imgSrc}
                    className="img-fluid readMore_img"
                  />

                  <div className="d-flex align-items-center mt-2">
                    <span className="label">{item.date} </span>
                    <span
                      className="mx-2"
                      style={{
                        height: "5px",
                        width: "5px",
                        borderRadius: "50%",
                        background: "#475467",
                      }}
                    ></span>
                    <span className="label">{item.text}</span>
                  </div>
                  <Card.Body>
                    <h3 className="main_title mb-4">{item.title}</h3>
                    <span className="subTitle">{item.subTitle}</span>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </Slider>

        <div
          style={{
            textAlign: "end",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button className="prevBtn d-block d-sm-none" onClick={this.previous}>
            <FaArrowLeft className="prevIcon" />
          </button>
          <button
            className="nextBtn mx-3 d-block d-sm-none"
            onClick={this.next}
          >
            <FaArrowRight className="nextIcon" />
          </button>
        </div>
      </div>
    );
  }
}
