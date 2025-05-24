import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./howWork.css";
import Location from "../../assets/location.png";
import Order from "../../assets/order.png";
import Pay from "../../assets/pay.png";
import Meal from "../../assets/meal.png";
import HowWorkReuseable from "../reusable/HowWorkReuseable";
const HowWork = () => {
  return (
    <div id="howWork">
      <Container>
        <Row>
          <Col lg={5} className="head mx-auto text-center">
            <h2>How does it work</h2>
          </Col>
        </Row>
        <Row>
          <HowWorkReuseable
            titleImgae={Location}
            titleName="Select location"
            titleText="Choose the location where your food will be delivered."
          />
          <HowWorkReuseable
            titleImgae={Order}
            titleName="Choose order"
            titleText="Check over hundreds of menus to pick your favorite food"
          />
          <HowWorkReuseable
            titleImgae={Pay}
            titleName="Pay advanced"
            titleText="It's quick, safe, and simple. Select several methods of payment"
          />
          <HowWorkReuseable
            titleImgae={Meal}
            titleName="Enjoy meals"
            titleText="Food is made and delivered directly to your home."
          />
        </Row>
      </Container>
    </div>
  );
};

export default HowWork;
