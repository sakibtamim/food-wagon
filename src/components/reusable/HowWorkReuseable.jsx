import React from "react";
import { Card, Col } from "react-bootstrap";

const HowWorkReuseable = ({ titleImgae, titleName, titleText }) => {
  return (
    <Col lg={3} className="body text-center">
      <Card>
        <Card.Img className="mx-auto d-block" src={titleImgae} />
        <Card.Body>
          <Card.Title>{titleName}</Card.Title>
          <Card.Text>{titleText}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HowWorkReuseable;
