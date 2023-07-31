import React from "react";
import './style.css'

const ImageContainer = ({title, imageSource}) => {

    return(
        <div>
            <img 
            src= {imageSource}
            alt= {title}
            />
        </div>
    )
}
export default ImageContainer;