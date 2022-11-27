import React from "react";

import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Col, ListGroup, Row } from "react-bootstrap";
import { FaCheckDouble } from "react-icons/fa";
import BookProduct from "../modals/BookProduct/BookProduct";
import toast from "react-hot-toast";
import ConfirmDialog from "../modals/ConfirmDialog/ConfirmDialog";
import axios from "axios";

const Product = ({ product, loadProducts, fromSellerProduct = false }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showBookNowModal, setShowBookNowModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [productId, setProductId] = React.useState(null);

  async function deleteProduct(productId) {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/products`;
    await axios
      .delete(url, {
        data: JSON.stringify({ productId }),
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(`product deleted>`, data.data);
        toast.success(`Product deleted successfully`);
        loadProducts();
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  }
  async function addToAdverties(productId) {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/products/${productId}`;
    await axios
      .patch(url, JSON.stringify({ isAdvertised: true }), {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(`product updated>`, data.data);
        toast.success(`Product added to adverties list`);
        loadProducts();
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  }

  return (
    <Col sx={12} sm={12} md={12} lg={12}>
      <Card className="mb-2" border="warning">
        <Card.Body>
          <Card.Title className="fw-bold">{product.name}</Card.Title>
          <PhotoProvider>
            <PhotoView src={product.image}>
              <Card.Img
                className="m-auto"
                variant="top"
                style={{
                  maxHeight: "200px",
                  maxWidth: "150px",
                }}
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
          {!fromSellerProduct ? (
            <Card.Link
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
            </Card.Link>
          ) : (
            <Card.Text>Status: {product.status.toUpperCase()}</Card.Text>
          )}

          <Row>
            <Col sx={6} sm={6} md={3} lg={2}>
              {" "}
              <Card.Text
                className="btn btn-danger h3 m-2 text-white"
                onClick={() => {
                  setProductId(product._id);
                  setShowConfirmModal(true);
                }}
              >
                DELETE
              </Card.Text>
            </Col>
            {user.role === "seller" && product.status === "available" ? (
              <Col sx={6} sm={6} md={4} lg={6}>
                {" "}
                <Card.Text
                  className="btn btn-warning h3 m-2 text-white"
                  onClick={() => {
                    addToAdverties(product._id);
                  }}
                >
                  ADVERTIES ITEM
                </Card.Text>
              </Col>
            ) : (
              ""
            )}
          </Row>
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

      <ConfirmDialog
        title="Are you confirm to DELETE product?"
        show={showConfirmModal}
        userId={productId}
        onHide={() => setShowConfirmModal(false)}
        handler={deleteProduct}
      ></ConfirmDialog>
    </Col>
  );
};

export default Product;
