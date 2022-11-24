import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaLaptop } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const [currentState, setCurrentState] = useState("");
  const handleLogOut = () => {
  };
  useEffect(() => {
    setCurrentState(location.pathname);
  });
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link className="me-3" to="/">
            {<FaLaptop size={30}></FaLaptop>}
          </Link>
          <Link to="/">Buy & Sell Used Laptop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="me-auto m-auto">
            <Nav.Item>
              <Nav.Link eventKey="/category">
                <Link className=" text-dark" to="/services">
                  Categories
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="/blog">
                <Link className=" text-dark" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
