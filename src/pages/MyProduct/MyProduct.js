import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import Product from "../Product/Product";

const MyProduct = () => {
    document.title = "MyProduct";

    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function loadProducts() {
        setIsLoading(true);
        let token = localStorage.getItem("token");

        const url = `${process.env.REACT_APP_SERVER_BASEURL}/products/my-product`;
        await axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "content-type": "application/json",
                },
            })
            .then((res) => res.data)
            .then((data) => {
                console.log(`My product>`, data.data);
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
                <h3 className="text-center text-info fw-bolder">My Product</h3>
                {isLoading ? (
                    <div className="text-center">
                        <Spinner className="" animation="border" variant="danger" />
                    </div>
                ) : (
                    ""
                )}
                {allProducts?.map((product, index) => (
                    <Col sx={12} sm={12} md={6} lg={6}>
                        <Product
                            key={index}
                            product={product}
                            fromSellerProduct={true}
                            loadProducts={loadProducts}
                        >
                            {" "}
                        </Product>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyProduct;
