import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Carousel from "../components/Carousel";
import { Checkbox } from "../components/Checkbox";
import { useContext } from "react";
import { ProductContext } from "../context";
import About from "./About";
import SingleProductImg from "../components/SingleProductImg";
import { FaLinkedin } from "react-icons/fa";

export default class Home extends Component {
  static contextType = ProductContext;
  render() {
    let { featuredProducts: products } = this.context;
    products = products.map(product => {
      return <SingleProductImg key={product.name} product={product} />;
    });
    return (
      <>
        <About />
        {/* Featured products */}
        <div className="container">
          <div className="content-section-heading text-center mt-5">
            <h2 className="mb-5 orange">Frozen Foods</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[0]}
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[8]}
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[11]}
            </div>
          </div>
          <div className="content-section-heading text-center mt-5">
            <h2 className="mb-5 orange">Fresh Fruits</h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[12]}
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[14]}
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[13]}
            </div>
          </div>
          <div className="content-section-heading text-center mt-5">
            <h2 className="mb-5 orange">Baby Care</h2>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[6]}
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[15]}
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
              {products[16]}
            </div>
          </div>
        </div>

        <footer className="page-footer font-small unique-color-dark pt-4">
          {/* Footer Elements */}
          <div className="container">
            {/* Call to action */}
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="btn btn-outline-white btn-rounded">
                  Sign up!
                </a>
              </li>
            </ul>
            {/* Call to action */}
          </div>
          <div className="copyright">
          © {new Date().getFullYear()} Grocery Cloud. All Rights Reserved
        </div>
        </footer>

        
      </>
    );
  }
}
