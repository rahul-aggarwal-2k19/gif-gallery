import React from "react";

function Spinner() {
  return (
    <>
      <div className="Spinner">
        <div className="spinner-grow text-danger" role="status"></div>
        <div className="spinner-grow text-warning" role="status"></div>
        <div className="spinner-grow text-info" role="status"></div>
      </div>
    </>
  );
}

export default Spinner;
