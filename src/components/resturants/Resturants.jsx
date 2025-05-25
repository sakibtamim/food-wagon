import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./resturants.css";
import { FaChevronRight } from "react-icons/fa";
import Resturant1 from "../../assets/foodWorld.png";
import Resturant2 from "../../assets/pizzaHub.png";
import Resturant3 from "../../assets/donutHut.png";
import Resturant4 from "../../assets/donutHut1.png";
import Resturant5 from "../../assets/ruby.png";
import Resturant6 from "../../assets/kuakatafried.png";
import Resturant7 from "../../assets/redSquare.png";
import Resturant8 from "../../assets/tacoBell.png";
import LogoResturant1 from "../../assets/fw.png";
import LogoResturant2 from "../../assets/ph.png";
import LogoResturant3 from "../../assets/dh.png";
import LogoResturant4 from "../../assets/sw.png";
import LogoResturant5 from "../../assets/rt.png";
import LogoResturant6 from "../../assets/kfc.png";
import LogoResturant7 from "../../assets/rs.png";
import LogoResturant8 from "../../assets/tb.png";
import ResturantReusable from "../reusable/ResturantReusable";

const Resturants = () => {
  return (
    <div id="resturants">
      <Container>
        <Row>
          <Col lg={5} className="head mx-auto text-center">
            <h2>Featured Restaurants</h2>
          </Col>
        </Row>
        <Row className="row-gap-3 mb-5">
          <ResturantReusable
            itemImg={Resturant1}
            itemLogo={LogoResturant1}
            itemTitle="Foodworld"
            itemRating="46"
            itemOpen="Opens tomorrow"
            itemBg="rgba(241, 114, 40, 0.204)"
            itemColor="#f17228"
          />
          <ResturantReusable
            itemImg={Resturant2}
            itemLogo={LogoResturant2}
            itemTitle="Pizzahub"
            itemRating="40"
            itemOpen="Opens tomorrow"
            itemBg="rgba(241, 114, 40, 0.204)"
            itemColor="#f17228"
          />
          <ResturantReusable
            itemImg={Resturant3}
            itemLogo={LogoResturant3}
            itemTitle="Donuts hut"
            itemRating="20"
            itemOpen="Opens now"
            itemBg="rgba(121, 185, 60, 0.200)"
            itemColor="#79B93C"
          />
          <ResturantReusable
            itemImg={Resturant4}
            itemLogo={LogoResturant4}
            itemTitle="Ruby Tuesday"
            itemRating="26"
            itemOpen="Opens now"
            itemBg="rgba(121, 185, 60, 0.200)"
            itemColor="#79B93C"
          />
          <ResturantReusable
            itemImg={Resturant5}
            itemLogo={LogoResturant5}
            itemTitle="Foodworld"
            itemRating="46"
            itemOpen="Opens now"
            itemBg="rgba(121, 185, 60, 0.200)"
            itemColor="#79B93C"
          />
          <ResturantReusable
            itemImg={Resturant6}
            itemLogo={LogoResturant6}
            itemTitle="KFC"
            itemRating="53"
            itemOpen="Opens now"
            itemBg="rgba(121, 185, 60, 0.200)"
            itemColor="#79B93C"
          />
          <ResturantReusable
            itemImg={Resturant7}
            itemLogo={LogoResturant7}
            itemTitle="Red Square"
            itemRating="45"
            itemOpen="Opens now"
            itemBg="rgba(121, 185, 60, 0.200)"
            itemColor="#79B93C"
          />
          <ResturantReusable
            itemImg={Resturant8}
            itemLogo={LogoResturant8}
            itemTitle="Taco Bell"
            itemRating="35"
            itemOpen="Opens now"
            itemBg="rgba(121, 185, 60, 0.200)"
            itemColor="#79B93C"
          />
        </Row>
        <Row className="">
          <Col lg={2} className="mx-auto text-center">
            <div className="view">
              <a href="">
                {" "}
                View all <FaChevronRight />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resturants;
