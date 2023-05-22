import React from "react";
import "./trustCompany.scss";
import { Container, Image } from "react-bootstrap";
import trust1 from "../../images/trust1.jpg";
import trust2 from "../../images/trust2.jpg";
import trust3 from "../../images/trust3.jpg";
import trust4 from "../../images/trust4.jpg";
import Slider from "react-slick";

const TrastCompany = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
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
    <>
      <section id="trustCompany">
        <div className="content text-center">
          <h5 className="title mb-4 text-uppercase">
            Trusted by hundreds of business clients globally
          </h5>

          <Slider {...settings}>
            <Image src={trust1} alt="img" className="item" />
            <Image src={trust2} alt="img" className="item" />
            <Image src={trust3} alt="img" className="item" />
            <Image src={trust4} alt="img" className="item" />
            <Image src={trust1} alt="img" className="item" />
            <Image src={trust2} alt="img" className="item" />
            <Image src={trust3} alt="img" className="item" />
            <Image src={trust4} alt="img" className="item" />
            <Image src={trust1} alt="img" className="item" />
            <Image src={trust2} alt="img" className="item" />
            <Image src={trust3} alt="img" className="item" />
            <Image src={trust4} alt="img" className="item" />
            <Image src={trust1} alt="img" className="item" />
            <Image src={trust2} alt="img" className="item" />
            <Image src={trust3} alt="img" className="item" />
            <Image src={trust4} alt="img" className="item" />
            <Image src={trust1} alt="img" className="item" />
            <Image src={trust2} alt="img" className="item" />
            <Image src={trust3} alt="img" className="item" />
            <Image src={trust4} alt="img" className="item" />
            <Image src={trust1} alt="img" className="item" />
            <Image src={trust2} alt="img" className="item" />
            <Image src={trust3} alt="img" className="item" />
            <Image src={trust4} alt="img" className="item" />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TrastCompany;
