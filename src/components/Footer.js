import React from "react";

function Footer() {
  const instagram = process.env.REACT_APP_INSTAGRAM;
  const facebook = process.env.REACT_APP_FACEBOOK;
  const youtube = process.env.REACT_APP_YOUTUBE;
  const twitter = process.env.REACT_APP_TWITTER;
  const github = process.env.REACT_APP_GITHUB;
  const linkedin = process.env.REACT_APP_LINKEDIN;

  return (
    <>
      <footer className="footer">
        <div className="social_links">
          <a href={{ instagram }}>
            <span className="fa-stack fa-lg ig combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href={{ facebook }}>
            <span className="fa-stack fa-lg fb combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href={{ youtube }}>
            <span className="fa-stack fa-lg yt combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href={{ twitter }}>
            <span className="fa-stack fa-lg tw combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-twitter fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href={{ github }}>
            <span className="fa-stack fa-lg gt combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-codepen fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href={{ linkedin }}>
            <span className="fa-stack fa-lg tw combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-linkedin fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
