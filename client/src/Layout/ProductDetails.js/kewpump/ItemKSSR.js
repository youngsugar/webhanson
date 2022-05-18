import React from 'react'

function ItemKSSR() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
            <div className="col-lg-12 product-title">
                <h2>KS-SR</h2>
            </div>

            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img alt="kewpump-kssr" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SR.jpg"}  />

                </div>
                <div className="col-lg-7 order-lg-1" >
                    <h4>Design</h4>
                    <p>The KS-SR  range of pumps is manufactured for a wide range of flow
                            and head requiredment and fully complies with ISO 2858:1975 standard. Back pull-out design to give instant access to most parts for simple and quick maintenance</p>
                    <h4>Materials of Construction</h4>
                    <p>All standard pump components in cotnact with the fluid are made of Stainless Steel 304 (CF-8). Stainless Steel 316 (CF-8M) and CastIron are also available upon  request
                        </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 prg-2" >
                    <div className="col-lg-3">
                        <ul>
                            Flanges
                       <li> Flages are drilled according to ISO 7005-1:1992 : PN16.</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            Casing
                       <li>highly efficient one-piece volute type with integrally ast feet. End suction with vertical centreline discharge nozzle</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            Impeller
                       <li>Enclosed type with twisted vane design to maximum performance.</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            Shaft
                       <li>Robust and stiff sold shaft ensures less deflection at the seal to extend the mechanical seal life.</li>
                        </ul>
                    </div>

                </div>


            </div>
            <div className="row">
                <div className="col-lg-6 order-lg-1">
                    <img alt="kewpump-kssr"style={{ width: '100%' }} src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SR-01.png"} />
                </div>
                <div className="col-lg-6 order-lg-2 prg-3">
                    <ul style={{ fontWeight: 'bold' }}>
                        Shaft Sleeve
                       <li style={{ fontWeight: '400' }}>For gland packing sealing. renewable hook type shaft sleeve is
                       fitted to prevent shaft damage under the gland packing</li>
                    </ul>
                    <ul>
                        Stuffing Box Cover
                       <li>Cast in one-piece with large bore seal chamber available on all pumps furnished with mechanical seal.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SR.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default ItemKSSR
