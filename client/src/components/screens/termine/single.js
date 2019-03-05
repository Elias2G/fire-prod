import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    var { Bilderverzeichnis, Bezeichnung, Datum } = this.props;

    return (
      <div className="column col-md-4 col-lg-3">
        <div className="news-card shadow">
          <div className="container b-b">
            <h2 className="primary date-size align-left regular">
              {
              Datum.substring(8,10) + '.' +
              Datum.substring(5,7) + '.' +
              Datum.substring(0,4)
              }
            </h2>
          </div>


          <div className="container">
            <p className="bold">{Bezeichnung}</p>
            <p className="container nopr nopl">
              Beschreibung
            </p>
          </div>

        </div>
      </div>
    );
  }
}
