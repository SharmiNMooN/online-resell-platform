import React from "react";
import { Nav } from "react-bootstrap";
import FooterImg from "../../../images/footer-img.png";
const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="m-auto container  mt-3" style={footerStyle}>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid  text-md-left">
          <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-6 text-center mt-md-0 mt-3 m-auto">
              <h5 className="text-uppercase text-black bold-fw">
                Buy & Sell Used Laptop
              </h5>
              <p className="mt-2 text-black bold-fw">
                A open platform for resell used laptop for any brand.
              </p>
              <div className="mt-4">
                <h5 className="text-center">Navigations</h5>
                <Nav className="flex-column text-center">
                  <Nav.Link className="text-black" href="/blog">
                    Blog
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-black bold-fw text-center py-3">
          © 2022 Copyright:
          <Nav.Link className="bold-fw" href="/home">
            {" "}
            BUY & SELL USED LAPTOP
          </Nav.Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
