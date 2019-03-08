import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { ROOT_URL } from '../../../config';

import Container from './news-container';

import NewsImg from '../../images/headImage/News.jpg';

export default class NewsPage extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

  state = {
    items: 16,
  }

  setItems = (items) => {
    this.setState({
      items: items,
    })
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Neuigkeiten</title>
          <link rel="canonical" href={ROOT_URL + '/neuigkeiten'} />
        </Helmet>

        <img className="head_image coantainer-big" src={NewsImg} />

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big">
        <h2 className="container-big">Neuigkeiten</h2>

        <Container itemsLoaded={this.state.items} setItems={this.setItems} />


        </div>
      </div>
    );
  }
}
