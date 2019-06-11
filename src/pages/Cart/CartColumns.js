import React from 'react'

export default function CartColumns() {
    return (
        /*
            rubric47
            The user should a table displaying the product image, name, unit
            price, quantity as an input field, total cost, and a remove button
            for each product in the shopping cart. 
        */
        <div className="container text-center d-none d-lg-block mt-5">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">image</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">unit price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">cost</p>
                </div>
            </div>
        </div>
    )
}
