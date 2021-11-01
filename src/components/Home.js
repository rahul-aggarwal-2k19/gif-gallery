import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import VideoPanel from "./VideoPanel";

function Home(props) {
  const { apiKey, tag } = props;

  const [urls, setUrls] = useState([]);
  const [searchTag, setsearchTag] = useState(tag);
  const [result, setResult] = useState(tag);
  const [loading, setloading] = useState(false);

  // Fetch the GIF from the api
  const fetchGIFS = async () => {
    setloading(true);
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTag}&limit=30&offset=0&rating=g&lang=hi`;
    const result = await fetch(endpoint);
    const data = await result.json();
    setUrls(data.data);
    setsearchTag("");
    setloading(false);
  };

  // when the screen is loaded
  useEffect(() => {
    fetchGIFS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch the new updated results on search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchGIFS();
  };

  // user input from the search bar
  const handleSearchInput = (event) => {
    const tagValue = event.target.value;
    const resultValue = event.target.value;
    setResult(resultValue);
    setsearchTag(tagValue);
  };

  return (
    <>
      <div className="container main">
        <div className="row mt-3">
          <form onSubmit={handleSearchSubmit}>
            <div className="input-group mb-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search your favourite GIF"
                aria-label="Search"
                onChange={handleSearchInput}
                value={searchTag}
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        {loading && <Spinner />}
        {!loading && <h1> Result for {result}</h1>}
        <div className="row">
          {!loading &&
            urls.map((url) => {
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

export default Home;
