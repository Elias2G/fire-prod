import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';

export class Footer extends Component{
  render(){
    return(
      <div className="behindFooter">
        <div className="container-big row">

          <div className="column col-lg-3 col-md-6">
            <div className="shadow container bg-tertiary nop">
              <div className="container bg-secondary">
                <p className="bold">Kontakt</p>
              </div>

              <div className="container footer-b-b">
                <h6>Kommandant:</h6>
                <p className='footer-light-l'>OBI Thomas KÖFER</p>
              </div>
              <div className="container">
                <p>Sandstrasse 1</p>
                <p>9321 Kappel am Krappfeld</p>
                <p>Handy: 0664/32 19 337</p>
                <p>E-Mail: <a href="mailto:thomas.koefer@aon.at"><span className="links">Thomas.koefer@aon.at</span></a></p>
              </div>


            </div>
          </div>

          <div className="column col-lg-5 col-md-6">
            <div className="shadow">
              <p className="bold container bg-secondary secondary-light">Links</p>
              <div className="row justify-start bg-tertiary">
                <div className=" column col-s-6 col-md-4 footer-b-b ">
                  <p><span className="links"><NavLink to="/">Home</NavLink></span></p>
                </div>
                <div className=" column col-s-6 col-md-4 footer-b-b ">
                  <p><span className="links"><NavLink to="/neuigkeiten">Neuigkeiten</NavLink></span></p>
                </div>
                <div className=" column col-s-6 col-md-4 footer-b-b">
                  <p><span className="links"><NavLink to="/mannschaft">Mannschaft</NavLink></span></p>
                  <p><span className="links"><NavLink to="/fahrzeuge">Fahrzeuge</NavLink></span></p>
                  <p><span className="links"><NavLink to="/geschichte">Geschichte</NavLink></span></p>
                </div>
                <div className=" column col-s-6 col-md-4 footer-b-b">
                  <p><span className="links"><NavLink to="/einsaetze">Einsätze</NavLink></span></p>
                  <p><span className="links"><NavLink to="/statistic">Statistik</NavLink></span></p>
                  <p><span className="links"><NavLink to="/einsatzgebiet">Einsatzgebiet</NavLink></span></p>
                </div>
                <div className=" column col-s-6 col-md-4 footer-b-b">
                  <p><span className="links"><NavLink to="/termine">Termine</NavLink></span></p>
                </div>
                <div className=" column col-s-6 col-md-4 footer-b-b">
                  <p><span className="links"><NavLink to="/kontakt">Kontakt</NavLink></span></p>
                  <p><span className="links"><NavLink to="/notruf">Notruf</NavLink></span></p>
                </div>
              </div>

            </div>
          </div>

          <div className="column col-lg-4">
            <ReactWeather
              forecast="5days"
              apikey="c64e2921b4e74ed983592157190801"
              type="auto"
              lang="de"/>
          </div>
        </div>

        <div className="row bg-secondary-dark">
          <div className="column col-lg-12 container-big">
            <p className="regular">© 2018 FF Kappel am Krapfeld • design by <a href="https://www.designintime.at"><span className="links">www.designintime.at</span></a></p>
          </div>
        </div>
      </div>
    );
  }
}
