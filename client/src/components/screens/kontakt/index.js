import React, { Component } from 'react';
import { Container } from './container';

import Kon from '../../images/headImage/Kontakt.jpg';

export default class Notruf extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }
  
  render() {
    return (
      <div>
        <img className="head_image" src={Kon}/>
          <div className="container-big">
            <h1 className="align-left heading container-big">Kontakt</h1>

            <div className="row">

              <div className="column col-lg-4 col-md-6 container">
                <div className="bg-secondary-light shadow">
                  <div className="container title-border-b">
                    <h3>Kommandant:</h3>
                    <p className="bold primary-light">OBI Thomas Köfer</p>
                  </div>
                  <p className="container">
                    Sandstrasse 1<br />
                    9321 Kappel am Krappfeld<br />
                    Handy: 0664/32 19 337<br />
                    E-Mail: Thomas.koefer@aon.at
                  </p>
                </div>
              </div>

              <div className="column col-lg-4 col-md-6 container">
                <div className="bg-secondary-light shadow">
                  <div className="container title-border-b">
                    <h3>Kommandant-Stv:</h3>
                    <p className="bold primary-light">BI Guido MOGY</p>
                  </div>
                  <p className="container">
                    Edling<br />
                    9321 Kappel am Krappfeld<br />
                    Handy: 0664/25 52 412<br />
                    E-Mail: mogy.g@drei.at
                  </p>
                </div>
              </div>

              <div className="column col-lg-4 col-md-6 container">
                <div className="bg-secondary-light shadow">
                  <div className="container title-border-b">
                    <h3>Rüsthaus:</h3>
                    <p className="bold primary-light"></p>
                  </div>
                  <p className="container">
                    Silberbachstraße 2<br />
                    9321 Kappel am Krappfeld<br />
                  </p>
                </div>
              </div>
            </div>
            <Container />
          </div>
      </div>
    );
  }
}
