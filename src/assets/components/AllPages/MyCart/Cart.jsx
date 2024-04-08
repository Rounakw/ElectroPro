import React from 'react'
import './Cart.css'
import { useCart } from '../../context/CartContext'

function Cart({ title, thumbnail, price }) {

  let[cart, setCart]=useCart(title)

  console.log(cart);

  function handleOnClickToRremoveFromCart(title){
    setCart((prevCart)=>{
      return prevCart.filter((perCart)=>{
        if (perCart.title !== title) return perCart
      })
    })
  }


  return (
    <>
      <img src={thumbnail} alt="" />
      <p className="percarttitle">{title}</p>
      <p className="percartquantity"><span>Qty: </span>1</p>
      <div className='percartprice-div'>
        <p className="percartprice">&#x20b9;{price}</p>
        <button onClick={()=>{handleOnClickToRremoveFromCart(title)}}>Remove</button>
      </div>
    </>
  )
}

export default Cart