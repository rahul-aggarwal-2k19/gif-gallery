import React from "react";

function VideoPanel() {
  return (
    <>
      <div
        className="modal fade"
        id="modal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body mb-0 p-0">
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe
                  title="sample"
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/A3PDXmYoF5U"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPanel;
