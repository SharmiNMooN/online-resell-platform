import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  document.title = "Dashboard";
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <>
        {user.role === "admin" ? (
          <Row className="m-auto">
            <Col className="mt-2" sx={12} sm={12} md={4} lg={4}>
              <Card
                className="mb-2"
                border="warning"
                bg="warning"
                onClick={() => {
                  navigate("/all-sellers");
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center">
                    All Sellers
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-2" sx={12} sm={12} md={4} lg={4}>
              <Card
                className="mb-2"
                border="warning"
                bg="danger"
                onClick={() => {
                  navigate("/reported-product");
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center">
                    {" "}
                    Reported Product
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-2" sx={12} sm={12} md={4} lg={4}>
              <Card
                className="mb-2"
                border="warning"
                bg="info"
                onClick={() => {
                  navigate("/all-buyers");
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center">
                    {" "}
                    All Buyers
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </>

      <>
        {user.role === "seller" ? (
          <Row>
            <Col className="mt-2" sx={12} sm={12} md={4} lg={4}>
              <Card
                className="mb-2"
                border="warning"
                bg="warning"
                onClick={() => {
                  navigate("/add-product");
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center">
                    Add A product
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-2" sx={12} sm={12} md={4} lg={4}>
              <Card
                className="mb-2"
                border="warning"
                bg="info"
                onClick={() => {
                  navigate("/my-products");
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center">
                    {" "}
                    My Products
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-2" sx={12} sm={12} md={4} lg={4}>
              <Card
                className="mb-2"
                border="warning"
                bg="success"
                onClick={() => {
                  navigate("/my-buyers");
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center">
                    My buyers
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </>

      <>
        {user.role === "buyer" ? (
          <Row>
            <Col className="mt-2 m-auto" sx={12} sm={12} md={6} lg={6}>
              <Card
                className="mb-2 card-bg-color text-white"
                border="warning"
                onClick={() => {
                  navigate("/my-orders");
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center">
                    My orders
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default Dashboard;
