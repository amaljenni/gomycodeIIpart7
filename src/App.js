import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Product from './Product'
import Slide from './Slide'
import Carte from './Carte'
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
   
    <div className="App">
      <Route path="/" exact component={Home}/>
      <Route path="/product" component={Product}/> 
      <Route path="/Slide" component={Slide}/> 
      <Route path="/Carte" component={Carte}/> 
    {/* <Link to ="/product">hello</Link>  */}
     {/* <switch>
     <Home/>
       <Product/>
     </switch>
        */}
    </div>
    </BrowserRouter>
  );
}

export default App;
