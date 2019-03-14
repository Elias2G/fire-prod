import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetch } from '../../../redux/actions';
import { ROOT_URL, getEinsatz } from '../../../config';

import Stat from '../../images/headImage/Statistik.jpg';

import Charts from './charts';

class Statistic extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

  state = {
    reload: false,
  }
  componentDidMount() {
    this.props.fetch('fetch_einsatz', `${ROOT_URL}${getEinsatz}`);
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Statistik</title>
          <link rel="canonical" href={ROOT_URL + '/statistic'} />
        </Helmet>

        <img className="head_image coantainer-big" src={Stat}/>

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big">
          <h2 className="container-big nopb">Unsere Statistik im Überblick</h2>
        </div>
        <div className="container-big nop">
          <Charts data={this.props.data.statistic}/>
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
)(Statistic)
