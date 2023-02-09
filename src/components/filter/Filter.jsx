import React, { useState } from 'react'
import './filter.scss'

function Filter() {
  const [selected, setselected] = useState([])
  const  [priceFilter, setpriceFilter] = useState({
    min: 0,
    max: 0
  })

  const categories = [
    {name: 'matainer'},{ name: 'sport' },{ name: 'cars' },{ name: 'electronics' },
    { name: 'computer' },{name: 'matainer'}
  ]

  const handleCategoryChange = (e) => {
    
    if(e.target.checked){
      setselected([ ...selected, e.target.value ])
    }else{
       setselected(selected.filter((sel) => sel !== e.target.value))
    }
   
  }

  const handlePrice = (e) => {
    // e.preventDefault();
    setpriceFilter({ ...priceFilter, [e.target.name]: e.target.value })
  }

  return (
    <div className='filter' >
      {selected}
      <div className="categories">
        <div className='title' >CATEGORIES</div>
        {
          categories.map((category,i) => (
        <div key={i} className="content">
        <input type="checkbox"
        value={category.name}
        onChange={handleCategoryChange}
        checked={ selected.includes(category.name) }
        />
        <span>{category.name}</span>
        </div>
          ))
        }       
      </div>

      {/* <div className="gender">
        <div className='title' >GENDER</div>
        {
          gender.map((gen) => (
        <div className="content">
        <input type="radio" />
        <span>{gen.name}</span>
        </div>
          ))
        }       
      </div> */}

      {/* size
      <div className="size">
      <div className='title' >SIZE</div>
      <div className="items">
        <span>XL</span>
        <span>XL</span>
        <span>XL</span>
      </div>
      </div> */}

      {/* price */}
      <div className="price">
        <p>initial price</p>
        <p>{priceFilter.min}</p>
        <input type="range" name="min" id="" max={10000} min={0} step={500} value={priceFilter.min} 
        onChange={handlePrice}
        />
      </div>

       {/* price */}
       <div className="price">
        <p>final price</p>
        <p>{priceFilter.max}</p>
        <input type="range" name="max" id="" max={10000} min={0} step={500} value={priceFilter.max}
        onChange={handlePrice}
        />
      </div>

      {/* search button */}
      <button>
        All Reset
      </button>
    </div>
  )
}

export default Filter