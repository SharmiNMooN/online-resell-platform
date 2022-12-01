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
  const token = localStorage.getItem("token");
  const location = useLocation();
  const [currentState, setCurrentState] = useState("");
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.clear("token");
        localStorage.clear("user");
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
      <Container>
        <Navbar.Brand>
          <Link className="me-2" id="home" to="/">
            {<FaLaptop size={30}></FaLaptop>}
          </Link>
          <Link id="home1" to="/">
            Buy & Sell Used Laptop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item>
              <Nav.Link id="home2" eventKey=" /">
                <Link id="home2" className=" text-dark" to="/">
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <>
              {token && user?.uid ? (
                <Nav.Item>
                  <Nav.Link id="dashboard" eventKey="/dashboard">
                    <Link id="dashboard" className=" text-dark" to="/dashboard">
                      Dashboard
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              ) : (
                ""
              )}
            </>

            <Nav.Item>
              <Nav.Link id="blog" eventKey="/blog">
                <Link id="blog" className=" text-dark me-3" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
            </Nav.Item>

            <>
              {token && user?.uid ? (
                <>
                  <Link id="home4" to="/" className="me-3">
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
                    id="login"
                    className={`my-auto ${
                      currentState === "/login" ? "d-none" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    id="register"
                    className={`my-auto ${
                      currentState === "/login" ? "" : "d-none "
                    }`}
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
