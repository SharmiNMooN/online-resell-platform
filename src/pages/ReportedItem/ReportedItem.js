import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { FaCheckDouble, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import ConfirmDialog from "../modals/ConfirmDialog/ConfirmDialog";

const ReportedItem = () => {
  document.title = "ReportedItem";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productId, setProductId] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  let token = localStorage.getItem("token");

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

  async function loadProducts() {
    setIsLoading(true);

    const url = `${process.env.REACT_APP_SERVER_BASEURL}/products/reported`;
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(`All products>`, data.data);
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <Row>
        <h3 className="text-center text-info fw-bolder">Reported products</h3>
        {isLoading ? (
          <div className="text-center">
            <Spinner className="" animation="border" variant="danger" />
          </div>
        ) : (
          ""
        )}

        {products?.map((product, index) => (
          <Col sx={12} sm={12} md={6} lg={6}>
            <Card className="mb-2" border="warning">
              <Card.Body>
                <Row>
                  <Col sx={12} sm={12} md={8} lg={8}>
                    <Card.Title className="fw-bold">
                      product: {product.name}{" "}
                      <span>
                        {product.isVerified ? (
                          <FaCheckDouble className="text-success"></FaCheckDouble>
                        ) : (
                          ""
                        )}
                      </span>{" "}
                    </Card.Title>
                    <Card.Subtitle>
                      product Email:{product.description}
                    </Card.Subtitle>
                  </Col>
                  <Col sx={12} sm={12} md={4} lg={4} className="text-center">
                    <FaTrash
                      className="h1 m-2 text-danger"
                      onClick={() => {
                        setProductId(product._id);
                        setShowConfirmModal(true);
                      }}
                    ></FaTrash>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <ConfirmDialog
          title="Are you confirm to DELETE product?"
          show={showConfirmModal}
          userId={productId}
          onHide={() => setShowConfirmModal(false)}
          handler={deleteProduct}
        ></ConfirmDialog>
      </Row>
    </div>
  );
};

export default ReportedItem;
