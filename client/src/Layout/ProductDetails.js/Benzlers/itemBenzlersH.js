import React from 'react'

function itemBenzlersH() {
    return (
        <div className="col-lg-9 order-lg-2 productlist" style={{ textAlign: 'justify' }}>
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="benzlers-series-h" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/benzlers-logo.png'} />
                </div>
            </div>
            <div className="col-lg-12 product-title">
                <h2>Series H - Inline Industrial Gearboxes</h2>
            </div>

            <div className="row">
                <div className="col-lg-5 order-lg-1 image-product-detail">
                    <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzler-series-h.jpg"} alt="" />
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
                            <ul>This product takes advantage of our many years of accumulated design expertise together with the use of high quality materials and
                            components and has the following features & benefits:
                                <li>Profile ground helical gears</li>
                                <li>High level of surgace finish for quiet running.</li>
                                <li>Units can be offered in horizontal or vertical mounting positions</li>
                                <li>All units are also avalable with hollow bore for output shaft mounting</li>
                                <li>Output bores can be connected by shrink disc</li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="tabItem2">
                            <ul>The modular design and construction of the Series H offers many engineering and performance benefits including a high degree of interchange ability of parts and sub assemblies. This in turn provides considerable economies of production while maintaining the highest standard of component integrity.</ul>
                        </div>
                        <div className="brand-wrapper">
                            <span><b>Brand</b> : Benzlers </span>
                            <span><b>Type</b> : Series H </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row" >
                <div className="col-lg-12">
                    <table class="table table-striped table-bordered">
                        <thead >
                            <tr>
                                <th scope="col" >Design</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gear</td>
                                <td>Profile ground single helical gears and spiral bevel gears lapped in pairs ensure high standards of accuracy,
surface finish and quiet running characteristics</td>
                            </tr>
                            <tr>

                                <td>Bearing</td>
                                <td>oller bearings are used througho</td>
                            </tr>
                            <tr>

                                <td>Gearcase</td>
                                <td>Gearcases are of rigid cast iron construction with modern styling. <br />
Casings are split in the horizontal plane.<br />
Inspection covers are provided for viewing gear contac</td>
                            </tr>
                            <tr>

                                <td>External Dimensions</td>
                                <td>Centre distances are chosen from ISO preferred number series.<br />
Shaft extensions and hollow wheelshaft bores are to ISO metric standards.<br />
Fasteners are metric</td>
                            </tr>
                            <tr>

                                <td>Lubrication</td>
                                <td>Lubrication in most instances is by the transfer of oil by gears dipping in the sumps of gear unit bases.
                                Where high pitch line speeds could cause churning of the lubricant, case baffles are fitted as indicated on
                                rating tables. Spray lubrication is necessary where shown and complete systems can be supplied when
required.</td>
                            </tr>
                            <tr>

                                <td>Cooling</td>
                                <td>Normal heat dissipation by convection from external surfaces.<br />
Fans fitted to high speed or intermediate shafts.<br />
Cooling water coil fitted in gear unit base.<br />
Fan and cooling coil.<br />
Separate oil cooler incorporated in forced lubrication system.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/BR-series-H.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default itemBenzlersH
