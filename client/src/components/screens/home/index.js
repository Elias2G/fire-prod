import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetch } from '../../../redux/actions';
import { ROOT_URL, getTermine, getEinsatz, getNews } from '../../../config';

import Einsätze from '../../reusable/einsätze';
import News from '../../reusable/news';
import Termine from '../../reusable/termine';

class Home extends Component {

  render() {
    var reversedData = this.props.data.einsätze;

    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
        <h1 className="container-big">Letzte Einsätze</h1>
        <Einsätze />

        <h1 className="container-big">Neuigkeiten</h1>
        <News />

        <h1 className="container-big">Termine</h1>
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
