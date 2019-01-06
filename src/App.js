import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import ImageCardContainer from "./components/Image-card-container";
import images from "./data/images.json";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <ImageCardContainer images={images} />
      </div>
    </Router>
  )
}

export default App;
