import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <div id="banner">
      <Container>
        <Row>
          <Col lg={7} className="banHeader">
            <h1>Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
