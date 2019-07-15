
import React, { Component } from 'react';
import { ProductContext } from '../context'; 
import {Link} from 'react-router-dom';
import SingleProductImg from './SingleProductImg';

export default class Carousel extends Component {
  static contextType = ProductContext;
  render() {
    let { featuredProducts : products } = this.context; 
    products = products.map(product => {
      return <SingleProductImg key={product.name} product={product} />
  })
    return (
      <>
      <div id="carouselExampleIndicators" className="carousel slide couraselFix container"  data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner container">
            <div className="carousel-item active">
              <div className="row text-center">
                <div className="col-6 col-md-6 my-3 d-flex align-items-center maxH">
                  {products[0]}
                </div>
                <div className="col-6 col-md-6 my-3 maxH" >
                  <div className="d-flex align-items-center justify-content-center carouselImgContainer">{products[1]}</div>
                  <div className="d-flex align-items-center justify-content-center carouselImgContainer">{products[2]} </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6 col-md-6 my-3 d-flex align-items-center justify-content-center maxH">
                {products[3]}
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
        {/*
          rubric02
          The user should see a button that resembles a left arrow key to
          the left of the product carousel
        */}
        {/* 
          rubric08 
          Clicking on the left arrow should move the product carousel one
          slide back 
        */}
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        {/* 
          rubric03
          The user should see a button that resembles a right arrow key to
          the right of the product carousel
        */}
        {/* 
          rubric07
          Clicking on the right arrow should move the product carousel one
          slide forward. 
        */}
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
      </div>
      </>
    )
  }
}
