import React from "react";

function VideoPanel(props) {
  const { url } = props;
  return (
    <>
      <div className="card mt-3">
        <img src={url} className="card-img-top" alt="GIF" />
      </div>
    </>
  );
}

export default VideoPanel;
