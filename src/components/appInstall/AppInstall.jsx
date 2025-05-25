import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./appInstall.css";
import DailyDiscounts from "../../assets/dailydiscounts.png";
import LiveTracking from "../../assets/livetracking.png";
import QuickDelivery from "../../assets/quickdelivery.png";
import GooglePLay from "../../assets/googleplay.png";
import AppleStore from "../../assets/apple.png";
const AppInstall = () => {
  return (
    <div id="appInstall">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="head ">
              <Row className="justify-content-between">
                <Col
                  lg={4}
                  className="textsinfos d-flex gap-4 align-items-center"
                >
                  <img src={DailyDiscounts} alt="" />
                  <p>Daily Discounts</p>
                </Col>
                <Col
                  lg={4}
                  className="textsinfos d-flex gap-4 align-items-center"
                >
                  <img src={LiveTracking} alt="" />
                  <p>Live Tracing</p>
                </Col>
                <Col
                  lg={4}
                  className="textsinfos d-flex gap-4 align-items-center"
                >
                  <img src={QuickDelivery} alt="" />
                  <p>Quick Delivery </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="bottom ms-auto">
            <h3>Install the app</h3>
            <p>
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </p>
            <div className="appstore">
              <Row>
                <Col lg={6}>
                  <div className="gplay d-flex gap-2">
                    <img src={GooglePLay} alt="" />
                    <div>
                      <h6>Get it on</h6>
                      <h5>Google Play</h5>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="applestore d-flex gap-2">
                    <img src={AppleStore} alt="" />
                    <div>
                      <h6>Down on the</h6>
                      <h5>Apple store</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppInstall;
