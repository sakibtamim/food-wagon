import React from "react";
import { Container, Row } from "react-bootstrap";
import "./discount.css";
import Discount1 from "../../assets/d01.png";
import Discount2 from "../../assets/d02.png";
import Discount3 from "../../assets/d03.png";
import Discount4 from "../../assets/d04.png";
import DiscountReusable from "../reusable/DiscountReusable";

const Discount = () => {
  return (
    <div id="discount">
      <Container>
        <Row>
          <DiscountReusable
            discountImg={Discount1}
            remainTime="6 days remaining"
          />
          <DiscountReusable
            discountImg={Discount2}
            remainTime="6 days remaining"
          />
          <DiscountReusable
            discountImg={Discount3}
            remainTime="7 days remaining"
          />
          <DiscountReusable
            discountImg={Discount4}
            remainTime="8 days remaining"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Discount;
