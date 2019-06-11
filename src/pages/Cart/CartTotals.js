import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart, cartShipping, onSubmitCheckout } = value;
    return (
        <>
        <div className="container mb-5">
            <div className="row mt-5">
                {/* 
                    rubric49
                    The user should see a section showing the subtotal cost of all the
                    items in the shopping cart, the shipping cost, the tax cost, and a
                    total cost of all of the items in the shipping cost. 
                */}
                <div className="col-10 mx-auto col-lg-6 col-sm-6 mr-sm-auto text-right text-capitalize">
                    <Link to='/'>
                        <button className="btn btn-outline-danger text-uppercase 
                        mb-3 px-5" type="button" onClick={() => clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span>
                            subtotal : </span>
                        <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span>
                            shipping : </span>
                        <strong>$ {cartShipping} </strong>
                    </h5>
                    <h5>
                        <span>
                            tax (10%): </span>
                        <strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span>
                            total : </span>
                        <strong id="totalCost">$ {cartTotal}</strong>
                    </h5>
                </div>
                <div className="col-10 mx-auto col-lg-6 text-center mt-sm-5 mb-sm-5">
                    {/* 
                        rubric48
                        The user should see a form labeled “Enter Shipping Details” that
                        has text input fields for the users name, address, city, and phone
                        number. These input fields should have placeholders that show
                        what they represent. 
                    */}
                    <h4 className="text-center">Enter Shipping Details</h4>
                     <form id="checkoutForm" onSubmit={onSubmitCheckout}>
                        <div className="form-group">
                            <input type="text" className="form-control w-75" id="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control w-75" id="address" placeholder="Address" required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control w-75" id="city" placeholder="City" required/>
                        </div>
                        <div className="form-group">
                            <input 
                                type="tel" 
                                className="form-control w-75" 
                                name="phone" 
                                id="phone" 
                                placeholder="Phone Number" required
                            />
                        </div>
                        {/* 
                            rubric50
                            The user should see a checkout button
                        */}
                        {/* 
                            rubric52
                            The form should show validation errors if the form isn’t filled out
                            correctly and the checkout button is pressed (HTML5 integrated validation)
                        */}
                        <button type="submit" className="btn btn-primary w-50">Checkout</button>
                    </form>
                </div>
            </div>
        </div>  
        </>
    )
}

