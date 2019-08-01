import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconImage from '../../images/icons/image-icon.jpg';

export default class Single extends Component {
  state = {
    opnen: false,
  }

  handleClick = () => {
    this.setState({
      open: this.state.open !== true ? true : false,
    })
  }

  render() {

    var { Bilderverzeichnis, Bezeichnung, Datum, Uhrzeit } = this.props;

    return (
      <div className="column col-md-4 col-lg-3">
        <div className="news-card shadow">
          <div className="container b-b flexbox">
            <div className="col-s-8 nop">
              <h2 className="primary date-size align-left regular">
                {
                Datum.substring(8,10) + '.' +
                Datum.substring(5,7) + '.' +
                Datum.substring(0,4)
                }
                 { Uhrzeit !== null ? ' | ' + Uhrzeit.substring(11,16) + ' Uhr' : ''}
              </h2>
            </div>

            <div className="col-s-4 nop">
              {Bilderverzeichnis !== null ? <img className="iconTermine" onClick={this.handleClick} src={IconImage} /> : ''}
              {
                this.state.open === true ?
                <div className="viewImageC flexbox justify-center flex-align-center" onClick={this.handleClick}>
                  <img className="fullImageView" src={'http://157.230.106.121/files/' + Bilderverzeichnis} />
                </div> :
                ''
              }
            </div>

          </div>


          <div className="container">
            <p className="bold">{Bezeichnung}</p>
            <p>

            </p>
          </div>

        </div>
      </div>
    );
  }
}
