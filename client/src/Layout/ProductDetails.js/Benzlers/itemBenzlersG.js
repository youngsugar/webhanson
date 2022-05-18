import React from 'react'

function itemBenzlersG() {
    return (
        <div className="col-lg-9 order-lg-2 productlist" style={{ textAlign: 'justify' }}>
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="benzlers-series-g" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/benzlers-logo.png'} />
                </div>
            </div>
            <div className="col-lg-12 product-title">
                <h2>Series G - Helical Industrial Gearboxes</h2>
            </div>

            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzler-series-h.jpg"} alt="" />
                </div>
                <div className="col-lg-7 order-lg-1" >
                    <h4>Design</h4>
                    <p style={{color:'black'}}>This product takes advantage of our many years of accumulated design expertise together with the use of high quality materials and components, and has the following features & benefits:</p>
                    <ul>
                        <li>Case hardened and ground helical gears, and hard finished spiral bevel gears have optimised gear geometry to maximise strength and efficiency, and to minimise noise and vibration.</li>
                        <li>Horizontal split case design for ease of maintenance.</li>
                        <li>Large diameter output shaft and bearings to maximize overhung load capacity.</li>
                        <li>Innovative modular construction has minimised part count to maximise availability of product.</li>
                    </ul>
                </div>
            </div>
            <div className="row" style={{marginTop:'15px'}}>
                <div className="col-lg-12">
                    <table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr>

                                <th class="w-25" >Features</th>
                                <th class="w-50" >Benefits</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lip, Labyrinth and Face Seal on input, Lip Seal and Labyrinth on output shaft</td>
                                <td>Better sealing for harsher environments</td>
                            </tr>
                            <tr>
                                <td>Vertical units have a Drywell sealing arrangement</td>
                                <td>No head of oil resting on the output seal</td>
                            </tr>
                            <tr>
                                <td>Spherical roller bearings throughout (tapers roller bearings on bevel pinion shaft</td>
                                <td>Provides longer life</td>
                            </tr>
                            <tr>
                                <td>Large diameter output shaft, higher over hung loads</td>
                                <td>Best option for stirrer applications</td>
                            </tr>
                            <tr>
                                <td>Hollow bore and shrink disc options gives versatility in mounting</td>
                                <td>Hollow bore reduces alignment issues</td>
                            </tr>
                            <tr>
                                <td>External hold back, allows for inspection</td>
                                <td>Reduced down time</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/BR-series-G.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default itemBenzlersG
