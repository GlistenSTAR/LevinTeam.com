import React from 'react'
import img from '../../img/logos/Logo Bottom Layer.png'

export default function Logo() {
  return (
    <img 
      src={img} 
      className="item_image" 
      // width="292px" 
      height="147px"
      style={{
        width:'292px',
      }}
    />
  )
}
