import React from 'react';
import Back from '../../components/BackButton';

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-capitalize">
                    <h1 className="mb-5">your cart is currently empty</h1>
                    <Back />
                </div>
            </div>
        </div>
    )
}
