import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

function AddProduct() {
  const { data: allCategories } = useLoaderData();
  console.log(allCategories);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log({ user });
  const token = localStorage.getItem("token");
  const [categoryId, setCategoryId] = useState(null);
  const [condition, setCondition] = useState("good");
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const description = form.description.value;
    const image = form.image.value;
    const location = form.location.value;
    const mobileNumber = form.mobileNumber.value;
    const name = form.name.value;
    const purchasePrice = form.purchasePrice.value;
    const sellingPrice = form.sellingPrice.value;
    const yearOfPurchase = form.yearOfPurchase.value;

    const payload = {
      sellerId: user._id,
      categoryId,
      condition,
      description,
      image,
      location,
      mobileNumber,
      name,
      purchasePrice,
      sellingPrice,
      status: "available",
      yearOfPurchase,
    };

    console.log(`add product payload`, payload);

    axios
      .post(
        `${process.env.REACT_APP_SERVER_BASEURL}/products`,
        JSON.stringify(payload),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(`Product created...`, result);
        toast.success(`Product created successfully`);
        navigate("/my-products");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error(`An error occur to create product ${error.message}`);
      })
      .finally(() => {});
  }

  return (
    <Container className="w-60">
      <h1 className="text-center">Add New Product</h1>
      <Row>
        <Col className="d-none d-sm-block m-auto" sx={12} sm={12} md={8} lg={8}>
          <Form onSubmit={handleSubmit} className="w-60 w-sm-100">
            <>
              <FloatingLabel className="mb-3" label="Select category">
                <Form.Select
                  onChange={(event) => {
                    setCategoryId(event.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Select Category</option>
                  {allCategories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Product condition">
                <Form.Select
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Select Product condition</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Name">
                <Form.Control name="name" required />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Description">
                <Form.Control
                  as="textarea"
                  name="description"
                  required
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Image">
                <Form.Control name="image" required />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="location">
                <Form.Control name="location" required />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Mobile Number">
                <Form.Control name="mobileNumber" required />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Purchase Price">
                <Form.Control required name="purchasePrice" />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Selling Price">
                <Form.Control name="sellingPrice" required />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Year Of Purchase">
                <Form.Control name="yearOfPurchase" required />
              </FloatingLabel>
            </>

            <Button
              variant="primary"
              className="border-4 mt-2 border-light me-2"
              type="submit"
            >
              Add Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default AddProduct;
