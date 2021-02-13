import React, { Component } from "react";
import '../css/style.css';

const data = [{
  "icon": "fa fa-comments-o",
  "title": "Lorem ipsum",
  "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
},
{
  "icon": "fa fa-bullhorn",
  "title": "Lorem ipsum",
  "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
},
{
  "icon": "fa fa-group",
  "title": "Lorem ipsum",
  "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
},
{
  "icon": "fa fa-magic",
  "title": "Lorem ipsum",
  "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
}
]

const features = () => {

    return (
      <div id="features" className="text-center">
        <div className="img-features">
          <div className="container">
            <div className="section-title">
              <h2 style={{color: "white"}}>Features</h2>
            </div>
            <div className="row"  className="col-md-8 col-md-offset-2 section-title">
              {data
                ? data.map((d,i) => (
                    <div  key={`${d.title}-${i}`}className="col-xs-6 col-md-3">
                      {" "}
                      <i className={d.icon}></i>
                      <h3 style={{color: "white"}}>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    );
}

export default features;
