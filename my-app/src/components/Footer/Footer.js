import React from "react";
import "./footer.scss";
import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import playStore from "../../images/play_store.png";
import fbs from "../../images/fbs.png";
import ins from "../../images/ins.png";
import yt from "../../images/yt.png";
import lnk from "../../images/lnk.png";
import tiktok from "../../images/tiktok.png";
import footerLogo from "../../images/logo.png";
import phone from "../../images/phone.png";
import gmail from "../../images/gmail.png";
import map from "../../images/map.png";
import logo from "../../images/fireLogo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col xl={3} lg={6} md={6}>
            <div className="img">
              {/* res add */}
              <div className="footer_logo mb-3">
                <Image
                  src={logo}
                  alt="ostad"
                  className="img-fluid"
                  width="160px"
                />
                <p className="res_text">
                  Environmental Protection Agency <br />
                </p>
                <h3 className="download_text">DOWNLOAD OUR APP</h3>
              </div>

              <Image
                src={playStore}
                alt="playStore"
                className="img-fluid play_store"
              />
              <p className="footer_text mt-5 mb-2">Connect With Social Media</p>
              <div className="social_link d-flex align-items-center">
                <Nav.Link hre="#">
                  <Image src={fbs} alt="fb" className="links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={ins} alt="instagram" className="mx-3 links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={yt} alt="Youtube" className="links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={lnk} alt="Linkedin" className="mx-3 links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={tiktok} alt="tiktok" className="links" />
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6}>
            <div className="join_text">
              {/* res add */}
              <h3 className="quick_title mt-5">Quick Links</h3>
              <Nav.Link hre="#" className="footer_text mb-3">
                Case Studies
              </Nav.Link>
              <Nav.Link hre="#" className="footer_text mb-3">
                Free Live Seminar
              </Nav.Link>
              <Nav.Link hre="#" className="footer_text mb-3">
                Join an Events
              </Nav.Link>
              <div>
                <Nav.Link hre="#" className="footer_text mb-3">
                  Expertise Team
                </Nav.Link>
              </div>
              <div>
                <Nav.Link hre="#" className="footer_text">
                  Blogs
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6}>
            {/* res add  */}

            <h3 className="quick_title mt-5 mb-2">Contact</h3>
            <div>
              <Image src={phone} alt="phone" />
              <span className="footer_text mx-3">+00801752857542</span>
            </div>
            <div className=" d-flex">
              <Image src={gmail} alt="gmail" style={{ objectFit: "contain" }} />
              <span className="footer_text mx-3 py-3">
                support@firefightingfoam.app
              </span>
            </div>

            <div className="d-flex">
              <Image
                src={map}
                alt="map"
                className="img-fluid"
                style={{ objectFit: "contain" }}
              />
              <p className="mx-3">Ka-6/a, Navana Sylvania, Nadda, Dhaka</p>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6}>
            <h3 className="quick_title mt-5">Company</h3>

            <Nav.Link hre="#" className="footer_text text-capitalize">
              about us
            </Nav.Link>

            <Nav.Link hre="#" className="footer_text mt-2">
              Terms & Conditions
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
