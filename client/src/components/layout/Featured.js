import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../img/buildings/CH1A4726 _copy.png'
import img2 from '../../img/buildings/CHEPOLW1.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Featured() {
  
  return (
    <div className="featured">
      <Carousel responsive={responsive}>
        <div>
          <img src={img1} width="100%" height="612px"/>
          <div className="build_info">
            <div className="odd address" align="center">
              <div>
                <h6 className="venue">123 Main St.</h6>
                <h6 className="position">Town, NY 12345</h6>
              </div>
            </div>
            <div className="even capacity">
              <i className="fas fa-bed"><span>4 BEDS</span></i>
              <i className="fas fa-bath"><span>3 BATHS</span></i>
              <i className="fas fa-home"><span>2000 SQ FT</span></i>
              <i className="fas fa-layer-group"><span>EXP CAPE</span></i>
            </div>
            <div className="odd price">
              <div>
                $1,550,000.00
              </div>
            </div>
            <div className="even overview" style={{padding:'0 20px'}}>
              <div>
                <i className="fas fa-search"></i><span>View Details</span>
              </div>
              <div>
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="odd owner">
              <div>
                <h6>Listing Courtesy of:</h6>
                <h6>Another Brokerage</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={img2} width="100%" height="612px"/>
        </div>
        <div>
          <img src={img1} width="100%" height="612px"/>
        </div>
        <div>
          <img src={img2} width="100%" height="612px"/>
        </div>
        <div>
          <img src={img1} width="100%" height="612px"/>
        </div>
        <div>
          <img src={img2} width="100%" height="612px"/>
        </div>
        <div>
          <img src={img1} width="100%" height="612px"/>
        </div>
        <div>
          <img src={img2} width="100%" height="612px"/>
        </div>
      </Carousel>
    </div>
  )
}
