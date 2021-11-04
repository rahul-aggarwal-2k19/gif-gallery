import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import VideoPanel from "./VideoPanel";
// import InfiniteScroll from "react-infinite-scroll-component";

function Home(props) {
  const { apiKey, tag, setProgress, pageSize } = props;
  const [urls, setUrls] = useState([]);
  const [searchTag, setsearchTag] = useState(tag);
  const [result, setResult] = useState(tag);
  const [loading, setloading] = useState(false);
  const [offset, setoffset] = useState(0);
  const [totalResult, settotalResult] = useState(0);

  const updateGIFS = async () => {
    setloading(true);
    setProgress(30);
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTag}&limit=${pageSize}&offset=${offset}&rating=g&lang=hi`;
    const result = await fetch(endpoint);
    setProgress(50);
    const parsedData = await result.json();
    setProgress(80);
    setUrls(urls.concat(parsedData.data));
    settotalResult(parsedData.pagination.total_count);
    setloading(false);
    setProgress(100);
    setoffset(offset + pageSize);
  };

  const fetchGIF = async () => {
    setloading(true);
    setProgress(30);
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTag}&limit=${pageSize}&offset=${offset}&rating=g&lang=hi`;
    const result = await fetch(endpoint);
    setProgress(50);
    const parsedData = await result.json();
    setProgress(80);
    setUrls(parsedData.data);
    settotalResult(parsedData.pagination.total_count);
    setloading(false);
    setProgress(100);
    setoffset(offset + pageSize);
  };

  useEffect(() => {
    updateGIFS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newResult = [];
    setUrls(newResult);
    setoffset(0);
    console.log(urls);
    fetchGIF();
  };

  const handleSearchInput = (event) => {
    const tagValue = event.target.value;
    const resultValue = event.target.value;
    setResult(resultValue);
    setsearchTag(tagValue);
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
                value={searchTag}
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <h1 className="text-center"> Result for {result}</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={urls.length}
          next={updateGIFS}
          hasMore={offset + pageSize < totalResult}
          loader={Spinner}
        >
          <div className="container">
            <div className="row">
              {urls.map((url) => {
                return (
                  <div className="col-md-4" key={url.id}>
                    <VideoPanel url={url.images.original.webp} />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Home;
