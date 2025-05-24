import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
const PopularReuseable = ({
  titleImg,
  titleName,
  titleLocation,
  titlePrice,
}) => {
  return (
    <Col lg={4} className="items">
      <Card>
        <Card.Img variant="top" src={titleImg} className="w-100" />
        <Card.Body>
          <Card.Title className="itemName">{titleName}</Card.Title>
          <Card.Text className="location">
            <FaLocationDot />
            {titleLocation}
          </Card.Text>
          <Card.Text className="rate">{titlePrice}</Card.Text>

          <Button>order now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PopularReuseable;
