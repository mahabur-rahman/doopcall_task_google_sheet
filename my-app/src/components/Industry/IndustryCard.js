import React, { Component } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { industry } from "../../data/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// slick
import Slider from "react-slick";

export default class IndustryCard extends Component {
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
      slidesToShow: 4,
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
          {industry.map((item) => {
            return (
              <>
                <Card className="text-center">
                  <Card.Img
                    variant="top"
                    src={item.imgSrc}
                    className="img-fluid hr_main"
                  />

                  <Card.Body>
                    <h4 className="mb-0 mt-2 name">{item.name}</h4>
                    <p className="design">{item.designation}</p>

                    <div className="d-flex align-items-center justify-content-center">
                      <Image src={item.waltonImg} alt="comp" />
                      <Image src={item.misfitImg} alt="comp" className="mx-3" />
                      <Image src={item.waltonImg} alt="comp" />
                    </div>
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
