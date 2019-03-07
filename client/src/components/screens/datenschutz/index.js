import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { ROOT_URL } from '../../../config';

import HomeImg from '../../images/headImage/Home.jpg';


export default class Datenschutz extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Datenschutz</title>
          <link rel="canonical" href={ROOT_URL + '/datenschutz'} />
        </Helmet>

        <img className="head_image coantainer-big" src={HomeImg} />

        <div className="bg-secondary ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>


        <div className="container-big">
        <h2 className="container-big">Datenschutz</h2>


        </div>
      </div>
    );
  }
}
