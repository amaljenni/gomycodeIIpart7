import React  from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
   
export default  class Product  extends  React.Component {
    render (){
return( <div>
    <Link to="/"><a>Go back to home</a></Link>
    <h1>hello</h1>
    </div>
);
    }
}