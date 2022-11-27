import React from "react";
import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  document.title = "Payment";
  const data = useLoaderData();
  const order = data.data;
  console.log({ order });
  const { buyingPrice, name } = order;

  return (
    <div>
      <h3 className="">Payment for {name}</h3>
      <p className="">
        Please pay <strong>${buyingPrice}</strong> for your product
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
