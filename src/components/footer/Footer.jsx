import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <div className="topCities">
          <Row>
            <Col lg={2} className="header">
              <h5>Our top cities</h5>
            </Col>
          </Row>
          <Row>
            <Col lg={2} className="cities">
              <ul>
                <li>
                  <a href="">Brahmanbaria</a>
                </li>
                <li>
                  <a href="">Chandpur</a>
                </li>
                <li>
                  <a href="">Cox's Bazar</a>
                </li>
                <li>
                  <a href="">Feni</a>
                </li>
                <li>
                  <a href="">Lakshmipur</a>
                </li>
                <li>
                  <a href="">Chowmuhani</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="cities">
              <ul>
                <li>
                  <a href="">Maijdee</a>
                </li>
                <li>
                  <a href="">Rangamati</a>
                </li>
                <li>
                  <a href="">Savar</a>
                </li>
                <li>
                  <a href="">Faridpur</a>
                </li>
                <li>
                  <a href="">Kaliakair</a>
                </li>
                <li>
                  <a href="">Sreepur</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="cities">
              <ul>
                <li>
                  <a href="">Gopalganj</a>
                </li>
                <li>
                  <a href="">Bhairab</a>
                </li>
                <li>
                  <a href="">Kishoreganj</a>
                </li>
                <li>
                  <a href="">Tarabo</a>
                </li>
                <li>
                  <a href="">Ghorashal</a>
                </li>
                <li>
                  <a href="">Narsingdi</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="cities">
              <ul>
                <li>
                  <a href="">Tangail</a>
                </li>
                <li>
                  <a href="">Jashore</a>
                </li>
                <li>
                  <a href="">Jhenaidah</a>
                </li>
                <li>
                  <a href="">Kushtia</a>
                </li>
                <li>
                  <a href="">Magura</a>
                </li>
                <li>
                  <a href="">Satkhira</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="cities">
              <ul>
                <li>
                  <a href="">Jamalpur</a>
                </li>
                <li>
                  <a href="">Netrakona</a>
                </li>
                <li>
                  <a href="">Sherpur</a>
                </li>
                <li>
                  <a href="">Chapai Nawabganj</a>
                </li>
                <li>
                  <a href="">Naogaon</a>
                </li>
                <li>
                  <a href="">Pabna</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="cities ">
              <ul>
                <li>
                  <a href="">Sirajganj</a>
                </li>
                <li>
                  <a href="">Dinajpur</a>
                </li>
                <li>
                  <a href="">Saidpur</a>
                </li>
                <li>
                  <a href="">Thakurgaon</a>
                </li>
                <li>
                  <a href="">Panchaghar</a>
                </li>
                <li>
                  <a href="">Tetulia</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="footerBody">
          <Row>
            <Col lg={2}>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="">Help & Support</a>
                </li>
                <li>
                  <a href="">Partner with us </a>
                </li>
                <li>
                  <a href="">Ride with us</a>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Refund & Cancellation </a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Cookie Policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={2}></Col>
            <Col lg={4}>
              <h6>Follow Us</h6>
              <div className="socials">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
              <p>Receive exclusive offers in your mailbox</p>
              <Row>
                <Col lg={8} className="inputmail">
                  <input type="email" placeholder="Enter Your Email" />
                  <IoIosMail />
                </Col>
                <Col lg={4}>
                  <button>Subscribe</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="footer">
          <p>
            All rights Reserved{" "}
            <span className="copyright">
              <FaRegCopyright /> sakibTaimm, 2025
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
