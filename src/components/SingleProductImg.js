import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleProductImg({product}) {
    const { name, imagelink } = product;
    return (
        /*
            rubric09
            If the user clicks on a product image, they should be taken to a
            product page that is populated with the details of the clicked
            product 
        */
       /*
            rubric31
            If the user clicks on a product image within a grid cell, they should
            be taken to a product page that is populated with the details of
            the clicked product 
       */
        <Link to={`/product/${name}`}>
            <img className="img-size" src={imagelink} alt="" />
        </Link>
    )
}
