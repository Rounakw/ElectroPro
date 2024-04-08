import React ,{useState}from 'react'
import { useParams } from 'react-router-dom'
import { ItemsData } from '../../../../data/ItemsData'
import ProductItems from './ProductItems'
import './Item.css'
function Item() {
  let { id } = useParams()

  let MobileDetails = []
  for (let item of ItemsData) {
    for (const key in item) {
      if (key === id) {
        MobileDetails = item
      }
    }
  }

  return (
    <div className='main-detail-page'>


      
      <div className="items-section">
        {
          MobileDetails[id].map((data) => {
            return <div key={data.id}>
             <ProductItems id={data.id} title={data.title} thumbnail={data.thumbnail} rating={data.rating} price={data.price} isBestSeller={data.isBestSeller} rom={data.details.rom} display={data.details.display} frontCamera={data.details.frontCamera} rearCamera={data.details.rearCamera} processor={data.details.processor} warranty={data.details.warranty} />
             </div>
          })
        }
      </div>
    </div>
  )

}

export default Item