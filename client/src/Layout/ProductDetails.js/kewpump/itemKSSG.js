import React from 'react'

function itemKSSG() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
                <div className="row">
                    <div className="col-lg-12" style={{display:'flex',justifyContent:'center',alignContent:'center',marginBottom:'20px'}}>
                        <img alt="kewpump-ks-sg" src={process.env.PUBLIC_URL+'/Assets/img/Gallery/kewpump.png'}/>
                    </div>
                </div>
                 <div className="col-lg-12 product-title">
                     <h2>KS-SG2</h2>
                 </div>
                
                <div className="row">
                    <div className="col-lg-5 order-lg-1 image-product-detail">
                        <img src={process.env.PUBLIC_URL+"/Assets/img/Gallery/KS-SG2.jpg"} alt=""/>
                    </div>   
                    <div className="col-lg-7 order-lg-1" >
                        <h4 style={{fontSize:'16px',fontWeight:'bold'}}>Fully Compliance with international standard</h4>
                        <ul style={{fontSize:'14px',listStyle:'none'}}>
                            <li>Dimensions and Performances - ISO 2858:1975</li>
                            <li>Design and Contruction - ISO 5199:2002</li>
                            <li>Flanges Dimensions - ISO 7005-1:1992 - PN16</li>
                            <li>Baseplates Dimensions - ISO 3661:1977</li>
                        </ul>
                        <h4 style={{fontSize:'16px',fontWeight:'bold'}}>Materials of Contruction</h4>
                        <p>All standard pump components in contact with the fluid are made of stainless steel 316 (CF8M).Other materials are also available upon request</p>
                    </div>       
                </div>
                <div className="row">
                
                <div className="col-lg-12">
                        
                        <img src={process.env.PUBLIC_URL+"/Assets/img/Gallery/KS-SG2-01.png"} alt=""/>
                    </div>   
                    
                </div>
                <div className="row">
                    <a href={process.env.PUBLIC_URL+"/Assets/download/KS-SG2.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
                </div>
             </div>
    )
}

export default itemKSSG
