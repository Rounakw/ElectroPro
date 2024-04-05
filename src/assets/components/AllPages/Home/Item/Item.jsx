import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemsData }  from '../../../../data/ItemsData'

function Item() {
    let {id} = useParams()

    let MobileDetails = []
    for(let item of ItemsData){
      for (const key in item){
         if (key === id) {
          MobileDetails = item
         }
        }
    }


  return (
    <div>Item{id}</div>
  )
}

export default Item