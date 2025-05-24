import React from "react";
import { Card, Col } from "react-bootstrap";

const DiscountReusable = ({ discountImg, remainTime }) => {
  return (
    <Col lg={3} className="body">
      <Card>
        <Card.Img variant="top" src={discountImg} />
        <Card.Body>
          <Card.Title>Greys Vage</Card.Title>

          <div className="remainig text-center">{remainTime}</div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DiscountReusable;
