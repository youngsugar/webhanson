import React from 'react'
const listProduct = [
    { name: 'FFX series', image: 'coupling-ffx.png',file:'challenge.pdf' },
    { name: 'Coupling Half Body HRC', image: 'coupling-hrc.png',file:'challenge.pdf' },
    { name: 'Coupling Natural Insert', image: 'coupling-natural-insert.png',file:'challenge.pdf' },
    { name: 'Shaft Coupling', image: 'shaft-coupling.png',file:'challenge.pdf' },
]
function ChallengeCategory() {
    return (
        <div className="col-lg-12 order-lg-2 productlist" >
            {/* <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img  alt="challege-product" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/Challenge/challenge-logo.png'} />
                </div>
            </div> */}
            <div className="row">
            {listProduct && listProduct.map(item => (
                    <div className="col-lg-2  col-md-4 col-sm-12">
                        <div className="card-product-challenge">
                            <img className="brand" src={process.env.PUBLIC_URL + `/Assets/img/Gallery/Challenge/challenge-logo.png`} />
                            <div className="imgBx">
                                <img src={process.env.PUBLIC_URL + `/Assets/img/Gallery/Challenge/${item.image}`} />
                            </div>
                            <div className="contentBx">
                                <h2 style={{fontSize:'20px'}}>{item.name}</h2>
                                <a href={ process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.file}`} target="_blank">View Catalog</a>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/ffx"> <img style={{height:'196px'}}src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-ffx.png"} alt="benzlers series ffx" /></a>
                        <h5>FFX series</h5>
                        <a href="/product/challenge/ffx" className="primary-btn normal-btn">View More</a>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/hrc"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-hrc.png"} alt="benzlers series h" /></a>
                        <h5>Taper Bored Coupling Half Body HRC</h5>
                        <a href="/product/challenge/hrc" className="primary-btn normal-btn">View More</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/coupling-natural-insert-070"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-natural-insert.png"} alt="benzlers series h" /></a>
                        <h5>Coupling Natural Insert</h5>
                        <a href="/product/challenge/coupling-natural-insert-070" className="primary-btn normal-btn">View More</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/shaft-coupling-090b"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/shaft-coupling.png"} alt="benzlers series h" /></a>
                        <h5>Shaft Coupling</h5>
                        <a href="/product/challenge/shaft-coupling-090b" className="primary-btn normal-btn">View More</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ChallengeCategory
