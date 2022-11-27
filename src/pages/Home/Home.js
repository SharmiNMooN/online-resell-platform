import React from "react";

import { useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import Slider from "../shared/Slider/Slider";
import Category from "../Category/Category";

const Home = () => {
  const { data: allCategories } = useLoaderData();
  console.log(allCategories);
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

        {/* <Col sx={12} sm={12} md={3} lg={3}></Col> */}
      </Row>
    </div>
  );
};

export default Home;
