import React, { Component } from 'react';
import _ from 'lodash';

import Abzeichen from "./abzeichen";

export default class MannschaftCard extends Component {
  state = {
    numbers: ''
  }

  componentDidMount() {
    this.setState({
      numbers: this.props.length
    })
  }

  split = (data) => {

    if(data !== undefined) {
      return data.map(data => {
        return data + ', ';
      })
    }

  }

  render() {
    const data = this.props.data;
    return (
      <div className="column col-s-12 col-ms-6 col-lg-3 col-ml-4 team-card shadow index">
        <div className="rounded-container shadow-big">
          <img className="team-img" src={data.Bildverzeichnis} />
        </div>
        <div className="container">
          <h5 className="break-all align-center">{data.Name}</h5>
          <h6 className="align-center primary-light">
            {data.Bez}
          </h6>
        </div>
        <div className="container">
          <p className="align-center">
            {this.split(data.Funktion)}
          </p>
        </div>
        {/* <Abzeichen /> */}
      </div>
    );
  }
}
