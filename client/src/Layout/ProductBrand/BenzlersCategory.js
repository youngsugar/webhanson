import React from 'react'
const listProduct = [
    { name: 'SERIES-H', image: 'benzlers-series-h.png',file:'BR-Series-H.pdf' },
    { name: 'SERIES-M', image: 'benzlers-series-m.png',file:'BR-Series-m.pdf' },
    { name: 'SERIES-ER', image: 'benzlers-series-er.png',file:'BR-Series-er.pdf' },
  
]
function BenzlersCategory() {
    return (
        <div className="col-lg-12 order-lg-2 productlist" >
            {/* <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="benzlers-product"src={process.env.PUBLIC_URL + '/Assets/img/Gallery/benzlers-logo.png'} />
                </div>
            </div> */}
            <div className="row">
            {listProduct && listProduct.map(item => (
                    <div className="col-lg-3  col-md-4 col-sm-12">
                        <div className="card-product-benzler">
                            <img className="brand" src={process.env.PUBLIC_URL + `/Assets/img/Gallery/Benzlers/benzler.png`} />
                            <div className="imgBx">
                                <img src={process.env.PUBLIC_URL + `/Assets/img/Gallery/Benzlers/${item.image}`} />
                            </div>
                            <div className="contentBx">
                                <h2>{item.name}</h2>
                                <a href={ process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.file}`} target="_blank">View Catalog</a>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/benzlers/series-h"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzler-series-h.jpg"} alt="benzlers series h" /></a>
                        <h5>SERIES-H</h5>
                        <a href="/product/benzlers/series-h" className="primary-btn normal-btn">View More</a>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/benzlers/series-g"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzlers-series-g.jpg"} alt="benzlers series h" /></a>
                        <h5>SERIES-G</h5>
                        <a href="/product/benzlers/series-g" className="primary-btn normal-btn">View More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/benzlers/series-f"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzlers-series-f.jpg"} alt="benzlers series h" /></a>
                        <h5>SERIES-F</h5>
                        <a href="/product/benzlers/series-f" className="primary-btn normal-btn">View More</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default BenzlersCategory
