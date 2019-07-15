import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Carousel from "../components/Carousel";
import { Checkbox } from "../components/Checkbox";
import { useContext } from "react";
import { ProductContext } from "../context";
import About from "./About";
import SingleProductImg from "../components/SingleProductImg";

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
        {/* Carousel */}
        <div className="content-section-heading text-center mt-5">
            <h2 className="mb-5 orange">Our Special Offer</h2>
          </div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide couraselFix container"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row text-center">
                <div className="col-6 col-md-6 my-3 d-flex align-items-center maxH">
                  {products[0]}
                </div>
                <div className="col-6 col-md-6 my-3 maxH">
                  <div className="d-flex align-items-center justify-content-center carouselImgContainer">
                    {products[1]}
                  </div>
                  <div className="d-flex align-items-center justify-content-center carouselImgContainer">
                    {products[2]}{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6 col-md-6 my-3 d-flex align-items-center justify-content-center maxH">
                  {products[6]}
                </div>
                <div className="col-6 col-md-6 my-3 d-flex align-items-center justify-content-center maxH">
                  {products[4]}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col my-3 d-flex align-items-center justify-content-center maxH">
                  {products[5]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Grocery Cloud. All Rights Reserved
        </div>
      </>
    );
  }
}
