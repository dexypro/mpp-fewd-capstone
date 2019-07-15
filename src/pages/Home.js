import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Carousel from "../components/Carousel";
import { Checkbox } from "../components/Checkbox";
import { useContext } from "react";
import { ProductContext } from "../context";
import About from "./About";

const Home = () => {
  const context = useContext(ProductContext);
  const { filterProducts } = context;
  return (
    <>
      <About />
      <Carousel />
      <div className="copyright">
        © {new Date().getFullYear()} Grocery Cloud. All Rights Reserved
      </div>
    </>
  );
};

export default Home;
