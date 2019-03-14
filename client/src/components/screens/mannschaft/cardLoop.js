import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { determine } from '../../../redux/actions/actions';
import MannschaftCard from './card';

export default class MannschaftContainer extends Component {

  renderHelper = (data) => (
    data.map((data, i) => {
      if( data.Reihung <= 19 && data.Status !== 'X' && data.Status !== 'R' ) {
        return (

          <MannschaftCard key={i} data={data}/>

        )
      }
    })
  )

  renderHelper2 = (data) => (
    data.map((data, i) => {
      if( data.Reihung <= 29 && data.Reihung >= 20 && data.Status !== 'X' && data.Status !== 'R' ) {
        return (

          <MannschaftCard key={i} data={data}/>

        )
      }
    })
  )

  renderHelper3 = (data) => (
    data.map((data, i) => {
      if( data.Reihung <= 39 && data.Reihung >= 30 && data.Status !== 'X' && data.Status !== 'R' ) {
        return (

          <MannschaftCard key={i} data={data}/>

        )
      }
    })
  )

  renderHelper4 = (data) => (
    data.map((data, i) => {
      if( data.Reihung <= 49 && data.Reihung >= 40 && data.Status !== 'X' && data.Status !== 'R' ) {
        return (

          <MannschaftCard key={i} data={data}/>

        )
      }
    })
  )

  renderHelper5 = (data) => (
    data.map((data, i) => {
      if( data.Status !== 'X' && data.Status === 'R' ) {
        return (

          <MannschaftCard key={i} data={data}/>

        )
      }
    })
  )

  renderHelper6 = (data) => (
    data.map((data, i) => {
      if( data.Status === 'X' && data.Status !== 'R' ) {
        return (

          <MannschaftCard key={i} data={data}/>

        )
      }
    })
  )

  renderHelper7 = (data) => {
    if(data !== undefined) {
      return data.map((data, i) => {
        if( data.Status === 'J' && data.Status !== 'R' ) {
          return (

            <MannschaftCard key={i} data={data}/>

          )
        }
      })
    }

  }

  render() {
    console.log(this.props.data);
    const jugend = this.props.data.length - 1;
    console.log(this.props.data[jugend].Jugend);
    return (
      <div>
        <div className="container-big">
          <h3 className="m-pb">Kommando</h3>
          <div className="row">
            {this.renderHelper(this.props.data)}
          </div>
        </div>
        <div className="container-big">
          <h3 className="m-pb">Chargen</h3>
          <div className="row  ">
            {this.renderHelper2(this.props.data)}
          </div>
        </div>
        <div className="container-big">
          <h3 className="m-pb">Verwalter</h3>
          <div className="row ">
            {this.renderHelper3(this.props.data)}
          </div>
        </div>
        <div className="container-big">
          <h3 className="m-pb">Mannschaft</h3>
          <div className="row  ">
            {this.renderHelper4(this.props.data)}
          </div>
        </div>
        <div className="container-big">
          <h3 className="m-pb">Reserve</h3>
          <div className="row  ">
            {this.renderHelper5(this.props.data)}
          </div>
        </div>
        <div className="container-big">
          <h3 className="m-pb">Altmitglieder</h3>
          <div className="row  ">
            {this.renderHelper6(this.props.data)}
          </div>
        </div>
        <div className="container-big">
          <h3 className="m-pb">Jugendfeuerwehr</h3>
          <div className="row  ">
            {this.renderHelper7(this.props.data[jugend].Jugend)}
          </div>
        </div>
      </div>
    );
  }
}
