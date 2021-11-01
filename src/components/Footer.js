import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="social_links">
          <a href="https://www.instagram.com/rahul.aggarwal.20/">
            <span className="fa-stack fa-lg ig combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010439626691">
            <span className="fa-stack fa-lg fb combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://www.youtube.com/channel/UCsy7LMhhgKks1tZfDL3fj8w">
            <span className="fa-stack fa-lg yt combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://twitter.com/Rahul_9818">
            <span className="fa-stack fa-lg tw combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-twitter fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://github.com/rahul-aggarwal000005">
            <span className="fa-stack fa-lg gt combo">
              <i className="fa fa-circle fa-stack-2x circle"></i>
              <i className="fa fa-codepen fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/rahul-a-146561107/">
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
