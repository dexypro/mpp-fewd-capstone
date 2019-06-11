import React from 'react';
import {FaLeaf, FaHeartbeat, FaMedal, FaTruckMoving} from 'react-icons/fa';


const About = () => {
    return (
        /*
            rubric63
            About page is visually appealing (score 1-3) 
        */
    <>
         <header className="masthead d-flex add-shadows">
            <div className="container text-center my-auto">
            <h1 className="mb-1 about-title-color">Grocery Cloud</h1>
            <h3 className="mb-5 about-title-color">
                <em>Who is behind the best online store?</em>
            </h3>
            </div>
            <div className="overlay"></div>
        </header>
        <section className="content-section bg-primary text-white text-center" id="services">
            <div className="container">
            <div className="content-section-heading">
                <h3 className="text-secondary mb-0">Grocery Cloud</h3>
                <h2 className="mb-5">Freshness Is Guaranteed</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                    <FaLeaf />
                </span>
                <h4>
                    <strong>Always Fresh</strong>
                </h4>
                <p className="text-faded mb-0">
                    We offer you fresh fruits and vegetables which are sourced 
                    from organic farms so that you can lead a healthier life.
                </p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                    <FaHeartbeat />
                </span>
                <h4>
                    <strong>Super Healthy</strong>
                </h4>
                <p className="text-faded mb-0">
                    Chemical-free foods are always more nutritious and healthy. 
                    We aim to deliver you the wholesome and nutritious food. 
                </p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                    <FaMedal />
                </span>
                <h4>
                    <strong>Premium Quality</strong>
                </h4>
                <p className="text-faded mb-0">
                    We only sell the high quality products. 
                    You won't have to worry about faulty products ever again!
                </p>
                </div>
                <div className="col-lg-3 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                    <FaTruckMoving />
                </span>
                <h4>
                    <strong>Fast Delivery</strong>
                </h4>
                <p className="text-faded mb-0">
                    Get your products today with our
                    special delivery process!
                </p>
                </div>
            </div>
            </div>
        </section>
        <section id="contact" class="map mb-sm-5 add-shadows">
            <iframe 
                width="100%" 
                height="100%" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="https://maps.google.com/maps?q=Belgrade&t=&z=13&ie=UTF8&iwloc=&output=embed">
            </iframe>
        </section>
    </>
    )
}

export default About


