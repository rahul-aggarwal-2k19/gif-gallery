import React, { useEffect, useState } from "react";
import VideoPanel from "./VideoPanel";

function Home(props) {
  const { apiKey, tag } = props;
  const [urls, setUrls] = useState([]);
  const [searchTag, setsearchTag] = useState(tag);
  const fetchGIFS = async () => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTag}&limit=30&offset=0&rating=g&lang=hi`;
    const result = await fetch(endpoint);
    const data = await result.json();
    setUrls(data.data);
    setsearchTag("");
  };
  useEffect(() => {
    fetchGIFS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchGIFS();
  };

  const handleSearchInput = (event) => {
    const tagValue = event.target.value;
    setsearchTag(tagValue === "" ? "happy" : tagValue);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <form onSubmit={handleSearchSubmit}>
            <div className="input-group mb-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search your favourite GIF"
                aria-label="Search"
                onChange={handleSearchInput}
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          {urls.map((url) => {
            return (
              <div className="col-md-4">
                <VideoPanel key={url.id} url={url.images.original.webp} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

Home.defaultPropTypes = {};

export default Home;
