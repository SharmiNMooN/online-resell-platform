import React, { useContext, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Register.css";

const Register = () => {
  document.title = "Registration";

  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(`Successfully registered`, user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);

        const payload = {
          email: user.email,
          name: name,
          image: photoURL,
        };
        console.log({ payload, user });
        fetch(`${process.env.REACT_APP_SERVER_BASEURL}/users/register`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log({ data, result });
            toast.success("Successfully registered");
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="w-60 register-bg">
      <Row>
        <Col className="d-none d-sm-block m-auto">
          <div>
            <Image
              height={400}
              width={500}
              roundedCircle
              src="https://img.freepik.com/premium-vector/immigration-template-hand-drawn-cartoon-flat-illustration-document-with-visa-passport_2175-7964.jpg?w=2000"
            ></Image>
          </div>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit} className="w-50 w-sm-100 m-auto">
            <p className="text-center fw-bold text-white h1 mb-5 mx-1 mx-md-4 mt-4">
              Sign up
            </p>
            {isLoading ? (
              <div className="text-center">
                <Spinner className="" animation="border" variant="danger" />
              </div>
            ) : (
              ""
            )}
            <Form.Group className="text-white my-4 " controlId="formBasicEmail">
              <Form.Label>Your Full Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                className="border-4 border-dark"
                placeholder="Your Full Name"
              />
            </Form.Group>
            <Form.Group className="text-white my-4" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                name="photoURL"
                type="text"
                className="border-4 border-dark"
                placeholder="Phot URL"
              />
            </Form.Group>

            <Form.Group className="text-white my-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                className="border-4 border-dark"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group
              className="text-white my-4"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                className="border-4 border-dark"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group
              className="text-white d-flex "
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                onClick={handleAccepted}
                label={
                  <>
                    I agree all statements in{" "}
                    <Link to="/terms" className="text-dark">
                      {" "}
                      Terms of service
                    </Link>
                  </>
                }
              />
            </Form.Group>
            <Button
              className="mb-4 mt-2 me-2 align-item-start"
              variant="light"
              type="submit"
              disabled={!accepted}
            >
              Register
            </Button>

            <Button className="mb-4 mt-2 align-item-end" variant="warning">
              <Link to="/login">Login</Link>
            </Button>
            <Form.Text className=" mb-4 text-danger align-item-center me-2">
              {error}
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
