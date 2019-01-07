import React from "react";
import ImageCard from "../Image-card";

function ImageCardContainer(props) {
  const images = [];

  props.images.forEach((image) => {
    images.push(
      <ImageCard image={image} imageClicked={props.imageClicked} />
    )
  })

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  return (
    <div class="d-flex flex-row flex-wrap justify-content-center image-container">
      {images.map(image => (
        <div class="justify-content-center p-2 image">{image}</div>
      ))}
    </div>
  )
}

export default ImageCardContainer;