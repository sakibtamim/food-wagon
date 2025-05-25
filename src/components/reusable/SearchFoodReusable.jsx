import React from "react";
import { Card, Col } from "react-bootstrap";

const SearchFoodReusable = ({ titleImg, titleName }) => {
  return (
    <Col lg={4}>
      <Card>
        <Card.Img src={titleImg} className="mx-auto d-block" />
        <Card.Body>
          <Card.Title className="text-center">{titleName}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SearchFoodReusable;
