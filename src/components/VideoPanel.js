import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function VideoPanel(props) {
  const { url } = props;
  return (
    <>
      <div className="card mt-3">
        <LazyLoadImage alt={"GIF"} effect="blur" src={url} height={"100%"} />
      </div>
    </>
  );
}

export default VideoPanel;
