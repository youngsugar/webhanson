import React from 'react'

function itemKSSE3() {
    return (
        
            <div className="col-lg-9 order-lg-2 productlist">
                <div className="row">
                    <div className="col-lg-12" style={{display:'flex',justifyContent:'center',alignContent:'center',marginBottom:'20px'}}>
                        <img alt="kewpump-ksse3" src={process.env.PUBLIC_URL+'/Assets/img/Gallery/kewpump.png'}/>
                    </div>
                </div>
                 <div className="col-lg-12 product-title">
                     <h2>KS-SE3</h2>
                 </div>
                
                <div className="row">
                    <div className="col-lg-5 order-lg-1 image-product-detail">
                        <img src={process.env.PUBLIC_URL+"/Assets/img/Gallery/KS-SE3.jpg"} alt=""/>
                    </div>   
                    <div className="col-lg-7 order-lg-1" >
                        <h4>Dynamic Sealing</h4>
                        <p>on some though pumping services like paper stock 
                            and slurries mechanical seels require outside flush and constant,
                             costly attention. Even then seal failures are common resulting
                              in downtime. KS-SE3 offers a dynamic seal which simply by fitting
                              xpeler between chamber and impeller, elimnates the need for a mechanical seal</p>
                        <h4>Working Principle</h4>
                        <p>During start-up,expeller acts like an impeller, removing liquid and
                            solid from the sealing chamber. when the pump is stationary V seal or other type of secondary
                            seal prevents pump form leaking
                        </p>
                    </div>       
                </div>
                <div className="row">
                <div className="col-lg-7 order-lg-1" >
                        <h4>Advantage</h4>
                        <ul>
                            <li>External seal water no required</li>
                            <li>Elimination of pump conttamination and product dilution</li>
                            <li>Reduces utility cost</li>
                            <li>No need to treat seal water</li>
                            <li>Eliminate problems associated with piping from a remote source</li>
                            <li>Adjustable shaft sleeve design enables the shaft sleeve to be
                                used up to five cycles longer thus saving significant maintenance cost 
                                and down time
                            </li>
                        </ul>
                    </div>  
                <div className="col-lg-5 order-lg-1 image-product-detail">
                        
                        <img src={process.env.PUBLIC_URL+"/Assets/img/Gallery/KS-SE3-01.png"} alt=""/>
                    </div>   
                    
                </div>
                <div className="row">
                    <a href={process.env.PUBLIC_URL+"/Assets/download/KS-SE3.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
                </div>
             </div>
        
    )
}

export default itemKSSE3
