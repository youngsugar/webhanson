import React from 'react'

function itemBenzlersF() {
    return (
        <div className="col-lg-9 order-lg-2 productlist" style={{ textAlign: 'justify' }}>
           <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img  alt="benzlers-series-f" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/benzlers-logo.png'} />
                </div>
            </div>
            <div className="col-lg-12 product-title">
                <h2>Series F - Shaft Mounted Helical</h2>
            </div>
            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzlers-series-f.jpg"} alt="" />
                </div>
                <div className="col-lg-7 order-lg-2" >
                    <ul class="nav nav-tabs">
                        <li class=" ">
                            <a class="nav-link active" data-toggle="tab" href="#tabItem1">Description</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabItem2">Design</a>
                        </li>

                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane product-detail active" id="tabItem1"  >
                           <p>Series F shaft mounted geared motors offer ratios from 5 to 100/1 in double reduction, from 100 to 360 in triple and up to 5600/1 in combined reductions. Motors are available up to 110 kW giving a maximum output torque of 16500 Nm</p>
                           <p>The series F geared motor is primarily designed as a shaft mounted unit incorporating an integral torque reaction bracket. The units are so available with rubber torque bushes, Output flanges, output shafts and KIBO sleeves to allow for trouble free maintenace.</p>
                        </div>
                        <div class="tab-pane" id="tabItem2">
                           <ul>Benzlers series-F features:
                                <li>Patented standard motor connection (IEC or NEMA)</li>
                                <li>Ability to fit double oil seals on output shaft as required </li>
                                <li>All units are dimensionally interchangeable with other major European manufacturers</li>
                                <li>Brake geared motors are available as standard</li>
                                <li>Units Are manufactured and assembled from a family of modular kits for distributor friendliness maximising availability and flexibility</li>
                                <li>Motorised units can be fitted with a backstop module and reducer units can be fitted with a backstop and fan</li>
                           </ul>
                        </div>
                        <div className="brand-wrapper">
                            <span><b>Brand</b> : Benzlers </span>
                            <span><b>Type</b> : Series F </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/BR-series-f.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default itemBenzlersF
