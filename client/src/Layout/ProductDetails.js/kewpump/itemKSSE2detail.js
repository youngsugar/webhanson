import React from 'react'

function ItemKSSE2detail() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
            <div className="col-lg-12 product-title">
                <h2>KS-SE2</h2>
            </div>
            <div className="col-lg-12">
                <img src={process.env.PUBLIC_URL+"/Assets/img/Gallery/KS-SE2-01.png"} alt="kewpump KS-SE2" />
            </div>
            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SE2.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
        </div>
    )
}

export default ItemKSSE2detail
