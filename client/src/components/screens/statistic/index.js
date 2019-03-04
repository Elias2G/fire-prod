import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <img className="head_image coantainer-big" src={Stat}/>

        <div className="container-big">
          <h1 className="container-big nopb">Unsere Statistik im Überblick</h1>
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
