import React from 'react'

function itemKSDP() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
            <div className="col-lg-12 product-title">
                <h2>KS-KDP</h2>
            </div>


            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">

                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-KDP.jpg"} alt="KEWPUMP KS-KDP" />
                </div>
                <div className="col-lg-7 order-lg-1" >
                    <h4>Design</h4>
                    <p style={{textAlign:'justify'}}>KDP is dosing is a positive displacement reciprocating pump with adjustable flow as process conditions require. it has a high level of repetitive accuracy and is capable of pumping a range of chemicals, including acid base, corrosive or viscous liquids. Models DOS 301/302 (simplex/duplex)
                    are manufactured for easy operation, less space requirement, least maintenance with maximum efficiency.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-KDP-01.png"} alt="KEWPUMP KS-KDP" />
                </div>
                <div className="col-lg-7 order-lg-1 productdetail02" style={{marginTop:'20px'}} >
                    <h4>Design and General Dimensions</h4>
                    <div className="productlistsub">
                        <ul style={{ fontWeight: 'bold',marginLeft:'10px' }}>
                            Range
                            <ul style={{ fontWeight: '500', listStyle: 'none' }} >
                                Maximum capacity:
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>Simplex - 30L/Hr</li>
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>Duplex - 60L/Hr</li>
                            </ul>
                            <ul style={{ fontWeight: '500', listStyle: 'none' }} >
                                                            Maximum pressure:
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>35 Kg/cm</li>
                               
                            </ul>
                            <ul style={{ fontWeight: '500', listStyle: 'none' }} >
                                                            Maximum suction lift:
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>3m for water</li>
                               
                            </ul>
                        </ul>
                        <ul style={{ fontWeight: 'bold',marginLeft:'10px', listStyle: 'none' }}>
                            Specification
                            
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>Motor - 0.75hp, 4 Poles</li>
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>Reducer -1 : 20</li>
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>Stroke per min - 72</li>
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>Piston Diameter - 16mm</li>
                                <li style={{ paddingLeft: '30px',fontWeight: '400' }}>Maximum Stroke - 1 3/4 in</li>
                
                        </ul>
                    </div>


                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 order-lg-1">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-KDP-02.png"} alt="KEWPUMP KS-KDP" />
                </div>
                <div className="col-lg-6 order-lg-2">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-KDP-03.png"} alt="KEWPUMP KS-KDP" />
                </div>
            </div>

            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/KS-KDP.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default itemKSDP
