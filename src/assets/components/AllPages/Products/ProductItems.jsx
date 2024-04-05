import React from 'react'
import './ProductItem.css'
import apple from './assets/apple.png'
import { Link } from 'react-router-dom'

function ProductItems({ brandName, brandlogo, title, startingPrice, cuttPrice, description, thumbnail,id }) {
    return (
        <div className='Mobileitems'>
            <div className="Mobileitems-details">
                <span className='brand-name'><img src={apple} className='brand-logo' alt="" />{brandName}</span>

                <p className='cartTitle'>{title}</p>

                <div className="price-div">
                    <p className='Start-price'>FROM &#x20b9;{startingPrice}*</p>
                    <span className='Cut-price'>&#x20b9; {cuttPrice}</span>
                </div>

                <p className='Cart-description'>{description}</p>

                <Link to={`item/${id}`}>
                <button className='Mobileitems-details-btn'>Details</button>
                </Link>
            </div>

            <img src={thumbnail}  alt="" className='Mobileitems-image'/>
        </div>
    )
}

export default ProductItems