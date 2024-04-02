import React, { useState } from 'react'
import './HeroSection.css'
import img from '../assets/hero img.webp'
import img1 from '../assets/hero img.jpg'
import img2 from '../assets/hero img1.jpg'
import data from './data'
import SearchIcon from '@mui/icons-material/Search';

function HeroSection() {
  let [value, SetValue] = useState('')

  function handleOnChange(e){
    SetValue(e.target.value)
  }
  function handleOnClick(){
    console.log(value);
  }

  return (
    <div className='hero-section'>
      <img src={img} alt="" className='dekstopimg img' />
      <img src={img1} alt="" className='tabletimg img' />
      <img src={img2} alt="" className='mobileimg img' />
      <div className="hero-section-area">
        <div className="search-area" >
          <input type="text" placeholder='Search Iphones, Mac book...' spellCheck='false' value={value} onChange={handleOnChange} />
          <button onClick={handleOnClick}>Search</button>
        </div>
        <div className="sujjestion-main-div">
        <div className="sujjestion">
          {
            data.filter((item)=>{
              if(value && item.toLocaleLowerCase().includes(value.toLowerCase())){
                if(value.toLocaleLowerCase()!==item.toLocaleLowerCase())
                return  item;
              }
            })
          
          .map((item)=>{
            return<>
            <span onClick={(e)=>{SetValue(e.target.innerText)}}>
              <SearchIcon/>
              {item}</span>
            </>
          })}

        </div>

        </div>
        







        <div className="advertise-area">
          <h3>The best way to buy the refurbished products you love.</h3>
          <div style={{ margin: "auto", width: "100px" }}>
            <button>Shop now</button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroSection