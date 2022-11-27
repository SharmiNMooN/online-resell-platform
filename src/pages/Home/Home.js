import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import axios from "axios";

import Slider from "../shared/Slider/Slider";
import Category from "../Category/Category";
import AdvertiesProduct from "../AdvertiesProduct/AdvertiesProduct";

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
      <Row>
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
      </Row>
    </div>
  );
};

export default Home;
