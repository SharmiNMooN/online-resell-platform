import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaLaptop } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ReactTooltip from "react-tooltip";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [currentState, setCurrentState] = useState("");
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.clear("token");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setCurrentState(location.pathname);
  }, [location.pathname]);
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container className="text-right">
        <Navbar.Brand>
          <Link className="me-2" to="/">
            {<FaLaptop size={30}></FaLaptop>}
          </Link>
          <Link className="nav-title text-warning bold-fw" to="/">
            Buy & Sell Used Laptop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="me-auto m-auto">
            <Nav.Item>
              <Nav.Link eventKey="/">
                <Link className=" text-dark" to="/">
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <>
              {user?.uid ? (
                <Nav.Item>
                  <Nav.Link eventKey="/dashboard">
                    <Link className=" text-dark" to="/dashboard">
                      Dashboard
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              ) : (
                ""
              )}
            </>

            <Nav.Item>
              <Nav.Link eventKey="/category">
                <Link className=" text-dark " to="/category">
                  Categories
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="/blog">
                <Link className=" text-dark me-3" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
            </Nav.Item>

            <>
              {user?.uid ? (
                <>
                  <Link to="/" className="me-3">
                    {user?.photoURL ? (
                      <Image
                        style={{ height: "30px" }}
                        data-tip={user?.displayName}
                        roundedCircle
                        src={user?.photoURL}
                      ></Image>
                    ) : (
                      <FaUser></FaUser>
                    )}
                  </Link>
                  <ReactTooltip />
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    className={`me-3${
                      currentState === "/login" ? "d-none" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={`${currentState === "/login" ? "" : "d-none "}`}
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
