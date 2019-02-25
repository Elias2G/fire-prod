import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = (props) => (
  <NavLink to="/termine">
    <div className="termin-card shadow">
      <div className="row">
        <div className="column col-s-4 nop">
          <img className="placeholder_img" />
        </div>

        <div className="column col-s-8">
          {
            !props.loaded ? <p className="exo termine"><span className="exo terminTitle">.</span><br /><span className="exo">.</span></p> :
            <p className="termine">
              <span className="terminTitle">
                {props.data.Bezeichnung}
              </span>
              <br/>
              Datum: {props.data.Datum.substring(8,10)}.{props.data.Datum.substring(5,7)}.{props.data.Datum.substring(0,4)}
            </p>
          }
        </div>


      </div>
    </div>
  </NavLink>
);
