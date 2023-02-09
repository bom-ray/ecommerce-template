import { Star } from '@mui/icons-material'
import React from 'react'
import './product.scss'

function Product() {

    // const images = [
    //   {name: 'girl', images: './girls.jpg'},
    //   {name: 'babes', images: './babes.jpg'},
    //   {name: 'broad', images: './broad.jpg'}
    // ]

  return (
    <div className='product' >
      <div className="img-wrapper">
        <img src="./babes.jpg" alt="" />
      </div>
      <h4 className="title">Lorem ipsum dolor sit amet consectetur.</h4>
      <span className="rating">
        <Star className='star' /><Star className='star'  /><Star className='star'  />
        <Star  className='star' />
      </span>
      <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quis?</p>
      <h5 className="price">$20.00</h5>
      <button className='cart' >Add To Cart</button>
    </div>
  )
}

export default Product