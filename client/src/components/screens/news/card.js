import React from 'react';

export const Card = (props) => (
  <div className="news-card shadow">
    <img className="placeholder_img" src={props.data.Bildverzeichnis} />
    <div className="container">
      <p className="bold">{props.data.Bezeichnung}</p>
      <p className="primary-light date-size">{
        props.data.Datum.substring(8,10) + '.' +
        props.data.Datum.substring(5,7) + '.' +
        props.data.Datum.substring(0,4)
      }</p>
      <p className="container nopr nopl">
        asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
        dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
        asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
        dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
        asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
        dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
      </p>
    </div>
  </div>
);
