import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Subnavbar.css'
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
function SubNavbar() {
  let list = [["SE Series","i_phone_se"]
  , ["6 Series","i_phone_6"], ["7 Series",'i_phone_7'], ["8 Series","i_phone_8"], ["X Series","i_phone_x"], ["11 Series","i_phone_11"], ["12 Series","i_phone_12"], ["13 Series","i_phone_13"], ["14 Series","i_phone_14"], ["15 Series","i_phone_15"],["Pro Series","i_phone_pro_series"]]

  

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
            return<>
             <NavLink to={`/ElectroPro/product/item/${serirs[1]}`} style={{color:"black", textDecoration:"none"}}>
            <div className='subnav-item'>
              <h3>{serirs[0]}</h3></div>
              </NavLink> 
              </>
          })
        }
      </Slider>
    </div>
  );
}

export default SubNavbar