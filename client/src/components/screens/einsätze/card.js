import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { NavLink } from 'react-router-dom';

import ImageIcon from '../../images/icons/image-icon.jpg';

export default class Card extends Component {
  state = {
    open: 'e-closed',
    opener: 'opener'
  }

  handleClick = () => {
    this.setState({
      open: this.state.open === 'e-open' ? 'e-closed' : 'e-open',
      opener: this.state.opener === 'opener' ? 'closer' : 'opener'
    })
  }

  render() {
    const { data } = this.props;
    return (
      <div className="col-s-12 einsatz-card-full shadow nop">

        <div className="einsatz-card-title" onClick={this.handleClick}>
          <div className="row nop">
            <div className="column col-s-6 col-lg-3 nop">
              <h6 className="light">
                {
                  data.Datum.substring(8,10) + '.' +
                  data.Datum.substring(5,7) + '.' +
                  data.Datum.substring(0,4)
                }
              </h6>
            </div>
            <div className="column col-s-6 col-lg-3 nop">
              <h6 className="light">
                {data.Ausrueckungsgrund}
              </h6>
            </div>
            <div className="column col-s-6 col-lg-3 nop">
              <h6 className="light">
                {data.Einsatzort}
              </h6>
            </div>
            <div className={"column col-s-6 col-lg-3 nop justify-right " + this.state.opener}>
              <div>
                {data.Bilderverzeichnis !== null ? <img className="image-icon" src={ImageIcon} /> : '' }
              </div>
            </div>
          </div>
        </div>

        <div className={"einsatz-info-container " + this.state.open}>
          <div className="row nop">
            <div className="column col-s-12 col-lg-6 nop">
              <h6>Einsatzbericht</h6>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div className="column col-s-12 col-lg-6 nop">
              <div className="row">
                <div className="column col-md-6 nopt nopl nopr">
                  <h6>Einsatzdaten</h6>
                  <p>
                    Datum: {
                      data.Datum.substring(8,10) + '.' +
                      data.Datum.substring(5,7) + '.' +
                      data.Datum.substring(0,4)
                    }
                  </p>
                  <p>
                    Beginn:
                    {
                      data.Beginn === null ? 'x' : data.Beginn.substring(11,16)
                    }
                  </p>
                  <p>Dauer: {data.Dauer} h</p>
                  <p>Ort: {data.Einsatzort}</p>
                </div>
                <div className="column col-md-6 nopt nopl nopr">
                  <h6>Eigene Einsatzkräfte</h6>
                  <p>Mannschaft: { data.Anzahl }</p>
                  <p>Fahrzeuge: </p>
                  { data.TLFA2000 === 1 ? <NavLink to="/fahrzeuge"><p>TLFA2000</p></NavLink> : ''}
                </div>

              </div>
            </div>
          </div>

          <div className="row nop">
            <div className="column col-s-12 nop">
              { data.Bilderverzeichnis !== null ? <EinsatzSlider data={data.Bilderverzeichnis}/> : '' }
            </div>
          </div>
        </div>

    </div>

    );
  }
}

export const EinsatzSlider = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  var imageArray = props.data.split(';');

  var renderSlider = (data) => {
    return data.map(data => {
      return (
        <div>
          <img className="placeholder_img" source={data} />
        </div>
      )
    })
  }

  return (
    <Slider {...settings} >
      {renderSlider(imageArray)}
    </Slider>
  )
}
