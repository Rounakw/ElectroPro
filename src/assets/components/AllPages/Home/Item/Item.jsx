import React from 'react'
import { useParams } from 'react-router-dom'

function Item() {
    let {id} = useParams()
  return (
    <div>Item{id}</div>
  )
}

export default Item