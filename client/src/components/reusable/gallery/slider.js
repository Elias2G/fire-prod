import React from 'react';
import Slider from 'react-slick';

export const NewsSlider = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
  var imageArray = props.data.split(',');

  var renderSlider = (data) => {
    return data.map((data, i) => {
      return (
        <div key={i}>
          <img alt-text="Neuigkeiten Bilder" className="news-slider-img" src={"http://157.230.106.121/files/" + data} />
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
