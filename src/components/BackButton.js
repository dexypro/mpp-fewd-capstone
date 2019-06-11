import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
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
   <button className="btn btn-lg btn-info" onClick={history.goBack}>Back</button>
);

export default withRouter(Back);