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
          <img className="placeholder_img" src={"http://157.230.106.121/files/" + Bilderverzeichnis} onClick={this.handleClick} />
          {this.state.open !== true ? '' : <div onClick={this.handleClick} className="flexbox justify-center flex-align-center spBG"><img className="fullIm" src={"http://157.230.106.121/files/" + Bilderverzeichnis}/></div>}
          <div className="container">
            <p className="bold">{Bezeichnung}</p>
            <p className="primary-light date-size">{
              Datum.substring(8,10) + '.' +
              Datum.substring(5,7) + '.' +
              Datum.substring(0,4)
            }</p>
            <p className="container nopr nopl">
              Beschreibung
            </p>
          </div>
        </div>
      </div>
    );
  }
}
