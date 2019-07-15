import React from "react";
import { Link } from "react-router-dom";

const JustBtn = props => (
  <>
    <Link to={props.linkTo} className="ml-2" onClick={props.shop}>
      <button className="btn btn-lg btn-info">
        {props.text}
      </button>
    </Link>
  </>
);

export default JustBtn;
