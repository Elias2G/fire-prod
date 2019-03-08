import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { fetch } from '../../../redux/actions';
import { ROOT_URL, getTermine, getEinsatz, getNews } from '../../../config';

import HomeImg from '../../images/headImage/Home.jpg';

import Einsätze from '../../reusable/einsätze';
import News from '../../reusable/news';
import Termine from '../../reusable/termine';

class Home extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    var reversedData = this.props.data.einsätze;

    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Home</title>
          <link rel="canonical" href={ROOT_URL + '/'} />
        </Helmet>

        <img className="head_image coantainer-big" src={HomeImg} />

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>


        <div className="container-big">
        <h2 className="container-big">Letzte Einsätze</h2>
        <Einsätze />

        <h2 className="container-big">Neuigkeiten</h2>
        <News />

        <h2 className="container-big">Termine</h2>
        <Termine />

        </div>
      </div>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    data
  }
}

export default connect(
  mapStateToProps,
  { fetch }
)(Home)
