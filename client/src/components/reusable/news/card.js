import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = (props) => (
  <div className={"news-card shadow " + props.classed}>
    <div className="row">
      <div className="column col-s-12 nop placeholder_img">
        <img className="news-image" />
        <div className="text-pos">
          {!props.loaded ? <h3 className="exo primary-light card-image-title">.</h3> : <h3 className="primary-light card-image-title">{props.data.Titel}</h3>}
          {!props.loaded ? <h6 className="exo card-image-title">.</h6> : <h6 className="primary-light card-image-title">Datum: {props.data.Datum.substring(8,10)}.{props.data.Datum.substring(5,7)}.{props.data.Datum.substring(0,4)}</h6>}
        </div>
      </div>
      <div className="column col-s-7">
        {!props.loaded ? <p className="exo">.</p> : <p>{props.data.Bezeichnung.substring(0,80)}</p>}

      </div>
      <div className="column col-s-5">
        <NavLink to="/neuigkeiten">
          <button className="btn-pos-right"> mehr </button>
        </NavLink>
      </div>
    </div>
  </div>
);
