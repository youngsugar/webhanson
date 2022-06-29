import React from 'react'

import Banner from './Banner'
import CardHome from './CardHome'
import Partservice from './Partservice'
import BrandHome from './BrandHome'
import Brand from './BrandHome'
import {
  BrowserView,
  MobileView,
  TabletView,
  isMobile,
  isTablet,
  isBrowser
} from "react-device-detect";

function Index() {
  const PartnerView = () => {

    if (isMobile) {
      return <div class="col-lg-6 col-md-6">
        <div class="consultation__video set-bg" data-setbg={process.env.PUBLIC_URL + "/Assets/img/Corporate/Partner-mobile.jpg"}>
          <a href={process.env.PUBLIC_URL + "/Assets/img/Corporate/Partner-mobile.jpg"} ></a>
        </div>
      </div>
    }
    else if (isTablet && isBrowser) {
      return <div class="col-lg-6 col-md-6">
        <div class="consultation__video set-bg" data-setbg={process.env.PUBLIC_URL + "/Assets/img/Corporate/parnet-handonlist.png"}>
          <a href={process.env.PUBLIC_URL + "/Assets/img/Corporate/parnet-handonlist.png"} ></a>
        </div>
      </div>
    }
    else {
      return <div class="col-lg-6 col-md-6">
        <div class="consultation__video set-bg" data-setbg={process.env.PUBLIC_URL + "/Assets/img/Corporate/parnet-handonlist.png"}>
          <a href={process.env.PUBLIC_URL + "/Assets/img/Corporate/parnet-handonlist.png"} ></a>
        </div>
      </div>
    }

  }
  return (
    <React.Fragment>
      <Banner />
      {/* brand */}
      <section class="u-align-center u-clearfix u-section-2" id="sec-4b6a">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-align-center-xs u-text u-text-1">Brand we carry include</h2>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-image-1" data-image-width="1527" data-image-height="163" src={process.env.PUBLIC_URL + "/Assets/img/Brand/kewpump.png"}/>
                <h6 class="u-text u-text-palette-2-base u-text-2">Centrifugal Pump </h6>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                <img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-image-2" data-image-width="1024" data-image-height="440" src={process.env.PUBLIC_URL + "/Assets/img/Brand/brooksandell.png"}/>
                <h6 class="u-text u-text-palette-2-base u-text-3">Conveyor Chain</h6>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-image-3" data-image-width="340" data-image-height="74" src={process.env.PUBLIC_URL + "/Assets/img/Brand/challenge-logo.png"}/>
                <h6 class="u-text u-text-palette-2-base u-text-4"> Belt &amp; Pulley - Coupling - roller chain</h6>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                <img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-image-4" data-image-width="251" data-image-height="83" src={process.env.PUBLIC_URL + "/Assets/img/Brand/benzlers-logo.png"}/>
                <h6 class="u-text u-text-palette-2-base u-text-5">Gearbox &amp; Gearmotor</h6>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                <img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-image-5" data-image-width="690" data-image-height="393" src={process.env.PUBLIC_URL + "/Assets/img/Brand/cheonsei-med2.png"}/>
                <h6 class="u-text u-text-palette-2-base u-text-6">Chemical Pump</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* end of brand */}
      {/* service */}
      <div class="container">
      <section class="u-align-center u-clearfix u-section-3" id="carousel_754b">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-absolute-hcenter u-custom-color-3 u-expanded-height u-shape u-shape-rectangle u-shape-1"></div>
        <div class="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-size-30 u-size-60-md">
                <div class="u-layout-col">
                  <div class="u-size-40">
                    <div class="u-layout-row">
                      <div class="u-align-left u-container-style u-image u-image-round u-layout-cell u-left-cell u-radius-30 u-size-60 u-image-1" data-image-width="5184" data-image-height="3888">
                        <div class="u-container-layout u-container-layout-1" src=""></div>
                      </div>
                    </div>
                  </div>
                  <div class="u-size-20">
                    <div class="u-layout-row">
                      <div class="u-align-left u-container-style u-hidden-sm u-hidden-xs u-layout-cell u-left-cell u-size-30 u-layout-cell-2">
                        <div class="u-container-layout u-container-layout-2"></div>
                      </div>
                      <div class="u-align-left u-container-style u-image u-image-round u-layout-cell u-radius-30 u-size-30 u-image-2" data-image-width="1280" data-image-height="1170">
                        <div class="u-container-layout u-container-layout-3" src=""></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-size-30 u-size-60-md">
                <div class="u-layout-col">
                  <div class="u-size-20">
                    <div class="u-layout-row">
                      <div class="u-align-left u-container-style u-image u-image-round u-layout-cell u-radius-30 u-size-30 u-image-3" data-image-width="1600" data-image-height="1200">
                        <div class="u-container-layout u-container-layout-4" src=""></div>
                      </div>
                      <div class="u-align-left u-container-style u-hidden-sm u-hidden-xs u-layout-cell u-right-cell u-size-30 u-layout-cell-5">
                        <div class="u-container-layout u-container-layout-5"></div>
                      </div>
                    </div>
                  </div>
                  <div class="u-size-40">
                    <div class="u-layout-row">
                      <div class="u-align-left u-container-style u-layout-cell u-palette-5-dark-3 u-radius-30 u-right-cell u-shape-round u-size-60 u-layout-cell-6">
                        <div class="u-container-layout u-container-layout-6">
                          <h2 class="u-text u-text-1" style={{color:'white'}}> Kami menyediakan pelayanan commisioning , consultant engineering &amp; part service</h2>
                          <a href="https://api.whatsapp.com/send?phone=6281260090018&lang=id" class="u-border-2 u-border-hover-grey-90 u-border-white u-btn u-button-style u-hover-palette-1-dark-1 u-none u-text-hover-white u-btn-1">Chat us now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
     {/* end of service */}
      {/* alasan memilih kami */}
      <div class="container">
      <section class="u-align-center u-clearfix u-section-4" id="sec-b224">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <h2 class="u-align-center u-text u-text-default u-text-1">Alasan Memilih Kami</h2>
        <p class="u-align-center u-text u-text-default u-text-2"> Sebagai perusahaan yang bergerak di bidang industri mesin pompa, kami ingin memberikan anda yang terbaik dengan alasan yang kuat.</p>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-container-layout-1"><span class="u-file-icon u-icon u-text-custom-color-3 u-icon-1"><img src={process.env.PUBLIC_URL + "/Assets/img/icon/10.png"} alt=""/></span>
                <h3 class="u-align-center u-text u-text-default u-text-3"> Produk Unggulan</h3>
                <p class="u-align-center u-text u-text-4"> Kami menyediakan produk andalan sesuai dengan kebutuhan dan permintaan pasar</p>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-container-layout-2"><span class="u-file-icon u-icon u-text-custom-color-3 u-icon-2"><img src={process.env.PUBLIC_URL + "/Assets/img/icon/11.png"} alt=""/></span>
                <h3 class="u-align-center u-text u-text-default u-text-5"> Terpercaya</h3>
                <p class="u-align-center u-text u-text-6"> kami berkomitmen akan terus melayani sesuai dengan standard dan harapan customer.</p>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-container-layout-3"><span class="u-file-icon u-icon u-text-custom-color-3 u-icon-3"><img src={process.env.PUBLIC_URL + "/Assets/img/icon/12.png"} alt=""/></span>
                <h3 class="u-align-center u-text u-text-default u-text-7"> Pelayanan</h3>
                <p class="u-align-center u-text u-text-8"> Kami menerima kritik dan saran sebagai dasar untuk meningkatkan mutu pelayanan kami</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
   
      {/* end alasan memilih kami */}
      {/* shipping */}
      <section className="team spad pt-0">
        <div className="container">
      <section class="u-clearfix u-section-5" id="sec-680e">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-top u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-align-left u-container-style u-custom-color-3 u-layout-cell u-left-cell u-shape-rectangle u-size-30 u-layout-cell-1" src="">
                <div class="u-container-layout u-container-layout-1">
                  <h1 class="u-text u-text-body-alt-color u-text-1">Shipping</h1>
                  <p class="u-text u-text-2" style={{color:'white'}}>Pengiriman kami mencangkup seluruh Indonesia menggunakan jasa cargo melalui via darat,laut dan udara disertakan dengan packingan terbaik sehingga produk yang dikirim aman ketika sampai ke tujuan</p>
                  <a href="#" class="u-border-2 u-border-white u-btn u-button-style u-btn-1">learn more</a>
                </div>
              </div>
              <div class="u-align-left u-container-style u-image u-layout-cell u-right-cell u-size-30 u-image-1" src="" data-image-width="1600" data-image-height="1200">
                <div class="u-container-layout u-valign-middle u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </section>
      {/* end of shipping */}
     
      
      
      
      
     
      
      
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="consultation__text">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="consultation__text__item">
                    <div class="section-title">
                      <span>20 Years Experience</span>
                      <h2>Produk dan pelayanan kami sudah dipercaya oleh banyak <b>Perusahaan Ternama</b></h2>
                    </div>
                    <p>Kami menyuplai produk yang bergerak dibidang mesin pompa untuk pabrik industri seperti centrifugal pump, conveyor chain, Power Transmission, Gearbox & Gear Motor, dll  </p>
                  </div>
                </div>
                <PartnerView />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </React.Fragment>
  )
}

export default Index
