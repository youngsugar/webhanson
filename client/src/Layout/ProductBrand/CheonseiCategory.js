import React from 'react'
const listProduct = [
    { name: 'KDV 23h', image: 'KDV.jpg',file:'KD-series.pdf' },
    { name: 'KDV 82', image: 'KDV.jpg',file:'KD-series.pdf' },
]
function CheonseiCategory() {
    return (
        <div className="col-lg-12 order-lg-2 productlist">
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="cheonsei-product" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/cheon-logo.png'} />
                </div>
            </div>
            <div className="row">
                {listProduct && listProduct.map(item=>(
                           <div className="col-lg-4  col-md-4 col-sm-12">
                           <div className="team__item">
                               <img src={process.env.PUBLIC_URL + `/Assets/img/Gallery/Cheonsei/${item.image}`} alt="kewpump KDV" />
                               <h5>{item.name}</h5>
                               <a href={ process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.file}`} target="_blank" className="primary-btn normal-btn">View More</a>
                           </div>
                       </div>
                ))}
             


            </div>
        </div>
    )
}

export default CheonseiCategory
