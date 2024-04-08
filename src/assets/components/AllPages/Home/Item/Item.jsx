import React ,{useState}from 'react'
import { useParams } from 'react-router-dom'
import { ItemsData } from '../../../../data/ItemsData'
import ProductItems from './ProductItems'
import './Item.css'
import Alert from '@mui/material/Alert';
function Item() {
  let { id } = useParams()
  let [addCart, setAddCart]=useState(false)

  function updatemsz(){
    setAddCart(true)
    setTimeout(() => {
      setAddCart(false)
    }, 3000);
  }



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
             <ProductItems id={data.id} title={data.title} thumbnail={data.thumbnail} rating={data.rating} price={data.price} isBestSeller={data.isBestSeller} rom={data.details.rom} display={data.details.display} frontCamera={data.details.frontCamera} rearCamera={data.details.rearCamera} processor={data.details.processor} warranty={data.details.warranty} updatemsz={updatemsz}/>
             </div>
          })
        }
      </div>
      {
         addCart && <div className='addCartPopup'>
         <Alert variant="filled" severity="success">
         Item Added to Cart Successfully
       </Alert>
       </div>

      }
      
    </div>
  )

}

export default Item