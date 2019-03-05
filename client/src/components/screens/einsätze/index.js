import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch, determine } from '../../../redux/actions';
import { ROOT_URL, getEinsatz } from '../../../config';

import Ein from '../../images/headImage/Einsätze.jpg';

import EinsatzContainer from './einsatz-container';


class Einsätze extends Component {
  componentDidMount() {
    if(this.props.data.loaded.loaded.Einsätze !== true) {
      this.props.fetch('fetch_einsatz', `${ROOT_URL}${getEinsatz}`);
    }
  }

  shouldComponentUpdate() {
    if(this.props.data.loaded.loaded.Einsätze === true) {
      return true;
    } else {
      return false;
    }
  }

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>
        <img className="head_image coantainer-big" src={Ein}/>

        <div className="container-big">
          <h1 className="container-big">Einsätze</h1>

          <EinsatzContainer />
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
)(Einsätze)
