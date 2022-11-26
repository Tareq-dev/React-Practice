import React from 'react'
import './Home.css'
import { GiTechnoHeart } from 'react-icons/gi';
function Home() {

    return (
        <div>
            <nav className="logo">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt='' />
            </nav>
            <div className='content'>
                <div className='right'>
                    <img src="https://imgur.com/iOeUBV7.png" alt="" />

                    <div className='featureData'>
                        <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                    </div>
                    <div className='featureHeartData'>
                        <GiTechnoHeart className='heart' />
                        <p>78</p>
                    </div>

                </div>
                <div className='left'>
                    <h2>FitBit 19 - The Smartest Watch</h2>
                    <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                    <h3>Select Color</h3>
                    <div className='product'>
                        <img className='selectedProduct' src='https://imgur.com/iOeUBV7.png' alt="" />
                        <img src='https://imgur.com/PTgQlim.png' alt="" />
                        <img src='https://imgur.com/Mplj1YR.png' alt="" />
                        <img src='https://imgur.com/xSIK4M8.png' alt="" />
                    </div>
                    <h3>Features</h3>
                    <div className='feature'>
                        <button type="">Time</button>
                        <button type="">Heart Rate</button>
                    </div>
                    <button className='buy'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home
