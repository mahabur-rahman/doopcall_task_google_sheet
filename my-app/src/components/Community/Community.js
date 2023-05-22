import React from "react";
import "./community.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import communityImg from "../../images/community.png";
import CommunityCard from "./CommuniyCard";

const Community = () => {
  return (
    <section id="community">
      <Container>
        <div className="main_title d-flex align-align-items-center mb-3 pb-1">
          <Image src={communityImg} alt="community" />
          <h3 className="mb-0 course_title mt-2 mx-3 text-uppercase">
            Our Resources
          </h3>
        </div>
        <p
          className="mb-4"
          style={{
            color: "#1D2939",
            fontWeight: "400",
            fontSize: "1rem",
          }}
        >
          Firefighting foam is a specialized fire suppression agent used to
          extinguish and control fires
        </p>

        <Row>
          <CommunityCard />
        </Row>
      </Container>
    </section>
  );
};

export default Community;
