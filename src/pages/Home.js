import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import { Checkbox } from '../components/Checkbox';
import { useContext } from 'react';
import { ProductContext } from '../context';


const Home = () => {
    const context = useContext(ProductContext);
    const { filterProducts } = context;
    return (
    <>
    <div className="d-flex row ml-5 mt-5 mb-2 justify-content-around">
        {/* 
            rubric04
            The user should see some text welcoming them to the website
        */}
        <Title />
        <div className="mb-5">
            {/* 
                rubric12
                If the user clicks on the “Shop All” button, the user should be
                taken to the shopping page 
            */}
            <Link to="/shopping">
            {/* 
                rubric05
                The user should see a button labeled “Shop All” 
            */}
            <button className="btn btn-primary mr-3" onClick={filterProducts}>Shop All</button>
            </Link>
            {/* 
                rubric06
                The user should see a toggle switch labeled “Toggle Slide Show”
            */}
            <Checkbox />
        </div>
    </div>
    {/* 
        rubric01
        The user should see a product carousel that contains at least 3
        slides of products, with each slide having between 1 and 4
        product images.  
    */}
    <Carousel />
    </>
    )
}

export default Home
