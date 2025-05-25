import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./order.css";
import { FaChevronRight } from "react-icons/fa";

const Order = () => {
  return (
    <div id="order">
      <Container>
        <Row>
          <Col lg={7} className="head mx-auto text-center">
            <h2>Are you ready to order with the best deals?</h2>
            <a href="">
              Proceed to order <FaChevronRight />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
