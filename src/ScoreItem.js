import React from 'react';

function ScoreItem(props) {
  return (
    <div className="score-item">
      <div className="rank">
        {props.rank}
      </div>

      // TODO: link to user profile, profile pic
      <a href="#test">
        {props.username}
      </a>

      <div>
        {props.score}
      </div>
    </div>
  );
}

export default ScoreItem;
