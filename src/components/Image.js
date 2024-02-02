import React from 'react'
import { product } from '../product'

const Image = () => {
  return (
    <div>
        <img width={300} src={product.imgUrl} alt='apple'/>
    </div>
  )
}

export default Image