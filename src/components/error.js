import React from "react";

import {Link} from 'react-router-dom';

//page for if user opens a page they are not supposed to, allows them to go back
class Error extends React.Component {


  render() {
    return(
      <div id="errorDiv">

      <h2> Error Page</h2>
      <h3>
     Something has gone wrong , return Home
      </h3>
          <Link to="/" className='btn'>Back Home</Link>
        </div>
)
  }
}
export default Error;
