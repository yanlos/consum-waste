import React, { Component } from "react";

const Header = () => {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>
                    Welcome
                  </h1>
                  <p>
                    {"This is a landing page"}
                  </p>
                  <a
                    href="#features"
                    className="btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;
