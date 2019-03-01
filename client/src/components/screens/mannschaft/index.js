import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch, determine } from '../../../redux/actions';

import { ROOT_URL, getFunktionen, getDienstgrad } from '../../../config';

import MannschaftContainer from './cardLoop';


class Mannschaft extends Component {
  componentDidMount() {
    if(this.props.data.loaded.loaded.Mannschaft === false) {
      this.props.fetch('fetch_mannschaft_d', `${ROOT_URL}${getDienstgrad}`);
      this.props.fetch('fetch_mannschaft_f', `${ROOT_URL}${getFunktionen}`);
    }
  }




  render() {



    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
          <h1>Mannschaft</h1>
        </div>

        {
          this.props.data.loaded.loaded.Mannschaft === true ? <MannschaftContainer data={this.props.data.mannschaft} /> : <div></div>
        }

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
)(Mannschaft)
