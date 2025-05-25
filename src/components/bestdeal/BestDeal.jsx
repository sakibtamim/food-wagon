import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./bestDeal.css";
import CrispySandwitchBan from "../../assets/crispySandwitchBan.png";
import { FaChevronRight } from "react-icons/fa";
import FriedChickenBan from "../../assets/friedchickenBan.png";
import PizzaBan from "../../assets/pizzaBan.png";

const BestDeal = () => {
  return (
    <div id="bestDeal">
      <Container>
        <div className="body mb-5">
          <Row className="align-items-center">
            <Col lg={5} className="bodyText">
              <h3>
                Best deals{" "}
                <span style={{ color: "#FFB30E" }}>Crispy Sandwiches</span>
              </h3>
              <p>
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </p>
              <div className="order text-center">
                <a href="">
                  Proceed to order <FaChevronRight />
                </a>
              </div>
            </Col>
            <Col lg={7} className="bodyImg">
              <img src={CrispySandwitchBan} className="w-100" alt="" />
            </Col>
          </Row>
        </div>
        <div className="body mb-5 ">
          <Row className="align-items-center">
            <Col lg={7} className="bodyImg1">
              <img src={FriedChickenBan} className="w-100" alt="" />
            </Col>
            <Col lg={5} className="bodyText">
              <h3>
                Celebrate parties with{" "}
                <span style={{ color: "#FFB30E" }}>Fried Chicken</span>
              </h3>
              <p>
                Get the best fried chicken smeared with a lip smacking lemon
                chili flavor. Check out best deals for fried chicken.
              </p>
              <div className="order text-center">
                <a href="">
                  Proceed to order <FaChevronRight />
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="body">
          <Row className="align-items-center">
            <Col lg={5} className="bodyText">
              <h3>
                Wanna eat hot & spicy{" "}
                <span style={{ color: "#FFB30E" }}>Pizza?</span>
              </h3>
              <p>
                Pair up with a friend and enjoy the hot and crispy pizza pops.
                Try it with the best deals.
              </p>
              <div className="order text-center">
                <a href="">
                  Proceed to order <FaChevronRight />
                </a>
              </div>
            </Col>
            <Col lg={7} className="bodyImg">
              <img src={PizzaBan} className="w-100" alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestDeal;
