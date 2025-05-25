import React from "react";
import { FaStar } from "react-icons/fa";

import { Card, Col, Row } from "react-bootstrap";

const ResturantReusable = ({
  itemImg,
  itemLogo,
  itemTitle,
  itemRating,
  itemOpen,
  itemBg,
  itemColor,
}) => {
  return (
    <Col lg={3} className="body">
      <Card>
        <Card.Img variant="top" src={itemImg} className="w-100" />
        <Card.Body>
          <div className="mb-3">
            <Row className="align-items-center">
              <Col lg={4}>
                <img src={itemLogo} alt="" />
              </Col>
              <Col lg={6}>
                <Card.Title className="restuName">{itemTitle}</Card.Title>
                <Card.Text className="restuRating">
                  <FaStar />
                  {itemRating}
                </Card.Text>
              </Col>
            </Row>
          </div>
          <div
            className="opentime"
            style={{ color: itemColor, background: itemBg }}
          >
            {itemOpen}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ResturantReusable;
