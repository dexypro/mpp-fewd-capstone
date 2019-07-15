import React from "react";
import { Link } from "react-router-dom";
import Back from "../../components/BackButton";

export default function CartTotals({ value }) {
  const {
    cartSubTotal,
    cartTax,
    cartTotal,
    clearCart,
    cartShipping,
    onSubmitCheckout
  } = value;
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
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase 
                        mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span>subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span>shipping : </span>
              <strong>$ {cartShipping} </strong>
            </h5>
            <h5>
              <span>tax (10%): </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span>total : </span>
              <strong id="totalCost">$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
