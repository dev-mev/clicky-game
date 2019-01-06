import React from "react";
import ImageCard from "../Image-card";

function ImageCardContainer(props) {
  const images = [];

  props.images.forEach((image) => {
    images.push(
      <ImageCard image={image} imageClicked={props.imageClicked} />
    )
  })
  return (
    <div>
      {images}
    </div>
  )
}

export default ImageCardContainer;