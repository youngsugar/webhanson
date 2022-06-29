import { withOrientationChange } from 'react-device-detect'
import React from 'react'
import Slider from "react-slick";
import kewmpumpm from './img/ks-series-mobile-landscape.png'
import brooksandellm from './img/brooks-andell-mobile-landscape.png'
import challengem from './img/banner-challenge-mobile-01.jpg'
import  kewmpump from './img/kewpump-banner-mobile-potrait.png'
import brooksandell from './img/banner-brooksv2-mobile-01.jpg'
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
                  <img alt="banner-home2" className="d-block"src={brooksandellm}/>
                  <img alt="banner-home3" className="d-block"src={challengem}/>
                  </Slider>
  }
  
  if (isPortrait) {
    return        <Slider {...settings}>
                   <img alt="banner-home1" className="d-block" src={kewmpump}/>   
                   <img alt="banner-home2" className="d-block" src={brooksandell}/> 
                   <img alt="banner-home3" className="d-block"src={challengem}/>
                  {/* <img alt="banner-home" className="d-block"src={process.env.PUBLIC_URL+"/Assets/img/gallery/artboard2.png"}/> */}
                  </Slider>
  }
  return <div></div>
}

App = withOrientationChange(App)

export { App }