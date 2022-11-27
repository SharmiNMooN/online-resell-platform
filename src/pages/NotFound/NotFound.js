import React from "react";
import { Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="container text-center">
      <h1 className="text-danger">Sorry, This page doesn't exist</h1>
      <Image src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"></Image>
    </div>
  );
};

export default NotFound;
