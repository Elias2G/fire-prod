import React from 'react';

export const Card = (props) => (
  <div className={"news-card shadow " + props.classed}>
    {console.log(props)}
    <div className="row">
      <div className="column col-s-12 nop placeholder_img">
        <img className="news-image" />
        <div className="text-pos">
          <h3 className="primary-light card-image-title">{props.data.Bezeichnung}</h3>
          <h6 className="primary-light card-image-title">Datum: {props.data.Datum.substring(8,10)}.
            {props.data.Datum.substring(5,7)}.
            {props.data.Datum.substring(0,4)}</h6>
        </div>
      </div>
      <div className="column col-s-7">
        <p>
          asdf asf fgahjhjh agh gsfgs ksksk srtj sr hs stt stjtjs tsj srtjrtsj srt xdsssrth st 
        </p>
      </div>
      <div className="column col-s-5">
        <button className="btn-pos-right"> mehr </button>
      </div>
    </div>
  </div>
);
