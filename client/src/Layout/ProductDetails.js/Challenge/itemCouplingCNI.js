import React from 'react'

function itemCouplingCNI() {
    return (
        <div className="col-lg-9 order-lg-2 productlist" style={{ textAlign: 'justify' }}>
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="challenge-coupling-cni"src={process.env.PUBLIC_URL + '/Assets/img/Gallery/challenge-logo.png'} />
                </div>
            </div>
            <div className="col-lg-12 product-title">
                <h2>Coupling Natural Insert</h2>
            </div>

            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-natural-insert.png"} alt="coupling-ffx" />
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
                                <li>Designed specifically for use with IEC motors</li>
                                <li>Torques up to 3150 Nm</li>
                                <li>Up to 1° angular misalignment</li>
                                <li>Good shock absorption properties</li>
                                <li>Quick and easy assembly</li>
                                <li>Taper bush and Pilot bore flanges available</li>
                                <li>High grade cast iron hubs</li>
                                <li>Fail safe operation</li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="tabItem2">
                           <ul>
                                <li>The general purpose HRC coupling is suitable for most conditions and is considered an all round coupling when small amounts of shaft misalignment are present.</li>
                                <li>HRC couplings are available with 3 bore options; pilot bored, forward facing taper bore and backward facing taper bore. </li>
                                <li>The main choice for multiple planes of alignment between two shafts with the ability to transmit up to 14675Nm of torque.</li>
                                <li>Jaw type couplings with an elastomer insert are available in a wide range of variations and configurations. </li>
                                <li>Chain couplings offer a highest torque solution but cannot accommodate large shaft misalignment</li>
                                
                           </ul>
                        </div>
                        <div className="brand-wrapper">
                            <span><b>Brand</b> : Challenge </span>
                            <span><b>Available size</b> : 070,130,150,180,</span>
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

export default itemCouplingCNI
