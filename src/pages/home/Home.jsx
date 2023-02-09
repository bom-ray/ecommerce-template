import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Filter from '../../components/filter/Filter'
import Hero from '../../components/hero/Hero'
import Product from '../../components/product/Product'
import './home.scss'

function Home() {
  return (
    <div className='home' >
      <Navbar/>
      <div className="header">
        <Filter/>
        <Hero/>     
      </div>
      <div className="products">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
      <div className="footer">
        <p>copyright 2022</p>
      </div>
    </div>
  )
}

export default Home