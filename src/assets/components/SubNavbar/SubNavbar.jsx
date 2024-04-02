import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Subnavbar.css'
import Slider from 'react-slick';
function SubNavbar() {
  let list = ["SE Series", "6 Series", "7 Series", "8 Series", "X Series", "11 Series", "12 Series", "13 Series", "14 Series", "15 Series","Pro Series"]

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 7,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 380,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }
    ]
  };
  return (
    <div className="slider-container" id='subnavbarslider'>
      <Slider {...settings}>
        {
          list.map((serirs) => {
            return <div className='subnav-item'>
              <h3>{serirs}</h3></div>
          })
        }
      </Slider>
    </div>
  );
}

export default SubNavbar