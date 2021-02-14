import React from 'react';

import DefaultImg from './default.png';

function ScoreItem(props) {
  const getTopThree = () => {
    const rank = props.rank;

    if (rank === 1) {
      return ' gold';
    } else if (rank === 2) {
      return ' silver';
    } else if (rank === 3) {
      return ' bronze';
    }
    return '';
  }

  return (
    <div className={'score-item' + getTopThree()}>
      <div className="rank">
        {props.rank}
      </div>

       {/* TODO: link to user profile, profile pic */}
      <a href="#test">
        <img src={props.imgsrc ? props.imgsrc : DefaultImg}/>
        {props.username}
      </a>

      <div>
        {props.score}
      </div>
    </div>
  );
}

export default ScoreItem;
