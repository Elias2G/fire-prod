import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../../../redux/actions';
import { ROOT_URL, getEinsatz } from '../../../config';

import Charts from './charts';

class Statistic extends Component {
  state = {
    reload: false,
  }
  componentDidMount() {
    this.props.fetch('fetch_einsaetze', `${ROOT_URL}${getEinsatz}`);
  }

  render() {
    console.log(this.props.data.statistic);
    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
          <h1>Unsere Statistik im Überblick</h1>
        </div>
        <div className="container-big">
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
