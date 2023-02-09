import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './carts.scss'

function Carts() {
  return (
    <div className='carts' >
      <Navbar/>
      <div className="wrapper">
        <div className="scroll">
        <div className="item">
          <div className="left">
            <div className="img-wrapper">
              <img src="./girls.jpg" alt="" />
            </div>
            <div className="desc">
              <p>Shoes</p>
              <p>1000 * 1  <span>$1000</span></p>
            </div>
          </div>
          <div className="right">
            <button>x</button>
            <button>-</button>
          </div>
        </div>

        {/*  */}
        <div className="item">
          <div className="left">
            <div className="img-wrapper">
              <img src="./girls.jpg" alt="" />
            </div>
            <div className="desc">
              <p>Shoes</p>
              <p>1000 * 1  <span>$1000</span></p>
            </div>
          </div>
          <div className="right">
            <button>x</button>
            <button>-</button>
          </div>
        </div>

        </div>
       
        {/* checkout */}
        <div className="summary">
          <div className="title">Cart Summary</div>
          <hr />
          <div className="total">
            <p>Total Price</p>
            <p>$460</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carts