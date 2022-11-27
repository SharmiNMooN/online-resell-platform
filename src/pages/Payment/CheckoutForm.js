import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ order }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { buyingPrice, _id } = order;

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/orders/create-payment-intent`;
    axios
      .post(url, JSON.stringify({ price: buyingPrice }), {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setClientSecret(data.data.clientSecret);
        console.log(`Client secret>`, data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [buyingPrice, token]);

  console.log(stripe, !clientSecret, processing);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        price: buyingPrice,
        transactionId: paymentIntent.id,
        email: user.email,
        orderId: _id,
      };

      const url = `${process.env.REACT_APP_SERVER_BASEURL}/orders/payments`;
      axios
        .post(url, JSON.stringify(payment), {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        })
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          if (data.success) {
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);

            navigate("/my-orders");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-50 m-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-danger text-center">{cardError}</p>
      {success && (
        <div>
          <p className="text-success">{success}</p>
          <p>
            Your transactionId: <span className="fw-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
