import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';
import Back from '../components/BackButton';
import {FaSearch} from 'react-icons/fa';
import QtyInput from '../components/QtyInput';

export default class Product extends Component {
    constructor(props){
        super(props)
        // console.log(this.props)
        this.state = {
            name: this.props.match.params.name
        }
    }
    static contextType = ProductContext;
    // componentDidMount(){}
    render() {
        const { getProduct, addToCart } = this.context;
        const product = getProduct(this.state.name);
        if(!product){
            return (
                <div className="error mt-100">
                    <h3><FaSearch /> <br></br>No such product could be found...</h3>
                    <Link to='/shopping' className='btn-primary'>
                        back to products
                    </Link>
                </div>
            )
        }
        const {
            id, 
            name, 
            description, 
            price, 
            imagelink, 
            rating, 
            stock 
        } = product;
        return (
            <div className="container mt-90 mb-5 mt-sm-5">
                {/* 
                    rubric43
                    The user should see a button labeled “Back” 
                */}
                <Back />
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted my-5">
                        {/* 
                            rubric35
                            The user should the name of the selected product 
                        */}
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-center col-10 col-md-6 my-3 text-capitalize">
                        {/* 
                            rubric36
                            The user should an image of the selected product 
                        */}
                        <img src={imagelink} className="img-size img-product-max" alt="product" />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                        {/* 
                            rubric39
                            The user should see the price of the selected product
                        */}
                        <h3 className="mb-3">Price: <span>$</span>{price}</h3>
                        {/* 
                            rubric37
                            The user should see the rating of the selected product 
                        */}
                        <h4 className="text-title text-uppercase text-muted mb-3">
                            Rating: {rating}/5
                        </h4>
                        {/* 
                            rubric38
                            The user should see the number of items in stock of the selected
                            product 
                        */}
                        <h5 className="mb-3">Stock status: {stock}</h5>
                        {/* 
                            rubric40 
                            The user should see a description of the selected product 
                        */}
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Description:
                        </p>
                        <p className="text-muted lead mb-5">{description}</p>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                            <div className="input-group">
                                {/* 
                                    rubric42
                                    The user should see an input field labeled “Qty” 
                                */}
                                <QtyInput />
                            </div>
                        </div>
                        <div className="ml-4">
                            {/* 
                                rubric41
                                The user should see a button labeled “Add”
                            */}
                            <button className="btn btn-lg btn-outline-primary" onClick={() => addToCart(id)}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
