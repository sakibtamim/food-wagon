import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./searchFood.css";
import { FaChevronRight } from "react-icons/fa";
import PizzaImg from "../../assets/pizza.png";
import BurgerImg from "../../assets/burger.png";
import NoodlesImg from "../../assets/noodles.png";
import SubSandwitchImg from "../../assets/subsandwitch.png";
import ChowminImg from "../../assets/chowmin.png";
import SteakImg from "../../assets/steak.png";
import SearchFoodReusable from "../reusable/SearchFoodReusable";

const SearchFood = () => {
  return (
    <div id="searchFood">
      <Container>
        <div className="head">
          <Row className="align-items-center justify-content-between">
            <Col lg={3}>
              <h2>Search by Food</h2>
            </Col>
            <Col lg={7} className="text-end">
              <a href="">
                View all <FaChevronRight />
              </a>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
        <div className="foodbody">
          <Carousel interval={null}>
            <Carousel.Item>
              <Row>
                <SearchFoodReusable titleImg={PizzaImg} titleName="Pizza" />
                <SearchFoodReusable titleImg={BurgerImg} titleName="Pizza" />
                <SearchFoodReusable titleImg={NoodlesImg} titleName="Noodles" />
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <SearchFoodReusable
                  titleImg={SubSandwitchImg}
                  titleName="Sub-sandiwch"
                />
                <SearchFoodReusable
                  titleImg={ChowminImg}
                  titleName="Chowmein"
                />
                <SearchFoodReusable titleImg={SteakImg} titleName="Steak" />
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <SearchFoodReusable titleImg={NoodlesImg} titleName="Noodles" />
                <SearchFoodReusable titleImg={PizzaImg} titleName="Pizza" />
                <SearchFoodReusable titleImg={SteakImg} titleName="Steak" />
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default SearchFood;
