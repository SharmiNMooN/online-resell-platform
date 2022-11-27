import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "../Product/Product";

const CategoryWiseProduct = () => {
  document.title = "CategoryWiseProduct";

  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { categoryId } = useParams();

  async function loadProducts() {
    setIsLoading(true);
    let token = localStorage.getItem("token");

    const url = `${process.env.REACT_APP_SERVER_BASEURL}/products/${categoryId}`;
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(`Category wise product>`, data.data);
        setAllProducts(data.data);
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
        <h3 className="text-center text-info fw-bolder">Used Products List</h3>
        {isLoading ? (
          <div className="text-center">
            <Spinner className="" animation="border" variant="danger" />
          </div>
        ) : (
          ""
        )}

        {allProducts.length ? (
          allProducts?.map((product, index) => (
            <Col sx={12} sm={12} md={6} lg={6}>
              <Product
                key={index}
                product={product}
                loadProducts={loadProducts}
              >
                {" "}
              </Product>
            </Col>
          ))
        ) : (
          <h3 className="text-center">No product found</h3>
        )}
      </Row>
    </div>
  );
};

export default CategoryWiseProduct;
