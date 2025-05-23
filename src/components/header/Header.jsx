import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <Navbar expand="lg" id="navMenu" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <span className="delivery">Deliver to:</span>
            <span className="location">
              <IoLocationSharp />
              Current Location
            </span>

            <a className="delivery" href="">
              Mohammadpur Bus Stand, Dhaka
            </a>
          </Nav>
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <FaSearch />
          </Form>
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#login">
              <span className="user">Sakib Tamim</span>
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
