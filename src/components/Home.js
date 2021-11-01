import React, { useEffect, useState } from "react";
import VideoPanel from "./VideoPanel";

function Home(props) {
  const [urls, setUrls] = useState([]);
  const fetchGIFS = async () => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${props.apiKey}&q=smile&limit=30&offset=0&rating=g&lang=hi`;
    const result = await fetch(endpoint);
    const data = await result.json();
    console.log(data.data);
    setUrls(data.data);
  };
  useEffect(() => {
    console.log(props.apiKey);
    fetchGIFS();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {urls.map((url, index) => {
            return (
              <div className="col-md-4">
                <VideoPanel key={index.toString()} url={url.images.original.url} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
