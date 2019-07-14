import React from 'react';
/*
  rubric79
  CSS used for site styling. No inline CSS permitted and no styling
  of HTML elements directly. 
*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './pages/Home';
import Shopping from './pages/Shopping';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

import { Route, Switch } from 'react-router-dom';

import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <>
    <HeaderBar />
    <Switch>
      {/* 
        rubric13
        The home page is accessible at http://localhost:8080/ 
      */}
      <Route exact path="/" component={Home} />
      {/* 
        rubric34
        The shopping page is accessible at
        http://localhost:8080/shopping  
      */}
      <Route exact path="/shopping" component={Shopping} />
      {/*
        rubric46 
        The product page is accessible at
        http://localhost:8080/product?name=productname 
      */}
      <Route exact path="/product/:name" component={Product} />
      {/*
        rubric56
        The cart page is accessible at http://localhost:8080/cart
      */}
      <Route exact path="/cart" component={Cart} />
      {/*
        rubric64
        The about page is accessible at http://localhost:8080/about 
      */}
      <Route exact path="/about" component={About} />
      {/* 
        rubric62
        The contact page is accessible at http://localhost:8080/contact 
      */}
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound404} />
    </Switch>
    {/* <FooterBar /> */}
    </>
  );
}

export default App;
