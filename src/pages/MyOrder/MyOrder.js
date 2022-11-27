import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const MyOrder = () => {
  document.title = "MyOrder";

  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadMyOrders() {
    setIsLoading(true);
    let token = localStorage.getItem("token");

    const url = `${process.env.REACT_APP_SERVER_BASEURL}/orders/my-orders`;
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(`My orders>`, data.data);
        setAllOrders(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadMyOrders();
  }, []);

  return (
    <div>
      <Row>
        <h3 className="text-center text-info fw-bolder">My orders</h3>
        {isLoading ? (
          <div className="text-center">
            <Spinner className="" animation="border" variant="danger" />
          </div>
        ) : (
          ""
        )}

        {allOrders?.map((order, index) => (
          <Col sx={12} sm={12} md={6} lg={6}>
            <Card className="mb-2" border="warning">
              <Card.Body>
                <Row>
                  <Col sx={12} sm={12} md={6} lg={6}>
                    <Card.Title className="fw-bold">{order.name}</Card.Title>
                    <Card.Title>Price:{order.buyingPrice}/-</Card.Title>
                    <Card.Subtitle>
                      order Phone:{order.mobileNumber}
                    </Card.Subtitle>
                    <Card.Text>Meet Location:{order.meetLocation}</Card.Text>

                    {order.paymentStatus === "unpaid" ? (
                      <Link to={`/payment/${order._id}`}>
                        <Card.Text className="btn btn-primary btn-sm">
                          Pay
                        </Card.Text>
                      </Link>
                    ) : (
                      <Card.Text className="btn btn-success btn-sm disabled">
                        Paid
                      </Card.Text>
                    )}
                  </Col>
                  <Col sx={12} sm={12} md={6} lg={6}>
                    <PhotoProvider>
                      <PhotoView src={order.image}>
                        <Card.Img
                          variant="top"
                          style={{ maxHeight: "200px", maxWidth: "150px" }}
                          src={order.image}
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyOrder;
