import React from 'react'

function itemKCM() {
    return (
        
        <div className="col-lg-9 order-lg-2 productlist">
        <div className="row">
            <div className="col-lg-12" style={{display:'flex',justifyContent:'center',alignContent:'center',marginBottom:'20px'}}>
                <img alt="kewpump-kcm" src={process.env.PUBLIC_URL+'/Assets/img/Gallery/kewpump.png'}/>
            </div>
        </div>
         <div className="col-lg-12 product-title">
             <h2>KEWCRACKER</h2>
         </div>
        
        <div className="row">
            <div className="col--5 order-lg-1 image-product-detail">
                <img src={process.env.PUBLIC_URL+"/Assets/img/Gallery/KCM-01.jpg"} alt=""/>
            </div>   
                   
        </div>
       
        <div className="row">
            <a href={process.env.PUBLIC_URL+"/Assets/download/KCM.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
        </div>
     </div>
    )
}

export default itemKCM
