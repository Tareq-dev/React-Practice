import React, { useState } from 'react'
import './Home.css'
import ProductData from './ProductData/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import Data from './Data'


function Home() {
    const data = Data;
    const [productImage, setProductImage] = useState("")
    const [heartBeat, setHeartBeat] = useState(true)
    const [position, setPosition] = useState(0)

    const onClickProductPreview = (i) => {
        const updateProductPreviewImage = data.colorOptions[i].imageUrl;
        setProductImage({ productImage: updateProductPreviewImage });
        setPosition({ position: i })
    }

    // const onclickFeatureData = (i) => {
    //     setHeartBeat(false)
    // }
    return (
        <div>
            <nav className="logo">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt='' />
            </nav>
            <div className='content'>
                <ProductPreview data={data} productImage={productImage} heartBeat={heartBeat} />
                <ProductData data={data} onClickProductPreview={onClickProductPreview} position={position} />
            </div>
        </div>
    )
}

export default Home
