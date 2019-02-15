import React, { Component } from 'react';

export default class Gallery extends Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({
      open: true,
    })
  }

  render() {
    if(this.state.open === false){
      return (
        <div className="col-md-4 col-lg-3 col-s-6">
          <img src={this.props.data} />
        </div>
      );
    } else {
      return (
        <div className="modal">
          <img src={this.props.data} />
        </div>
      );
    }

  }
}
