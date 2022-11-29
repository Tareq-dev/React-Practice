import React from 'react'
import './ProductData.css'

function ProductData(props) {
    const product = props.data.colorOptions.map((p, i) => {
        return (
            <img onClick={() => props.onClickProductPreview(i)} className={i === props.position.position ? "selectedProduct" : ""} key={i} src={p.imageUrl} alt="" />
        )
    })


    const featureList = props.data.featureList.map((f, i) => {

        return (
            <button onClick={() => props.feature(i)} className={i === 0 && props.heartBeat ? "selectedFeature" : ""} key={i} type="">{f}</button>
        )
    })


    return (
        <div className='left'>
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
            <h3>Select Color</h3>
            <div className='product'>
                {product}
            </div>
            <h3>Features</h3>
            <div className='feature'>
                {featureList}
            </div>
            <div>
                <button className='buy' type="">Buy</button>
            </div>
        </div>
    )
}

export default ProductData
