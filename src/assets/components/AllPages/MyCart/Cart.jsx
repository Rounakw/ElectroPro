import React from 'react'
import './Cart.css'

function Cart({ title, thumbnail, price }) {
  return (
    <>
      <img src={thumbnail} alt="" />
      <p className="percarttitle">{title}</p>
      <p className="percartquantity"><span>Qty: </span>1</p>
      <div className='percartprice-div'>
        <p className="percartprice">&#x20b9;{price}</p>
        <button>Remove</button>
      </div>
    </>
  )
}

export default Cart