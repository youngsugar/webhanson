import { withOrientationChange } from 'react-device-detect'
import React from 'react'
import Slider from "react-slick";
import kewmpumpm from './img/ks-series-mobile-landscape.png'
import brooksandellm from './img/brooks-andell-mobile-landscape.png'
import  kewmpump from './img/kewpump-banner-mobile-potrait.png'
import brooksandell from './img/brooks-andell-mobile-potrait.png'
let App = props => {
  const { isLandscape, isPortrait } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  if (isLandscape) {
    return        <Slider {...settings}>
                  <img alt="banner-home1" className="d-block" src={kewmpumpm}/>   
                  <img alt="banner-hom2" className="d-block"src={brooksandellm}/>
                  </Slider>
  }
  
  if (isPortrait) {
    return        <Slider {...settings}>
                   <img alt="banner-home1" className="d-block" src={kewmpump}/>   
                   <img alt="banner-home2" className="d-block" src={brooksandell}/> 
                  {/* <img alt="banner-home" className="d-block"src={process.env.PUBLIC_URL+"/Assets/img/gallery/artboard2.png"}/> */}
                  </Slider>
  }
  return <div></div>
}

App = withOrientationChange(App)

export { App }