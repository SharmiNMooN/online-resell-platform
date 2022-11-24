import React from "react";
import { Outlet } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/shared/Header/Header";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="12">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
