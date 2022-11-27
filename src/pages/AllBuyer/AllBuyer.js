import React, { useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaCheckDouble, FaUserTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import ConfirmDialog from "../modals/ConfirmDialog/ConfirmDialog";

const AllBuyer = () => {
  document.title = "AllBuyer";

  const [userId, setUserId] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  let token = localStorage.getItem("token");

  const {
    data: allBuyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      const url = `${process.env.REACT_APP_SERVER_BASEURL}/users/buyers`;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        });

        console.log(`res.data---`, res.data);
        return res.data.data;
      } catch (error) {}
    },
  });

  async function deleteUser(userId) {
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/users/delete-user`;
    await axios
      .delete(url, {
        data: JSON.stringify({ userId }),
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(`Buyer deleted>`, data.data);
        toast.success(`User deleted successfully`);
        refetch();
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  }

  return (
    <div>
      <Row>
        <h3 className="text-center text-info fw-bolder">All Buyers</h3>
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
                  <Col sx={12} sm={12} md={8} lg={8}>
                    <Card.Title className="fw-bold">
                      Buyer: {buyer.name}{" "}
                      <span>
                        {buyer.isVerified ? (
                          <FaCheckDouble className="text-success"></FaCheckDouble>
                        ) : (
                          ""
                        )}
                      </span>{" "}
                    </Card.Title>
                    <Card.Title>Buyer Email:{buyer.email}</Card.Title>
                  </Col>
                  <Col sx={12} sm={12} md={4} lg={4} className="text-center">
                    <FaUserTimes
                      className="h1 m-2 text-danger"
                      onClick={() => {
                        setUserId(buyer._id);
                        setShowConfirmModal(true);
                      }}
                    ></FaUserTimes>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <ConfirmDialog
          title="Are you confirm to DELETE user?"
          show={showConfirmModal}
          userId={userId}
          onHide={() => setShowConfirmModal(false)}
          handler={deleteUser}
        ></ConfirmDialog>
      </Row>
    </div>
  );
};

export default AllBuyer;
