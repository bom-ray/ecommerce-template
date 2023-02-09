import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './hero.scss'

function Hero() {
  return (
    <div className='hero' >
        <Carousel
        showThumbs={false}
        >
                <div className='wrapper'>
                    <div className="left">
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ad!</p>
                        <button>Lorem ipsum</button>
                    </div>
                    <div className="right">
                        <img src="./girls.jpg" alt="" />
                    </div>
                </div>

                {/* 2nd */}
                <div className='wrapper'>
                    <div className="left">
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ad!</p>
                        <button>Lorem ipsum</button>
                    </div>
                    <div className="right">
                        <img src="./girls.jpg" alt="" />
                    </div>
                </div>

                {/* 3rd */}
                <div className='wrapper'>
                    <div className="left">
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ad!</p>
                        <button>Lorem ipsum</button>
                    </div>
                    <div className="right">
                        <img src="./girls.jpg" alt="" />
                    </div>
                </div>
               
            </Carousel>
    </div>
  )
}

export default Hero