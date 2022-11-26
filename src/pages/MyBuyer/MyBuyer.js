import React, { useEffect, useState } from "react";
import {Card, Col, Row, Spinner} from "react-bootstrap";
import axios from "axios";
import {PhotoProvider, PhotoView} from "react-photo-view";

const MyBuyer = () => {
  document.title = "MyBuyer";

  const [allBuyers, setAllBuyers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadBuyers() {
    setIsLoading(true);
    let token = localStorage.getItem("token");

    const url = `${process.env.REACT_APP_SERVER_BASEURL}/users/my-buyers`;
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(`My Buyers>`, data.data);
          setAllBuyers(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadBuyers();
  }, []);

  return (
    <div>
      <Row>
        <h3 className="text-center text-info fw-bolder">My Buyers</h3>
        {isLoading ? (
          <div className="text-center">
            <Spinner className="" animation="border" variant="danger" />
          </div>
        ) : (
          ""
        )}

        {allBuyers?.map((buyer, index) => (
          <Col sx={12} sm={12} md={6} lg={6}>
              <Card className="mb-2" border="warning">
                <Card.Body>
                  <Row>
                    <Col sx={12} sm={12} md={6} lg={6}>
                      <Card.Title className="fw-bold">Buyer: {buyer.userName}</Card.Title>
                      <Card.Title>Buyer Email:{buyer.userEmail}</Card.Title>
                      <Card.Subtitle>Buyer Phone:{buyer.mobileNumber}</Card.Subtitle>
                      <Card.Text>Meet Location:{buyer.meetLocation}</Card.Text>
                    </Col>
                    <Col sx={12} sm={12} md={6} lg={6}>
                      <PhotoProvider>
                        <PhotoView src={buyer.image}>
                          <Card.Img
                              variant="top"
                              style={{ maxHeight: "200px", maxWidth: "150px" }}
                              src={buyer.image}
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

export default MyBuyer;
