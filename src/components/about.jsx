import React, { Component } from 'react'
import '../css/style.css'
const data = {
  "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Why": [
      "Lorem ipsum dolor",
      "Tempor incididunt",
      "Lorem ipsum dolor",
      "Incididunt ut labore"
  ],
  "Why2": [
      "Aliquip ex ea commodo",
      "Lorem ipsum dolor",
      "Exercitation ullamco",
      "Lorem ipsum dolor"
  ]
};

const about = () => {
    return (
        <div id="about">
        <div className="container">
          <div className="row" className="d-flex justify-content-center">
            {/* <div className="col-xs-12 col-md-6"> <img src="https://image.pngaaa.com/56/1437056-middle.png" className="about-img" className="img-responsive" alt="" /> </div> */}
            {/* <div className="col-xs-12 col-md-6"> */}
              <div className="about-text" style={{width: "50%"}}>
                <h2 style={{color: "white"}}>About Us</h2>
                <p>{data ? data.paragraph : 'loading...'}</p>
                <h3 style={{color: "white"}}>How it Works?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {data ? data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {data ? data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
}

export default about
