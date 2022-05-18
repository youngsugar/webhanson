import React from 'react'

function itemCouplingFFX() {
    return (
        <div className="col-lg-9 order-lg-2 productlist" style={{ textAlign: 'justify' }}>
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="challenge-coupling-ffx" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/challenge-logo.png'} />
                </div>
            </div>
            <div className="col-lg-12 product-title">
                <h2>Coupling FFX series</h2>
            </div>

            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-ffx.png"} alt="coupling-ffx" />
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
                            <ul>
                                <li>Up to 14675 Nm torque on 6 pole motors</li>
                                <li>Up to 4° angular misalignment</li>
                                <li>Up to 12° ‘wind up’ shock absorption</li>
                                <li>Can accommodate simultaneous maximum misalignment in all planes</li>
                                <li>Tyre can be changed without moving prime mover or driven machine</li>
                                <li>Visual inspection of tyre to detect wear</li>
                                <li>Zero backlash makes the FFX ideal for reversing duties as the load carrying cords are wound in both directions. Reversing drives are not a problem</li>
                                <li>Steel clamping rings used throughout the range for superior tyre/clamping ring grip</li>
                                <li>Fire resistant and anti static (FRAS) tyres available</li>
                                <li>No lubrication required</li>
                                <li>Taper bush and pilot bore flanges available</li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="tabItem2">
                           <ul>
                                <li>The FFX tyre coupling range is available with 3 bore options; .</li>
                                <li>pilot bored, forward facing taper bore and backward facing taper bore.</li>
                                <li>The FFX tyre couplings will accommodate shaft diameters from 13mm up to and including 127mm (5”) with nominal torque ratings ranging from 24Nm up to 14675Nm and max speeds of 4500 rev/min to 1000 rev/min</li>
                                <li>Jaw type couplings with an elastomer insert are available in a wide range of variations and configurations</li>
                                <li>UChain couplings offer a highest torque solution but cannot accommodate large shaft misalignment</li>
                                
                           </ul>
                        </div>
                        <div className="brand-wrapper">
                            <span><b>Brand</b> : Challenge </span>
                            <span><b>Available size</b> :   100,110,120,140,160,180 </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
            <a href={process.env.PUBLIC_URL + "/Assets/download/challenge.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default itemCouplingFFX
