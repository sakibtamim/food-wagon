import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMotorcycle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

import "./banner.css";

const Banner = () => {
  return (
    <div id="banner">
      <Container>
        <Row>
          <Col lg={7} className="banHeader  ">
            <h1>Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
          </Col>
        </Row>
        <Row>
          <Col lg={7} className="banBody">
            <div className="choose d-flex gap-3">
              <div className="delivery">
                <FaMotorcycle />
                Delivery
              </div>
              <div className="pickup">
                <FaBagShopping />
                Pickup
              </div>
            </div>
            <div className="banBottom">
              <Row>
                <Col lg={8} className="location">
                  <input type="text" placeholder="Enter your address" />
                  <IoLocationSharp />
                </Col>
                <Col lg={4} className="findFood">
                  <button>Find food</button>
                  <FaSearch />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
