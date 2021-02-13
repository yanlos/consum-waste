import React from 'react';
import ScoreItem from './ScoreItem.js';

function Scoreboard(props) {
  const stats = props.stats;

  const toScoreboard = (list) => list
    .sort(scoreSort)
    .map((item, i) => 
      <li> 
        <ScoreItem {...item} rank={i+1} />
      </li>
    );

  const scoreSort = (a,b) => ((a.score < b.score) ? 1 : -1);

  return (
    <ul className="score-list">
      <div className="score-item">
        <div className="header">
          <strong> Rank </strong>
        </div>
        <div>
          <strong> Username </strong>
        </div>
        <div>
          <strong> Score </strong>
        </div>
      </div>
        {toScoreboard(stats)}
    </ul>
  );
}

export default Scoreboard;