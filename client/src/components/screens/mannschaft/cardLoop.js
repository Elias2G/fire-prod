import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { determine } from '../../../redux/actions/actions';
import MannschaftCard from './card';

export default class MannschaftContainer extends Component {
  renderHelper = (data) => (
    data.map((data) => {
      return (
        <MannschaftCard data={data}/>
      )
    })
  )

  render() {
    return (
      <div>
        <div className="container-big">
          <div className="row shadow-land">
        {this.renderHelper(this.props.data)}
      </div>
    </div>
      </div>
    );
  }
}
