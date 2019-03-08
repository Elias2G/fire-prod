import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Desk from '../../images/Desktop.svg';
import Tab from '../../images/Tablet.svg';
import Handy from '../../images/Handy.svg';

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

        {
          window.innerWidth > 768 ? <img src={Desk} /> :
          window.innerWidth > 360 ? <img src={Tab} /> :
          <img src={Handy} />
        }

      </div>
    );
  }
}
