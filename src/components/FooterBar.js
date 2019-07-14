import React from "react";
import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    /*
        rubric72
        The footer bar should always be at the bottom of the page (Bootstrap)
      */
    <footer className="footer row text-light bg-dark navbar fixed-bottom">
      <div className="ml-5 mt-auto">
        <span className="footer-shrink">© Grocery Cloud 2019</span>
      </div>
      <div className="mt-auto">
        {/*
            rubric73 
            User shall see a link to the home page 
          */}
        {/* 
            rubric76 
            Clicking on the home page link should take the user to the home
            page
          */}
        <Link to="/" className="p-2">
          Home
        </Link>
        {/*
            rubric74 
            User shall see a link to the about page 
          */}
        {/*
            rubric77
            Clicking on the about page link should take the user to the about
            page 
          */}
        <Link to="/about" className="p-2">
          About
        </Link>
        {/*
            rubric75
            User shall see a link to the contact page 
          */}
        {/*
            rubric78
            Clicking on the contact page link should take the user to the
            contact page 
          */}
        <Link to="/contact" className="p-2">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default FooterBar;
