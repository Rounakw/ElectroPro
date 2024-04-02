import React from 'react'
import SubNavbar from '../../SubNavbar/SubNavbar'
import HeroSection from './HeroSection/HeroSection'
import OurService from './OurService/OurService'
import CustomerReview from './CustomerReview/CustomerReview'
import RefurbishedProducts from './RefurbishedArea/RefurbishedProducts'
import Category from './Category/Category'

function Home() {
  return (
    <div>
      <SubNavbar/>
      <HeroSection/>
      <RefurbishedProducts/>
      <OurService/>
      <Category/>
      <CustomerReview/>
    </div>
  )
}

export default Home