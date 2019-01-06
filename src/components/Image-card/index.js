import React from "react";

function ImageCard(props) {
  const image = props.image;

  return (
    <img alt={image.alt} src={image.source} />
  );
}

export default ImageCard;
