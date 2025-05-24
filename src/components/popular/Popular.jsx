import { useState } from "react";
import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./popular.css";

import CheeseBurger from "../../assets/cheeseBurger.png";
import ToffeCake from "../../assets/toffeCake.png";
import DanCake from "../../assets/danCake.png";
import CrispySandwitch from "../../assets/crispySandwitch.png";
import ThaiSoup from "../../assets/thaiSoup.png";
import PopularReuseable from "../reusable/PopularReuseable";

const Popular = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="popular">
      <Container>
        <Row>
          <Col lg={3} className="head mx-auto text-center">
            <h2>Popular items</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="body">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Row>
                  <PopularReuseable
                    titleImg={CheeseBurger}
                    titleName="Cheese Burger"
                    titleLocation="Burger Arena"
                    titlePrice="$3.88"
                  />
                  <PopularReuseable
                    titleImg={ToffeCake}
                    titleName="Toffe’s Cake"
                    titleLocation="Top Sticks"
                    titlePrice="$4.00"
                  />
                  <PopularReuseable
                    titleImg={DanCake}
                    titleName="Dancake"
                    titleLocation="Cake World"
                    titlePrice="$1.99"
                  />
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <PopularReuseable
                    titleImg={CrispySandwitch}
                    titleName="Crispy Sandwitch"
                    titleLocation="Fastfood Dine"
                    titlePrice="$3.00"
                  />
                  <PopularReuseable
                    titleImg={DanCake}
                    titleName="Dancake"
                    titleLocation="Cake World"
                    titlePrice="$1.99"
                  />
                  <PopularReuseable
                    titleImg={ThaiSoup}
                    titleName="Thai Soup"
                    titleLocation="Foody man"
                    titlePrice="$2.79"
                  />
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <PopularReuseable
                    titleImg={CheeseBurger}
                    titleName="Cheese Burger"
                    titleLocation="Burger Arena"
                    titlePrice="$3.88"
                  />
                  <PopularReuseable
                    titleImg={ToffeCake}
                    titleName="Toffe’s Cake"
                    titleLocation="Top Sticks"
                    titlePrice="$4.00"
                  />
                  <PopularReuseable
                    titleImg={CrispySandwitch}
                    titleName="Crispy Sandwitch"
                    titleLocation="Fastfood Dine"
                    titlePrice="$3.00"
                  />
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Popular;
