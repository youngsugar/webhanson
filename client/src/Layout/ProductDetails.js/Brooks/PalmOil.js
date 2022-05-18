import React from 'react'

function PalmOil() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
                <div className="row">
                    <div className="col-lg-12" style={{display:'flex',justifyContent:'center',alignContent:'center',marginBottom:'20px'}}>
                        <img alt="brooks-palmoil"src={process.env.PUBLIC_URL+'/Assets/img/Gallery/brooks-limited-logo.jpg'}/>
                    </div>
                </div>
                 <div className="col-lg-12 product-title">
                     <h2>PALM OIL CHAIN</h2>
                 </div>
                
                <div className="row">
                    <div className="col-lg-5 order-lg-1 image-product-detail">
                        <img src={process.env.PUBLIC_URL+"/Assets/img/Gallery/brooks-palm-oil.png"} alt=""/>
                    </div>   
                    <div className="col-lg-7 order-lg-1 product-detail">
                        <h4>Features</h4>
                        <ul >
								<li>Link plates prodeuced from high carbon cold drawn steel</li>
								<li>case hardened alloy steel bushes precision machined from seamless</li>
								<li>Bearing pins with location shoulders and interference fit</li>
								<li>Optional stainless steel or nitride treated liner bushes</li>
								<li>Ground Hardened rollers</li>
								<li>Bushes with location shouldrs and interference fit</li>
								<li>Spin riveted induction hardened alloy steel pins</li>
								<li>Alloy steel seamless tube used for all hollow pins</li>
							</ul>
                    </div>       
                </div>
                 
                <div className="row">
                    <a href={process.env.PUBLIC_URL+"/Assets/download/palm-oil-chain.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
                </div>
             </div>
    )
}

export default PalmOil
