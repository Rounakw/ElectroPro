import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomerReview.css'
import Customer from "./Customer";

function CustomerReview() {

  let customers = [
    {
      name: 'John Doe',
      profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Great product, excellent service, highly recommended. Will definitely purchase again. Five stars all the way. Thank you!",
      rating: 4
    },
    {
      name: 'Rajdeep Dhar',
      profile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        "Terrible experience! Poor service, rude staff, and overpriced. Wouldn't recommend to anyone. Avoid at all costs for better options.",
      rating: 5
    },
    {
      name: 'Smriti Mishra',
      profile: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 
      "Product was disappointing. Poor quality and didn't meet expectations. Would not recommend to others. Disappointed with my purchase.",
      rating: 5
    },
    {
      name: 'Jonathan Garg',
      profile: 'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        "Terrible experience! Poor service, rude staff, and overpriced. Wouldn't recommend to anyone. Avoid at all costs for better options.",
      rating: 4
    },
    {
      name: 'Rounak Basak',
      profile: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        "Great service, fast delivery, quality product. Highly recommend this company. Will definitely be purchasing from them again!",
      rating: 4
    },
    {
      name: 'Adrita Sharma',
      profile: 'https://images.unsplash.com/photo-1536164261511-3a17e671d380?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        "Excellent product, exceeded expectations. Highly recommend! Great value for the price. Will definitely purchase again in the future.",
      rating: 5
    },
  ]

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1190,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 980,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 690,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div id="slider-container">
      <h2 id="dekstop" style={{ textAlign: "center" }}>What our clients says about us</h2>
      <h2 id="mobile" style={{ textAlign: "center" }}>Review</h2>
      <Slider {...settings}>
        {
          customers.map((item) => {
            return <div>
              <Customer name={item.name} profile={item.profile} rating={item.rating} description={item.description} />
            </div>
          })
        }

      </Slider>
    </div>
  );
}



export default CustomerReview