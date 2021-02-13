import React, {useState} from 'react';

import './Carousel.css';

function Carousel(props) {
  const [center, setCenter] = useState(0);

  const content = [
    {
      text: "hello world!"
    },

  ];

  const renderSlide = (index) => {
    return index >= 0 && index < content.length && content[index].text;
  }

  return (
    <div id='carousel'>
      <div>
        <button
          onClick={() => {
            setCenter(center-1);
          }}
         > 
          Left
         </button>
      </div>
      <div className='carousel-content'>
        {renderSlide(center-1)}
        {renderSlide(center)}
        {renderSlide(center+1)}
      </div>
      <div>
        <button
          onClick={() => {
            setCenter(center+1);
          }}
         > 
          Right
         </button>
      </div>
    </div>
  );
}

export default Carousel;
