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
  console.log(imageArray);

  var renderSlider = (data) => {
    return data.map(data => {
      return (
        <div>
          <img className="news-slider-img" source={data} />
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
