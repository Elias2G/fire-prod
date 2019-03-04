import React, { Component } from 'react';

export default class Gallery extends Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({
      open: this.state.open === false ? true : false,
    })
  }

  render() {
    return (
      <div className="col-md-4 col-lg-3 col-s-6">
        <img onClick={this.handleClick} src={this.props.data} />
        {this.state.open === true ?
          <div className="modal" onClick={this.handleClick}>
            <div className="flexbox justify-center flex-align-center fh">
              <img src={this.props.data} />
            </div>

          </div>
          : ' '}
      </div>
    );
  }
}
