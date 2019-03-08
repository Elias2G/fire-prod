import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { ROOT_URL} from '../../../config';

import HomeImg from '../../images/headImage/Home.jpg';

export default class Error404 extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Error 404</title>
        </Helmet>

        <img className="head_image coantainer-big" src={HomeImg} />

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>


        <div className="container-big">
          <div className="row nop">
            <div className="col-md-4">
              <div className="error-card shadow">
                <h1 className="container-big regular nopb">Error 404</h1>
                  <p className="error-subtitle b-b container-big nopt">Diese Seite existiert nicht</p>

                <p className="container-big ">Oder ist greade im Einsatz</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}
