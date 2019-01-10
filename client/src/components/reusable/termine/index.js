import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROOT_URL, getTermine } from '../../../config';

import { fetch } from '../../../redux/actions';

import { Card } from './card';

class Termine extends Component {

  componentDidMount() {
    if (this.props.data.loaded.loaded.Termine === false) {
      this.props.fetch('fetch_termine', `${ROOT_URL}${getTermine}`);
    }
  }

  renderHelper = (data) => {
    return data.map((data, i) => {
      if (i < 4) {
        return (
          <div className="column col-s-12 col-md-6">
            <Card data={data}/>
          </div>
        )
      }
    })
  }

  render() {
    var termine = this.props.data.termine;
    return (
      <div className="">
        <div className="row">
          {this.renderHelper(termine)}
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
)(Termine);
