import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context';

import SingleProductImg from './SingleProductImg';

export default function SingleProduct({product}) {
    const context = useContext(ProductContext);
    const { addToCart } = context;
    const { id, name, price } = product;
    return (
        <div className="col-9 col-md-6 col-lg-3 my-3 d-flex justify-content-around">
            <div className="card">
                <div className="img-container">
                    {/* 
                        rubric23
                        Each grid cell shall have an image of the product displayed
                    */}
                    <SingleProductImg key={product.name} product={product}/>
                </div>
                <div className="d-flex">
                    {/*
                        rubric24
                        Each grid cell shall have a button labeled “Add”
                    */}
                    <button className="btn btn-success mt-2" onClick={() => addToCart(id)}>
                            Add
                    </button>
                    <h5 className="font-italic pt-3 mr-10">
                        {/* 
                            rubric22
                            Each grid cell shall have the price of the product displayed
                        */}
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </div>
                <div className="card-footer d-flex justify-content-around">
                {/* 
                    rubric32
                    If the user clicks on a product name within a grid cell, they should
                    be taken to a product page that is populated with the details of
                    the clicked product 
                */}
                <Link to={`/product/${name}`}>
                    {/* 
                        rubric21
                        Each grid cell shall have the name of the product displayed
                    */}
                    <p className="align-self-center">
                        {name}
                    </p>
                </Link>
                </div>
            </div>
        </div>
    )
}
