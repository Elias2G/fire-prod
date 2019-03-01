import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = (props) => (
  <div className="einsatz-card shadow">

    <div className="row top-part">
      <div className="column col-s-2">
        <div className="circle">
          <img src={props.icon} />
        </div>
      </div>
      <div className="column col-s-10">
        {!props.loaded ? <h6 className="exo">_</h6> : <h6 className="bold">{props.type}</h6>}
        {!props.loaded ? <h6 className="primary exo">_</h6> : <h6 className="regular primary">{props.subtitle}</h6>}
      </div>
    </div>

    <div className="row middle-part">
      <div className="column col-s-12 image">
        {props.is !== null ? <img src={"http://157.230.106.121/files/" + props.image} /> : <img src={props.image} />}

      </div>
      <div className="column col-s-12">
        {props.title}
      </div>
    </div>

    <div className="row bottom-part">
      <div className="column col-s-6">
        {!props.loaded ? <p className="exo">_</p> : <p>Datum:{ ' ' + props.date.substring(8,10)}.{props.date.substring(5,7)}.{props.date.substring(0,4)}</p>}
        {!props.loaded ? <p className="exo">_</p> : <p>Uhrzeit:{props.clock === " n.A" ? props.clock : ' ' + props.clock.substring(11,13) + ':' + props.clock.substring(14,16)}</p>}
      </div>
      <div className="column col-s-6">
        <button className="btn-pos-right"> <NavLink to="/einsätze">mehr</NavLink> </button>
      </div>
    </div>
  </div>
);
