import React from "react";
import { Link } from "react-router-dom";

const Back = () => (
  /*
      rubric43
      The user should see a button labeled “Back” 
   */
  /*
      rubric45
      Clicking the “Back” button should take the user back to where
      they came from, whether it was the Shopping page or the
      Product Page. 

   */
  <Link to="/">
    <button className="btn btn-lg btn-info">
      Back
    </button>
  </Link>
);

export default Back;
