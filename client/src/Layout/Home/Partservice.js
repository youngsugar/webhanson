import React from 'react'
import pumprepair from './img/pump-repair.png'
import replacement from './img/replacement-parts.png'
import engineering from './img/engineering-services.png'
function Partservice() {
    return (
        <section className="chooseus spad bg-red-500 pt-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center ">
                    <div className="section-title text-white mb-0">
                        
                        <h2>PARTS AND SERVICES</h2>
                        {/* <p>We provide quality products and after market services for water and fluid processing through our industrial pumps division as well as design build solutions through hanson prima package system</p> */}
                        <p>Kami menyediakan kualitas produk dan after service terhadap industri pompa air dan minyak sawit serta menyesuaikan sesuai dengan struktur pabrik anda</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="chooseus__item content-center">
                     <span className="flex justify-center items-center"><img alt="centrifugal-pump" src={pumprepair}/></span>
                        <h5 className="text-white">Pump Repair</h5>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="chooseus__item">
                    <span className="flex justify-center items-center"><img  alt="centrifugal-pump" src={engineering}/></span>
                        <h5 className="text-white">Engineering Service</h5>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="chooseus__item">
                    <span className="flex justify-center items-center"><img  alt="centrifugal-pump" src={replacement}/></span>   
                        <h5 className="text-white">Replacement Parts</h5>
                       
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        // <div className=" card-home3 py-4">
        //    <span className="font-bold text-white m-auto block ">PARTS AND SERVICES</span>
        //    <span className="text-center block text-white m-auto pb-4">We provide quality products and after market services for water and fluid processing through our industrial pumps division as well as design build solutions through hanson prima package system</span>
        
        //    <div className="flex content-center justify-center ">
                    
        //             <div className="card-home3-item">
        //                 <img  alt="centrifugal-pump" src={process.env.PUBLIC_URL+"/Assets/img/corporate/pump-repair.png"}/>   
        //                 <span className="text-white flex justify-content content-center pt-2 font-bold text-sm">Pump Repair</span>                  
        //             </div>
        //             <div className="card-home3-item mx-4">
        //                     <img  alt="centrifugal-pump" src={process.env.PUBLIC_URL+"/Assets/img/corporate/engineering-services.png"}/>  
        //                      <span className="text-white flex justify-content content-center pt-2  font-bold text-sm text-center">Engineering Service</span>                              
        //             </div>
        //             <div className="card-home3-item">
        //                 <img  alt="centrifugal-pump" src={process.env.PUBLIC_URL+"/Assets/img/corporate/replacement-parts.png"}/>    
        //                 <span className="text-white flex justify-content content-center pt-2 font-bold text-sm text-center">Replacement Parts</span>              
        //             </div>            
        //     </div>    
        // </div>
    )
}

export default Partservice
