import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROOT_URL, getEinsatz } from '../../../config';

import { fetch } from '../../../redux/actions';

import { Card } from './card';

import Brand from '../../images/filler/brand.jpg';
import Help from '../../images/filler/help.jpg';

import Fire from '../../images/icons/fire.svg';
import Helper from '../../images/icons/help.svg';

class Einsätze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        date: '9. Oktober 2018',
      }

    }
  }

  componentDidMount() {
    if(this.props.data.loaded.loaded.Einsätze !== true) {
      this.props.fetch('fetch_einsatz', `${ROOT_URL}${getEinsatz}`);
    }
  }

  shouldComponentUpdate() {
    if(this.props.data.loaded.loaded.Einsätze === false) {
      return true;
    } else {
      return false;
    }
  }

  renderHelper = (data) => {

    return(
      data.map((data, i) => {
        if(i < 3) {
          var imageArray;
          var icon;
          var clock = data.Beginn;
          var type;

          if(data.Bilderverzeichnis === null) {
            if(data.Brandeinsatz === 1) {
              imageArray = Brand;
              icon = Fire;
              type = 'Brandeinsatz';
            }
            if(data.Techn_Einsatz === 1 || data.Techn_Hilfeleistung === 1) {
              imageArray = Help;
              icon = Helper;
              type = 'Technische Hilfeleistung'
            }
          } else {
            if(data.Brandeinsatz === 1) {
              var img = data.Bilderverzeichnis.split(",");
              imageArray = img[0];
              icon = Fire;
              type = 'Brandeinsatz';
            }
            if(data.Techn_Einsatz === 1 || data.Techn_Hilfeleistung === 1) {
              var img = data.Bilderverzeichnis.split(",");
              imageArray = img[0];
              icon = Helper;
              type = 'Technische Hilfeleistung'
            }
          }

          if(data.Beginn === null) {
            clock = " n.A";
          }

          return (
            <div key={i} className="column col-s-12 col-md-6 col-lg-4">
              <Card
                loaded={this.props.data.loaded.loaded.Einsätze}
                title={data.Ausrueckungsgrund}
                subtitle={data.Einsatzort}
                date={data.Datum}
                clock={clock}
                ort={data.Einsatzort}
                image={imageArray}
                icon={icon}
                type={type}
                is={data.Bilderverzeichnis}
              />
            </div>
          )
        } else {
          return
        }

      })
    )
  }

  render() {
    var array = [];
    this.props.data.einsätze.map( data => {
      array.splice( 0, 0, data)
    })

    return (
      <div className="einsatz-container">
        <div className="row">
          {this.renderHelper(array)}
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
