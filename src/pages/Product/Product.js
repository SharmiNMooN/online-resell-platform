import React from "react";

import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Col, ListGroup } from "react-bootstrap";
import { FaCheckDouble } from "react-icons/fa";

const Product = ({ product }) => {
  return (
    <Col sx={12} sm={12} md={12} lg={12}>
      <Card className="mb-2" border="warning">
        <Card.Body>
          <Card.Title className="fw-bold">{product.name}</Card.Title>
          <PhotoProvider>
            <PhotoView src={product.image}>
              <Card.Img
                variant="top"
                style={{ maxHeight: "200px" }}
                src={product.image}
              />
            </PhotoView>
          </PhotoProvider>
          <Card.Text>Description:{product.description}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>Location: {product.location}</ListGroup.Item>
          <ListGroup.Item>
            Years of use:
            {new Date().getFullYear() - Number(product.yearOfPurchase)} years
          </ListGroup.Item>
          <ListGroup.Item>Condition: {product.condition}</ListGroup.Item>
          <ListGroup.Item>
            Original Price: {product.purchasePrice}/-tk
          </ListGroup.Item>
          <ListGroup.Item>
            Selling Price: {product.sellingPrice}/-tk
          </ListGroup.Item>
          <ListGroup.Item>
            Original Price: {product.purchasePrice}/-tk
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link
            className="btn btn-primary"
            // to={`/category/${product._id}`}
          >
            Buy
          </Card.Link>
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            Seller Name: {product.sellerName}{" "}
            <span>
              {product.isVerifiedSeller ? (
                <FaCheckDouble className="text-success"></FaCheckDouble>
              ) : (
                ""
              )}
            </span>{" "}
            || Posted At: {new Date(product.createdAt).toLocaleString()}
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
