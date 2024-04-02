import React from 'react'
import './items.css'

function Items({ thumb, title }) {
    return (
        <div className='cat-item'>
        <div className='round-div'>
                <img src={thumb} alt="" />
        </div>
        <h3>{title}</h3>
    </div>
    )
}

export default Items