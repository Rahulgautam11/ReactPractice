import React from 'react'
import image1 from '../../assets/Images/cover1.png'
import './style.scss'

const ImageScale = () => {
    return (
        <div className="containerimagescale">
            <div class="image-container">
                <img src={image1} alt="" class="image" />
            </div>
        </div>
    )
}

export default ImageScale;