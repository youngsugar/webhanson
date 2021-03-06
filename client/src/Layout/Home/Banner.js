import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {App}from './BannerResolution'
import kewpumpbanner from './img/kewpump-banner-pc.png'
import brooksandel from './img/BrooksAndel-pc-1.png'
import challenge from './img/challenge-banner-pc.png'
import BannerChallenge from './img/banner-challengeV2-01.jpg'
import BannerBrooks from './img/banner-brooksv2.jpg'
import {
    BrowserView,
    MobileView,  
    TabletView
  } from "react-device-detect";


function Banner() {
   
    const settings = {
        innerHeight:729,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      
    return (
                       
        <section className="banner-side ">
        
            <BrowserView>
                <Slider {...settings}>
                   <div> <a href="/product/kewpump"><img alt="banner-home1" className="d-block" src={kewpumpbanner}/></a> </div>
                   <div>  <img alt="banner-home2" className="d-block" src={BannerBrooks}/>   </div>
                    <img alt="banner-home3" className="d-block" src={BannerChallenge}/>
                </Slider>
                </BrowserView>
            <MobileView>
          
                <Slider {...settings}>
                    <App/>
                </Slider>
            </MobileView>
           
        </section>
               
            
     
        
         
    )
}

export default Banner
