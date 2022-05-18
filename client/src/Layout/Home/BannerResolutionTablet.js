import { withOrientationChange } from 'react-device-detect'
import React from 'react'
let BannerTablet = props => {
  const { isLandscape, isPortrait } = props

  if (isLandscape) {
    return  <div>
        <img alt="banner-home" className="d-block" src={process.env.PUBLIC_URL + "Assets/img/gallery/ks-series-tablet-potrait.png" }/>   
      {/* <img alt="banner-home" className="d-block" src={process.env.PUBLIC_URL+"/Assets/img/gallery/ks-series-tablet-potrait.png"}/>    */}
      {/* <img alt="banner-home" className="d-block"src={process.env.PUBLIC_URL+"/Assets/img/gallery/artboard2.png"}/> */}
  </div>
  }
  
  if (isPortrait) {
    return    <div>
                  <img alt="banner-home" className="d-block" src={process.env.PUBLIC_URL + "/Assets/img/gallery/ks-series-tablet-potrait.png"}/>   
                  {/* <img alt="banner-home" className="d-block"src={process.env.PUBLIC_URL+"/Assets/img/gallery/artboard2.png"}/> */}
              </div>
  }
  return <div></div>
}

BannerTablet = withOrientationChange(BannerTablet)

export { BannerTablet }