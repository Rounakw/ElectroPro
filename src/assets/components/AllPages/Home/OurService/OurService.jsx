import React from 'react'
import repair from './assets/repair.png'
import exchange from './assets/exchange.png'
import upgrade from './assets/upgrade.png'
import warranty from './assets/warrenty.png'

import './OurService.css'

function OurService() {
    return (
        <div className='Whole-service-section'>
            <h2>Our Services</h2>
            <div className="services-item">
                <div className="repair item">
                    <img src={repair} alt="" />
                    <span>Repair</span>
                    <p className='para-service'>"Offering expert repair services to ensure your satisfaction guaranteed. Contact us."</p>
                    <button>Learn More</button>
                </div>
                <div className="exchange item">
                    <img src={exchange} alt="" />
                    <span>Exchange</span>
                    <p className='para-service'>"Offer assistance instead of exchanging relevant information for service."</p>
                    <button>Learn More</button>
                </div>
                <div className="upgrade item">
                    <img src={upgrade} alt="" />
                    <span>Upgrade</span>
                    <p className='para-service'>
                        Enhance your experience with our premium service upgrade options.</p>
                    <button>Learn More</button>
                </div>
                <div className="warranty item">
                    <img src={warranty} alt="" />
                    <span>Warranty</span>
                    <p className='para-service'>"Guaranteed service provided within warranty terms. Contact for assistance."</p>
                    <button>Learn More</button>
                </div>

            </div>

        </div>
    )
}

export default OurService