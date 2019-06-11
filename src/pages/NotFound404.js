import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

export default class NotFound404 extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page 
                            <span className="text-danger"> {this.props.location.pathname}</span> not found!
                        </div>
                        <div className="error-actions">
                            <Link to='/'>
                                <button type="button" className="btn btn-primary btn-lg">
                                    Take me home <FaHome className="nav-icon" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
