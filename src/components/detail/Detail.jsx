import { Star } from '@mui/icons-material'
import React from 'react'
import girls from '../../img/girls.jpg'
import './detail.scss'

function Detail() {
  return (
    <div className='detail' >
        <div className="left">
            <div className="wrapper">
                <img src={girls} alt="" />
            </div>
            <button >20% off</button>
           
        </div>
        <div className="right">
            <h3 className="title">Lorem ipsum dolor sit.</h3>
            <h4 className="price">$20000 - $23000</h4>
            <div className='rating' ><span><Star className='star' /><Star className='star' /><Star className='star' /><Star className='star' /></span> Lorem, ipsum dolor.</div>
            <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptate doloribus recusandae deleniti officia quasi accusamus nesciunt fuga omnis similique?</p>
            <div className="cart">
                <div>
                    <button className="adjust">-</button>
                    <span>1</span>
                    <button className="adjust">+</button>
                </div>
                <button className="addtocart">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Detail