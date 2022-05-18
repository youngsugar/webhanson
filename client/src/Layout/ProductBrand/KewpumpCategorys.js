import React from 'react'

const listProduct = [
    { name: 'KS-SE3', image: 'KS-SE3.png', impeler: ['SEK', 'SEL', 'SES'],file:'KS-SE3.pdf' },
    { name: 'KS-SE2', image: 'KS-SE2.png', impeler: ['SEN', 'SEH', 'SEP'],file:'KS-SE2.pdf' },
    { name: 'KS-SR', image: 'KS-SR.png', impeler: ['32-[130|160|200|260]',
            '40-[130|160|200|260|320]','50-[130|160|200|260|320]','65-[130|160|200|260|320]','80-[160|200|260|320|400]',
            '100-[160|200|260|320|400]','125-[200|260|320|400]','150-[200|260|320|400]'], file:'KS-SR.pdf'},
    { name: 'KS-KDP', image: 'KS-KDP.png', impeler: ['None'], file:'KS-KDP.pdf' },
    {name:'KS-SG2',image:'KS-SG2.png',impeler:['ar','sc','de'],casing:['as','de'],file:'KS-SG2.pdf'},
    // { name: 'KS-SC', image: 'KS-SC.png', impeler: ['50-[165|215|250]', '80-200','90-250S','100-315S'],file:'KS-SC.pdf' },
    { name: 'KEWCRACKER', image: 'KEWCRACKER.png', impeler: ['None'],file:'KCM.pdf'},
]

function KewpumpCategory() {
    return (
        <div className="col-lg-12  col-md-12 order-lg-2 productlist">
            {/* <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="kewpump-icon" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/kewpump.png'} />
                </div>
            </div> */}
            <div className="row">
                {listProduct && listProduct.map(item => (
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card-product-kewpump">
                            <img className="brand" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/kewpump/kewpump.png'} />
                            <div className="imgBx">
                                <img src={process.env.PUBLIC_URL + `/Assets/img/Gallery/kewpump/${item.image}`} />
                            </div>
                            <div className="contentBx">
                                <h2>{item.name}</h2>
                                
                                {/* <div className="size">
                                    <h3 style={{marginBottom:'10px'}}>Support Impeller</h3>
                                    <select className="form-control form-control-lg" name="category" id="validationCustom03" onchange="ChangecatList()" required>
                                           
                                            {item.impeler && item.impeler.map(itemC=>(
                                                <option value="">{itemC} </option>
                                            ))}
                                        </select>
                                </div> */}
                                <a href={ process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.file}`} target="_blank">View Catalog</a>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card-product">
                    <img  className="brand" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/kewpump/kewpump.png'}/>
                        <div className="imgBx">
                            
                            <img src={process.env.PUBLIC_URL + '/Assets/img/Gallery/kewpump/KS-SE3.png'} />
                        </div>
                        <div className="contentBx">
                            <h2>KS-SE3</h2>
                            <div className="size">
                            <h3>Support</h3>
                            </div>
                            <div className="size">
                            
                            <h3>Impeller:</h3>
                            <span>SB</span>
                            <span>SK</span>
                            <span>SC</span>
                            <span>SR</span>
                        </div>
                        <div className="size">
                            <h3>Casing:</h3>
                            <span>Sub</span>
                            <span>AR</span>
                            <span>SC</span>
                            <span>SR</span>
                        </div>
                        <a href="#" >Detail</a>
                        </div>
                    </div>                   
                </div> */}
                {/* <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card-product">
                    <img  className="brand" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/kewpump/kewpump.png'}/>
                        <div className="imgBx">
                            
                            <img src={process.env.PUBLIC_URL + '/Assets/img/Gallery/kewpump/KS-SE3.png'} />
                        </div>
                        <div className="contentBx">
                            <h2>KS-SE3</h2>
                           
                            <div className="size">
                            
                            <h3>Impeller:</h3>
                            <span>SB</span>
                            <span>SK</span>
                            <span>SC</span>
                            <span>SR</span>
                        </div>
                        <div className="size">
                            <h3>Casing:</h3>
                            <span>Sub</span>
                            <span>AR</span>
                            <span>SC</span>
                            <span>SR</span>
                        </div>
                        <a href="#" >Detail</a>
                        </div>
                    </div>
                    
                </div> */}
            </div>
            {/* <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-se03"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SE3.jpg"} alt="kewpump KS-SE3" /></a>
                                    <h5>KS-SE3</h5>
                                    <a href="/product/kewpump/ks-se03" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-sr"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SR.jpg"} alt="kewpump KS-SR" /></a>
                                    <h5>KS-SR</h5>
                                    <a href="/product/kewpump/ks-sr" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-kdp"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-KDP.jpg"} alt="kewpump KS-KDP" /></a>
                                    <h5>KS-KDP</h5>
                                    <a href="/product/kewpump/ks-kdp" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-to"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-TO.png"} alt="kewpump KS-TO" /></a>
                                    <h5>KS-TO</h5>
                                    <a href="/product/kewpump/ks-to" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-sg2"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SG2.jpg"} alt="kewpump KS-SG2" /></a>
                                    <h5>KS-SG2</h5>
                                    <a href="/product/kewpump/ks-sg2" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-sc"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SC.jpg"} alt="kewpump KS-SC" /></a>
                                    <h5>KS-SC</h5>
                                    <a href="/product/kewpump/ks-sc" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/kcm"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KCM.jpg"} alt="kewpump KCM" /></a>
                                    <h5>KEWCRACKER</h5>
                                    <a href="/product/kewpump/kcm" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            
                        </div> */}
        </div>
    )
}

export default KewpumpCategory
