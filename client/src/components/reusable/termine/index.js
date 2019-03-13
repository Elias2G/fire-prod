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
    var time = new Date();
    var cut = 0;
    return data.map((data, i) => {
      if(cut < 3) {
        if( time.getFullYear() <= data.Datum.substring(0,4) && time.getMonth() + 1 == data.Datum.substring(5,7) && time.getDate() <= data.Datum.substring(8,10) ) {
          cut++
          return (
            <div key={i} className="column col-s-12 col-md-4">
              <Card data={data} loaded={this.props.data.loaded.loaded.Termine}/>
            </div>
          )
        }
        if( time.getFullYear() <= data.Datum.substring(0,4) && time.getMonth() + 2 <= data.Datum.substring(5,7) ) {
          cut++
          return (
            <div key={i} className="column col-s-12 col-md-4">
              <Card data={data} loaded={this.props.data.loaded.loaded.Termine}/>
            </div>
          )
        }
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
