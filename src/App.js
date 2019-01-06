import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import ImageCardContainer from "./components/Image-card-container";
import images from "./data/images.json";

class App extends React.Component {
  state = {
    score: 0,
    clickMessage: "",
    highScore: 0
  }

  handleImageClick = image => {
    if (!image.clicked) {
      image.clicked = true;
      this.setState({ score: this.state.score + 1 });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar score={this.state.score} highScore={this.state.highScore}/>
          <Jumbotron />
          <ImageCardContainer images={images} imageClicked={this.handleImageClick}/>
        </div>
      </Router>
    )
  }
}

export default App;
