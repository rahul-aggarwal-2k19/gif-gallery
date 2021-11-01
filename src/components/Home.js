import React from "react";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-md-1 row-cols-1 g-4">
          <div className="col">
            <VideoPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
