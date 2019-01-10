import React, { Component } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';

export default class UnderNav extends Component {

  getYears = () => {
    var years = [];
    this.props.data.map((data) => {
      years.push(data.Datum.substring(0,4))
    })
    years = _.uniq(years);
    years.reverse()
    return { years }
  }

  renderHelper = (years) => {
    return years.map((data) => {
      return (
        <div onClick={() => this.props.click(data)}>
          <p className="align-center">{data}</p>
        </div>
      )
    })
  }

  render() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    }
    var { years } = this.getYears();

    return (
      <div className="under-nav-container">
        <div className="">
          <Slider {...settings}>
            {this.renderHelper(years)}
          </Slider>
        </div>

      </div>
    );
  }
}
