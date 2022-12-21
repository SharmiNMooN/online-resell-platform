import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { Col, FloatingLabel, Form, Image, Row } from "react-bootstrap";

import axios from "axios";

import Slider from "../shared/Slider/Slider";
import Category from "../Category/Category";
import AdvertiesProduct from "../AdvertiesProduct/AdvertiesProduct";
import Button from "react-bootstrap/Button";

import "./Home.css";
const Home = () => {
  document.title = "Home";
  const { data: allCategories } = useLoaderData();
  console.log(allCategories);
  const [adverties, setAdverties] = useState([]);

  async function loadAdvertiesProduct() {
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/products/adverties`;
    await axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        console.log(data.data);
        setAdverties(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadAdvertiesProduct();
  }, []);

  return (
    <div>
      <Slider></Slider>
      <Row className="custom-bg">
        <Col sx={12} sm={12} md={12} lg={12}>
          <h3 className="text-center text-primary fw-bolder">
            Used Product Categories
          </h3>
        </Col>

        {allCategories.map((category, index) => (
          <Col className="mt-2" sx={12} sm={12} md={4} lg={4}>
            <Category
              key={index}
              category={category}
              isDetails={false}
            ></Category>
          </Col>
        ))}

        <Col sx={12} sm={12} md={12} lg={12} className="mt-2">
          {adverties.length ? (
            <h2 className="text-primary text-center"> Adverties product</h2>
          ) : (
            ""
          )}

          <Row>
            {adverties.length
              ? adverties?.map((product, index) => (
                  <Col sx={12} sm={12} md={6} lg={4}>
                    <AdvertiesProduct
                      key={index}
                      product={product}
                      loadProducts={loadAdvertiesProduct}
                    >
                      {" "}
                    </AdvertiesProduct>
                  </Col>
                ))
              : ""}
          </Row>
        </Col>

        <Col
          sx={12}
          sm={12}
          md={12}
          lg={12}
          className="mt-4 bg-light text-dark"
        >
          <h2 className="text-primary text-center text-decoration-underline">
            {" "}
            Contact Us
          </h2>
          <Row className="mt-4">
            <Col
              className=" mb-2 d-none d-sm-block"
              sx={12}
              sm={12}
              md={12}
              lg={12}
            >
              <div className="text-center">
                <Image
                  height={200}
                  width={300}
                  roundedCircle
                  src="https://media.istockphoto.com/id/1312566254/photo/contact-us-concept-icon-telephone-address-and-email-on-blue-background-3d-illustration.jpg?b=1&s=170667a&w=0&k=20&c=DkGuYrbbcZc3_zbRZKOq6qhjZ-xNqEkVzU1RIlrabmY="
                ></Image>
              </div>
            </Col>
            <Col sx={12} sm={12} md={12} lg={12}>
              <Form
                onSubmit={(event) => {
                  event.preventDefault();
                  event.target.reset();
                }}
                className="w-50 w-sm-100 m-auto"
              >
                <FloatingLabel className="mb-2" label="Email">
                  <Form.Control
                    name="email"
                    type="email"
                    className="border-4 border-dark"
                    placeholder="Enter email"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel className="mb-2" label="Phone Number">
                  <Form.Control
                    name="phone"
                    type="phone"
                    className="border-4 border-dark"
                    placeholder="Enter phone"
                    required
                  />
                </FloatingLabel>

                <FloatingLabel className="mb-2" label="Message">
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    required
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <div className="mb-4">
                  <Button
                    variant="primary"
                    className="border-4 border-dark me-2"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
