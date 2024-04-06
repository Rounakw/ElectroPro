import React from 'react'
import './Product-items.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import Rating from '@mui/material/Rating';
function ProductItems({ id, title, thumbnail, rating, price, isBestSeller, rom, display, frontCamera, rearCamera, processor, warranty }) {
    return (<>
        <div className='Product-items' >
            <div className="thumbnail-div">
                <img className='thumbing' src={thumbnail} alt="" />

            </div>

            <div className="details">
                <h3 className='product-name'>{title}</h3>
                <span className="rating">{rating}<StarRateIcon sx={{ color: "white", width: "16px", paddingBottom: "2px" }} /></span>

                <div className="product-description">
                    <li className='rom'>{rom} GB ROM</li>
                    <li className='display'>{display}</li>
                    <li className='camera'>{frontCamera}MP Front Camera|{rearCamera} MP Rear Camera</li>
                    <li className='processor'>{processor} Processor</li>
                    <li className='warrenty'>{warranty}</li>
                </div>
            </div>

            <div className="price-section">
                <span className='price'>&#x20b9;{price}</span>
                <p className='delivery'>Free Delivery</p>
                <p className='offer'>save extra with combo offers</p>
                <p className='exchange'>Upto <span>&#x20b9;1999</span> Off on Exchange</p>
                <div className='addToCarDiv'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>


        <div className="mobile-details">
            <div className="thumbnail-div-mobile">
                <img src={thumbnail} alt="" />
            </div>

            <div className="details-mobile">
                <h3 className='product-name-mobile'>{title}</h3>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly sx={{ color: "#1a9220",fontSize:"20px" }} />
                
                
                <div className="price-div-mobile">
                <span className='price-mobile'>&#x20b9;{price}</span>
                <p className='delivery-mobile'>Free Delivery</p>
                    
                    </div>
                <p className='offer-mobile'>save extra with combo offers</p>
                <p className='exchange-mobile'>Upto <span>&#x20b9;1999</span> Off on Exchange</p>
                <div className='addToCarDiv-mobile'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProductItems