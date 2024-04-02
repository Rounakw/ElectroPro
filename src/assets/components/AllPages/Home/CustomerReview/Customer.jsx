import React from 'react'
import './Customer.css'
import Rating from '@mui/material/Rating';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Customer({name, profile, description, rating}) {
  return (
    <div className='customer'>
<FormatQuoteIcon fontSize='large' id="quotation" sx={{color:"#FAAF00"}}/>
        <div className="customer-description">
        {description}
        </div>
        <Rating name="read-only" value={rating} readOnly/>
        <img src={profile} alt="" className='customer-profilepic'/>

        <span className='customer-name'>{name}</span>

    </div>
  )
}

export default Customer