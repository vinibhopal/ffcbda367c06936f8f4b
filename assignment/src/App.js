import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto  from "./components/NasaPhoto";
import NavBar from "./components/NavBar";

import "./App.css";

export default function App(){
  return(
    <BrowserRouter>
      <h3>Welcome to NASA</h3>
    <div className="App">
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto"/>
      <NavBar/>

    </div>
    </BrowserRouter>
  )
}