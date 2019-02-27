import React, { Component } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import { connect } from 'react-redux';

import { fetch } from '../../../redux/actions';
import { ROOT_URL, getEinsatzPersonen } from '../../../config';

import UnderNav from '../../reusable/under-nav';
import Card from './card'

class EinsatzContainer extends Component {
  state = {
    filter: new Date().getFullYear(),
  }

  // filter nach jahr function gibt einen array aus objecten zurück
  filterHelper = (data) => {
    // leerer array zum zwischenspeichern der daten
    const arrayYear = [];

    // mapt / loopt den array data
    data.map((data) => (
      //führt für jedes object (data) die filter funktion aus
      this.filter(this.state.filter, data, arrayYear)
    ))
    // wenn alle einträge gamapt / geloopt wurden gibt die funktion arrayYear zurück zum weiterverwenden
    return { arrayYear };
  }

  // 2 parameter: 1.) date = die state, data = data von der map funktion, arrayYear = leeres array
  filter = (date, data, array) => {
    // beinhaltet die ersten 4 Chars vom Datum
    var objYear = data.Datum.substring(0,4);

    if( objYear == date ) {
      // fügt das object in einen array ein
      array.push(data);
    }
  }

  renderHelper = (array) => {
    const month = [ '13', '12', '11', '10', '09', '08', '07', '06', '05', '04', '03', '02', '01' ];
    const monthName = ['none', 'Dezember', 'November', 'Oktober', 'September', 'August', 'Juli', 'Juni', 'Mai', 'April', 'März', 'Februar', 'Januar'];
    var pos = 0;
    const arrayMonth = [];
    var sammlung = {};
    return (
      array.reverse().map((data, i) => {
        var objMonth = data.Datum.substring(5,7);
        if( month[pos] === objMonth ) {
          return (
            <Card data={data} />
          )
        } else {
          if( month[++pos] === objMonth ) {
            return (
              <>
                <h4 className="col-s-12 red-title-bg shadow">{monthName[pos]}</h4>
                <Card data={data} />
              </>
            )
          } else {
            ++pos
            if(objMonth !== month[pos]) {
              for (var i = 0; i < 20; i++) {
                ++pos
                if( objMonth === month[pos]) {
                  return (
                    <>
                      <h4 className="col-s-12 red-title-bg shadow">{monthName[pos]}</h4>
                      <Card data={data} />
                    </>
                  )
                }
              }
            } else {
              return (
                <>
                  <h4 className="col-s-12 red-title-bg shadow">{monthName[pos]}</h4>
                  <Card data={data} />
                </>
              )
            }
          }
        }
      })
    )
  }

  handleClick = (data) => {
    this.setState({
      filter: data
    })
  }

  render() {
    // deconstructuring die daten die vom redux store kommen
    const { einsätze } = this.props.data;
    // eine funktion um nur die einsätze mit dem richtigen Jahr
    // auszuwählen das in der state steht
    var { arrayYear } = this.filterHelper(einsätze);

    return (
      <div className="row container-big nopt">
        {this.renderHelper(arrayYear)}
        {this.renderPortal(einsätze, this.handleClick)}
      </div>
    );
  }

  renderPortal = (data, callback) => {
    return ReactDOM.createPortal(
      <div className="under-nav shadow">
        <UnderNav data={data} click={callback}/>
      </div>,
      document.getElementById("navPortal")
    )
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
)(EinsatzContainer)
