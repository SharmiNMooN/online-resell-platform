import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Col } from "react-bootstrap";

const Category = ({ category, isDetails = false }) => {
  return (
    <Col sx={12} sm={12} md={12} lg={12}>
      <Card className="mb-2" border="warning">
        <Card.Body>
          <Card.Title className="fw-bold">{category.name}</Card.Title>
          <PhotoProvider>
            <PhotoView src={category.image}>
              <Card.Img
                variant="top"
                style={{ maxHeight: "200px" }}
                src={category.image}
              />
            </PhotoView>
          </PhotoProvider>

          <Card.Text>
            {category.description.length > 100 ? (
              <>
                {category.description.slice(0, 100) + "..."}{" "}
                <Link to={`/category/${category._id}`}>See More</Link>{" "}
              </>
            ) : (
              category.description
            )}
          </Card.Text>
          {isDetails === true ? (
            <Link className="btn btn-warning" to={`/services/${category._id}`}>
              View details
            </Link>
          ) : (
            ""
          )}
        </Card.Body>
        {/* <Card.Footer className="d-flex justify-content-between">
          Price: {category.price}/- tk
        </Card.Footer> */}
      </Card>
    </Col>
  );
};

export default Category;
