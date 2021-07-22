import React from 'react'
import img from '../../img/logos/Logo Bottom Layer.png'

export default function Logo({img, width, height}) {
  return (
    <img 
      src={img} 
      className="item_image" 
      // width="292px" 
      height={height}
      width={width}
    />
  )
}
