import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Container } from './container';

import { ROOT_URL } from '../../../config';

import Kon from '../../images/headImage/Kontakt.jpg';

export default class Notruf extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Kontakt</title>
          <link rel="canonical" href={ROOT_URL + '/kontakt'} />
        </Helmet>

        <img className="head_image" src={Kon}/>

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

          <div className="container-big">
            <h2 className="align-left heading container-big">Kontakt</h2>

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
                    E-Mail: <a className="st" href="mailto:Thomas.koefer@aon.at">Thomas.koefer@aon.at</a>
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
                    Handy: 0664/41 81 579<br />
                    E-Mail: <a className="st" href="mailto:mogy.g@drei.at">mogy.g@drei.at</a>
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
