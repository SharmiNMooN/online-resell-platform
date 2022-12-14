import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./category.css";
import { Col } from "react-bootstrap";

const Category = ({ category, isDetails = false }) => {
  return (
    <Col sx={12} sm={12} md={12} lg={12}>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title className="fw-bold text-info">{category.name}</Card.Title>
          <PhotoProvider>
            <PhotoView src={category.image}>
              <Card.Img
                variant="top"
                style={{ maxHeight: "200px" }}
                src={category.image}
              />
            </PhotoView>
          </PhotoProvider>

          <Card.Text>{category.description}</Card.Text>
          <Link className="btn btn-color" to={`/category/${category._id}`}>
            View Products
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Category;
