import React from 'react'
import Items from './items'
import './Category.css'
import mobile from './assets/mobile.webp'
import tab from './assets/tab.jpeg'
import macbook from './assets/macbook.jpeg'
import watch from './assets/watch.jpeg'
import pods from './assets/pods.jpeg'
import xbox from './assets/x-box.jpeg'
import tv from './assets/tv.jpeg'
import cam from './assets/cam.jpeg'
import { Link } from 'react-router-dom'

function Category() {

    return (
        <div className='Category-div'>
            <h1>Shop by Category</h1>
            <div className="items-div">
                <Link to={"/ElectroPro/product"} style={{ textDecoration: "none", color: "black" }}>
                    <Items thumb={mobile} title={"Restored cell phones"} />
                </Link>
                <Link to={"maintanence"} style={{ textDecoration: "none", color: "black" }}>
                <Items thumb={tab} title={"Restored tablets"} />
                </Link>
                <Link to={"maintanence"} style={{ textDecoration: "none", color: "black" }}>

                <Items thumb={macbook} title={"Restored computers"} />
                </Link>

                <Link to={"maintanence"} style={{ textDecoration: "none", color: "black" }}>

                <Items thumb={watch} title={"Restored Watches"} />
                </Link>

                <Link to={"maintanence"} style={{ textDecoration: "none", color: "black" }}>

                <Items thumb={pods} title={"Restored audio"} />
                </Link>
                <Link to={"maintanence"} style={{ textDecoration: "none", color: "black" }}>

                <Items thumb={xbox} title={"Restored video games"} />
                </Link>
                <Link to={"maintanence"} style={{ textDecoration: "none", color: "black" }}>

                <Items thumb={tv} title={"Restored TVs"} />
                </Link>
                <Link to={"maintanence"} style={{ textDecoration: "none", color: "black" }}>

                <Items thumb={cam} title={"Restored cameras"} />
                </Link>
            </div>

        </div>
    )
}

export default Category