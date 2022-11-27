import React from "react";
import MovingText from "react-moving-text";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../../images/banner1.jpg";
import Banner2 from "../../../images/banner2.jpg";
import Banner3 from "../../../images/banner3.jpg";

function Slider() {
  return (
    <Carousel className="mb-3" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <MovingText
            className="h1 text-warning"
            type="jelly"
            duration="1000ms"
            timing="linear"
            iteration="infinite"
          >
            Used Laptop Computer
          </MovingText>
          <h3> Sell all Bangladesh </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={Banner2} alt="Second slide" />

        <Carousel.Caption>
          <MovingText
            className="h1 text-warning"
            type="effect3D"
            duration="1000ms"
            timing="linear"
            iteration="infinite"
          >
            Used Laptop Computer
          </MovingText>
          <h3> Sell all Bangladesh</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />

        <Carousel.Caption>
          <MovingText
            className="h1 text-warning"
            type="effect3D"
            duration="1000ms"
            timing="linear"
            iteration="infinite"
          >
            Used Laptop Computer
          </MovingText>
          <h3>Sell all Bangladesh</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
