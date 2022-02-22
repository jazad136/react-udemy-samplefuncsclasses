import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map( (image) => { 
        // return <img alt={description} key={id} src={urls.regular}/>
        return <ImageCard key={image.id} image={image} />
    })

    return <div className='image-list'>{images}</div>
}

export default ImageList;