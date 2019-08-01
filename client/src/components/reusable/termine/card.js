import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = (props) => (
  <NavLink to="/termine">
    <div className="termin-card shadow">
      <div className="row">
        {/* <div className="column col-s-4 nop">
          {
            props.data.Bilderverzeichnis !== null ?
            <img className="placeholder_img" src={"http://157.230.106.121/files/" + props.data.Bilderverzeichnis} /> :
            <div className="placeholder_img" ></div>
          }

        </div> */}

        <div className="column col-s-12">
          {
            !props.loaded ? <p className="exo termine"><span className="exo terminTitle">.</span><br /><span className="exo">.</span></p> :
            <>
            <div>
              <h5 className="regular primary">
                {props.data.Datum.substring(8,10)}.{props.data.Datum.substring(5,7)}.{props.data.Datum.substring(0,4)}
                { ' | ' + props.data.Uhrzeit.substring(11,16) + ' Uhr'}
              </h5>
            </div>

          </>
          }
        </div>

        <div className="b-t col-s-12">
          <div className="">
            <p className="termine bold">
              <span className="terminTitle">
                {props.data.Bezeichnung}
              </span>
              <br/>
            </p>
            <p className="regular primary">

            </p>
          </div>
        </div>


      </div>
    </div>
  </NavLink>
);
