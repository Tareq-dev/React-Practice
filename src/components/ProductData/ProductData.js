import React from 'react'
import './ProductData.css'

function ProductData(props) {
    console.log(props)
    const product = props.data.colorOptions.map((p, i) => {
        return (
            <img className={i === 0 ? "selectedProduct" : ""} key={i} src={p.imageUrl} alt="" />
        )
    })

    const featureList = props.data.featureList.map((f, i) => {
        return (
            <button className={i === 0 ? "selectedFeature" : ""} onClick="" key={i} type="">{f}</button>
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
        </div>
    )
}

export default ProductData
