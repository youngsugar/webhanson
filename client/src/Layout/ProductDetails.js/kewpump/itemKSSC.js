import React from 'react'

function itemKSSC() {
    return (

        <div className="col-lg-9 order-lg-2 productlist">
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img  alt="kewpump-kssc"src={process.env.PUBLIC_URL + '/Assets/img/Gallery/kewpump.png'} />
                </div>
            </div>
            <div className="col-lg-12 product-title">
                <h2>KS-SC</h2>
            </div>

            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SC.jpg"} alt="" />
                </div>
                <div className="col-lg-7 order-lg-1" >
                    <h4>Design</h4>
                    <p style={{textAlign:'justify'}}>The KS-SC range are horizontal, single stage centrifugal pumps with back pull out design.
                    the entire pump assembly can be removed from the casing without dismantling the pipework and
                    gives instant access to most parts to enable simple and quick maintenance.
                    Heavy duty cast iron bearing frame, oil lubricated bearing and oversized shaft provide maximum operating life and stability.
                    the pump are designed for both direct coupied and V-belts drive
                </p>
                    <p style={{textAlign:'justify'}}>the casting is of the vertical split type consisting of two halves with integral cast support feet.
                    Volute liner can be easily mounted and dismounted without disruption to the suction piping.
                </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12" style={{paddingLeft:'30px'}}>

                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SG2-01.png"} alt="" />
                </div>

            </div>
            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SC.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default itemKSSC
