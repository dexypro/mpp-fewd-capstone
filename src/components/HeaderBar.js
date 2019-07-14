import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../context";

export default class HeaderBar extends Component {
  static contextType = ProductContext;
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    let { filterProducts } = this.context;
    return (
      /*
                rubric68
                The header bar should always be at the top of the page (Bootstrap) 
            */
      <nav className="headerbar navbar-dark bg-dark">
        <div className="nav-center">
          <div className="nav-header">
            {/* 
                            rubric65
                            User shall see a link to the home page
                        */}
            {/*
                            rubric69
                            Clicking the home page link should take the user to the home
                            page 
                        */}
            <Link to="/" className="title">
              <h3>Grocery Cloud</h3>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={
              this.state.isOpen ? "nav-links show-nav" : "nav-links pl-5"
            }
          >
            <li>
              {/*
                                rubric66
                                User shall see a link to the shopping page 
                            */}
              {/*
                                rubric70
                                Clicking the shopping page link should take the user to the
                                shopping page 
                            */}
              <Link to="/shopping" onClick={filterProducts}>
                <p>Shop All</p>
              </Link>
            </li>
            <li>
              {/* 
                                rubric67
                                User shall see a link to the cart page
                            */}
              {/*
                                rubric71
                                Clicking the cart page link should take the user to the cart page
                            */}
              <Link to="/cart">
                <FaShoppingCart className="nav-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
