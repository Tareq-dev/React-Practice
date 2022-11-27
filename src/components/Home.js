import React, { useState } from 'react'
import './Home.css'
import ProductData from './ProductData/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import Data from './Data'


function Home() {
    const data = Data;
    const [productImage, setProductImage] = useState("https://imgur.com/Mplj1YR.png")
    
    return (
        <div>
            <nav className="logo">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt='' />
            </nav>
            <div className='content'>
                <ProductPreview data={data} productImage={productImage} />
                <ProductData data={data} />
            </div>
        </div>
    )
}

export default Home
