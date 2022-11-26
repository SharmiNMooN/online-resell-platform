import React from "react";

import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Col, ListGroup } from "react-bootstrap";
import { FaCheckDouble } from "react-icons/fa";
import BookProduct from "../modals/BookProduct/BookProduct";
import toast from "react-hot-toast";

const Product = ({ product, loadProducts, fromSellerProduct=false }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showBookNowModal, setShowBookNowModal] = React.useState(false);
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

          {!fromSellerProduct? <Card.Link
              className="btn btn-primary"
              onClick={() => {
                if (["admin", "seller"].includes(user.role)) {
                  toast.error(`${user.role} can not buy this product`);
                } else {
                  setShowBookNowModal(true);
                }
              }}
          >
            Book now
          </Card.Link> : <Card.Text>Status: {product.status.toUpperCase()}</Card.Text>}

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
      <BookProduct
        show={showBookNowModal}
        loadProducts={loadProducts}
        onHide={() => setShowBookNowModal(false)}
        product={product}
      />
    </Col>
  );
};

export default Product;
