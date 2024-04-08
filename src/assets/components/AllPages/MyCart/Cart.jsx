import React from 'react'
import './Cart.css'

function Cart({ title, thumbnail, price}) {
  return (
    <>
    <img src={thumbnail} alt="" />
    <p className="percarttitle">{title}</p>
    <p className="percartquantity">1</p>
    <p className="percartprice">{price}</p>
    
    </>
  )
}

export default Cart