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

function Category() {

    return (
        <div className='Category-div'>
            <h1>Shop by Category</h1>
            <div className="items-div">
                <Items thumb={mobile}  title={"Restored cell phones"} />
                <Items thumb={tab}  title={"Restored tablets"} />
                <Items thumb={macbook}  title={"Restored computers"} />
                <Items thumb={watch}  title={"Restored Watches"} />
                <Items thumb={pods}  title={"Restored audio"} />
                <Items thumb={xbox}  title={"Restored video games"} />
                <Items thumb={tv}  title={"Restored TVs"} />
                <Items thumb={cam}  title={"Restored cameras"} />
            </div>

        </div>
    )
}

export default Category