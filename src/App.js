import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ImageCardContainer from "./components/Image-card-container";
import images from "./data/images.json";

class App extends React.Component {
  state = {
    score: 0,
    clickMessage: "",
    highScore: 0
  }

  currentGameReset = () => {
    this.setState({
      score: 0,
      clickMessage: ""
    });
    for (const image of images) {
      image.clicked = false;
    }
  }

  handleImageClick = image => {
    if (!image.clicked || image.clicked === false) {
      image.clicked = true;
      this.setState({
        score: this.state.score + 1,
        clickMessage: "Good click!",
        highScore: Math.max(this.state.score + 1, this.state.highScore)
      })
    } else {
      this.currentGameReset();
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar clickMessage={this.state.clickMessage} score={this.state.score} highScore={this.state.highScore}/>
          <ImageCardContainer images={images} imageClicked={this.handleImageClick}/>
        </div>
      </Router>
    )
  }
}

export default App;
