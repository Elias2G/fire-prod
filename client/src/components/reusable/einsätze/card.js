import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = (props) => (
  <div className="einsatz-card shadow">

    <div className="row top-part">
      <div className="column col-s-2">
        <div className="circle">
        </div>
      </div>
      <div className="column col-s-10">
        <h5 className="bold exo">{props.title}</h5>
        <h6 className="regular primary">{props.subtitle}</h6>
      </div>
    </div>

    <div className="row middle-part">
      <div className="column col-s-12 image">
        <img src={props.image} />
      </div>
      <div className="column col-s-12">
        <p>Datum:
          { ' ' + props.date.substring(8,10)}.
          {props.date.substring(5,7)}.
          {props.date.substring(0,4)}
        </p>
        <p>Uhrzeit:
          {props.clock === " n.A" ? props.clock : ' ' + props.clock.substring(11,13) + ':' + props.clock.substring(14,16)}
        </p>
        <p>Ort: {props.ort}</p>
      </div>
    </div>

    <div className="row bottom-part">
      <div className="column col-s-12">
        <button className="btn-pos-right"> <NavLink to="/einsätze">mehr</NavLink> </button>
      </div>
    </div>
  </div>
);
