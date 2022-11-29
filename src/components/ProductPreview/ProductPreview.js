import React from 'react'
import { GiTechnoHeart } from 'react-icons/gi';


function ProductPreview(props) {
    return (
        <div className='right'>
            <img src={props.productImage.productImage} alt="" />
            {
                props.heartBeat === true ?

                    <div className='featureData'>
                        <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                    </div>
                    :
                    <div className='featureHeartData'>
                        <GiTechnoHeart className='heart' />
                        <p>78</p>
                    </div>
            }
        </div>

    )
}

export default ProductPreview
