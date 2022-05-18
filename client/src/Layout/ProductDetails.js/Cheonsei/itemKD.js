import React from 'react'

function itemKD() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
                <div className="row">
                    <div className="col-lg-12" style={{display:'flex',justifyContent:'center',alignContent:'center',marginBottom:'20px'}}>
                        <img alt="cheonsei-kd"src={process.env.PUBLIC_URL + '/Assets/img/Gallery/cheon-logo.png'}/>
                    </div>
                </div>
                 <div className="col-lg-12 product-title">
                     <h2>KD SERIES</h2>
                 </div>
                
                <div className="row">
                    <div className="col-lg-5 order-lg-1 image-product-detail">
                        <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KDV.jpg"} alt=""/>
                    </div>   
                    <div className="col-lg-7 order-lg-1" >
                        <h4>Features</h4>
                        <ul >
								<li>Wide capacity range : 5 ~ 54,000ml/min</li>
								<li>Various Liquid End Material withstanding any chemicals</li>
								<li>Free choice in driving motor</li>
								<li>Gentrified quality : Excellent product component manufactured by precision injection mold</li>
								<li>Leakproof driving part by accurate design &amp; durable part manufactured by wide experience</li>
								<li>Simplified operation : Easy operation &amp; simple installation by compact design</li>
								<li>Accurate adjustment of flow rate is possible by using dial</li>
								<li>Simple installation &amp; easy maintenance</li>
							</ul>
                    </div>       
                </div>
                 
                <div className="row">
                    <a href={process.env.PUBLIC_URL+"/Assets/download/KD-series.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
                </div>
             </div>
    )
}

export default itemKD
