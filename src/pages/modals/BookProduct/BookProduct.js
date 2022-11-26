import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function BookProduct(props) {
  console.log({ context: BookProduct.name, props });
  const user = JSON.parse(localStorage.getItem("user"));
  console.log({ user });
  const { product } = props;
  const token = localStorage.getItem("token");
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const mobileNumber = form.mobileNumber.value;
    const meetLocation = form.meetLocation.value;

    const payload = {
      mobileNumber,
      meetLocation,
      name: product.name,
      description: product.description,
      image: product.image,
      productId: product._id,
      buyingPrice: product.sellingPrice,
      customerId: user._id,
      sellerId: product.sellerId,
      paymentStatus: "unpaid",
    };

    axios
      .post(
        `${process.env.REACT_APP_SERVER_BASEURL}/orders`,
        JSON.stringify(payload),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(`order confirmed...`, result);
        props.loadProducts();
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        props.onHide();
      });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Buy Laptop: {product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="w-60 w-sm-100">
          <>
            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Customer name"
            >
              <Form.Control
                placeholder="Customer name"
                name="customerName"
                value={user.name}
                disabled
              />
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Customer email"
            >
              <Form.Control
                placeholder="Customer email"
                name="customerEmail"
                value={user.email}
                disabled
              />
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Product name"
            >
              <Form.Control
                placeholder="Product name"
                name="name"
                value={product.name}
                disabled
              />
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Product description"
            >
              <Form.Control
                placeholder="Product description"
                name="description"
                value={product.description}
                disabled
              />
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Product price"
            >
              <Form.Control
                placeholder="Product price"
                name="buyingPrice"
                value={product.sellingPrice}
                disabled
              />
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Mobile number"
            >
              <Form.Control placeholder="Mobile number" name="mobileNumber" />
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Meeting Location"
            >
              <Form.Control
                as="textarea"
                name="meetLocation"
                required
                placeholder="Meeting location"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </>

          <Button
            variant="danger"
            className="border-4 mt-2 border-light me-2"
            type="submit"
          >
            Confirm Order
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default BookProduct;
