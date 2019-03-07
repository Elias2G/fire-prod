import React, { Component } from 'react';
import {NewsSlider} from './slider';

export default class Gallery extends Component {
  state = {
    class: 'gallery',
  }

  componentDidMount() {

  }


  render() {
    var { open, data } = this.props;
      return (
        <div className={this.state.class + '-' + this.props.open}>
          <div className="gallery_close" onClick={this.props.handleClick}>
            {open !== true ? '+' : 'X'}
          </div>
          <div className={'slider-' + this.props.open}>
            <NewsSlider data={data.Bilderverzeichnis}/>
          </div>
          <div>

          </div>
        </div>
      )
  }
}
