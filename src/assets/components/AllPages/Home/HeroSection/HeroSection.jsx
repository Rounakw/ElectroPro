import React, { useState } from 'react'
import './HeroSection.css'
import img from '../assets/hero img.webp'
import img1 from '../assets/hero img.jpg'
import img2 from '../assets/hero img1.jpg'
import data from './data'
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom'
import { ItemsData } from '../../../../data/ItemsData'

function HeroSection() {
  let [value, SetValue] = useState('')
  let [link, setLink] = useState('')

  function handleOnChange(e){
    SetValue(e.target.value)
  }

  
  return (
    <div className='hero-section'>
      <img src={img} alt="" className='dekstopimg img' />
      <img src={img1} alt="" className='tabletimg img' />
      <img src={img2} alt="" className='mobileimg img' />
      <div className="hero-section-area">
        <div className="search-area" >
          <input type="text" placeholder='Search Iphones, Mac book...' spellCheck='false' value={value} onChange={handleOnChange} />
          
          <NavLink to={ value && `/ElectroPro/product/item/${link}`}>
          <button>Search</button>
          </NavLink>
          
        </div>
        <div className="sujjestion-main-div">
        <div className="sujjestion">
          {
            data.filter((item)=>{
              if(value && item[0].toLocaleLowerCase().includes(value.toLowerCase())){
                if(value.toLocaleLowerCase()!==item[0].toLocaleLowerCase())
                return item[0];
              }
            })
          .map((item)=>{
            return<>
            <span onClick={(e)=>{
              SetValue(e.target.innerText)
              setLink(item[1])
              }}>
              <SearchIcon/>
              {item[0]}</span>
            </>
          })}
        </div>
        </div>
        <div className="advertise-area">
          <h3>The best way to buy the refurbished products you love.</h3>
          <div style={{ margin: "auto", width: "100px" }}>
            <NavLink to={"/ElectroPro/product"}>

            <button>Shop now</button>
            </NavLink>

          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroSection