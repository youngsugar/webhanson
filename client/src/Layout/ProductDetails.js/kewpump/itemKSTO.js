import React from 'react'

function itemKSTO() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
            <div className="col-lg-12 product-title">
                <h2>KS-TO</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img style={{width:'370px',height:'250px'}}src={process.env.PUBLIC_URL+'/Assets/img/Gallery/KS-TO.png'} alt="cheonsei 01"/>
                </div>
                <div className="col-lg-6">
                <h4>Design Features</h4>
                    <p style={{textAlign:'justify'}}>The KS-TO range of pumps is manufacured for a wide range of flow and head requirement which is covered by 19 sized and fully
                        complies with ISO 2858 and DIN 24256 standards. Back pull-out design to give insant access to most parts for simple and quick 
                        maintenance without removing the pump casing from the pipe system
                    </p>
                    
                </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
            <p>Single stage, horizontal volute pumps series KS-TO have specially developed
                        for handling no solid grain weak corrosive high temperature liquid, such as mineral oil and synthetic heat carriers up to 350 C
                        in the heat engineering industry. the increased demands on operational safety, environmental protection and the redution in running expenses have consequently been
                        considered in this design. Casing and stuffing box cover as pressure loaded components and frame adaptor are made of ductile iron.
                    </p>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-6" >
                    <p style={{textAlign:'justify'}}>with the combination effect of carbon sleeve bearing restricts oul to seal area,ribs on stuffing 
                        box cover aid in the dissipation of heat, and throttling clearance behind the hydraulics, a favorable drop
                        in temperature in the shaft seal area is achieved, with heat losses of the product handled are effectively prevented i.e. energy is beaing saved.
                        this enables the safe use of a simple uncooled type of shaft sealing. since heat carriers possess anything but good lubricating properties, a liquid flused
                        carboon sleeve bearing next to the impeller and an antifriction bear9ing next behind the mechanical seal and thus not being wetted by the heat carrier, have been fitted, 
                        through  this arrangement, noiseless operation and long service lives have been achieved.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src={process.env.PUBLIC_URL+'/Assets/img/Gallery/KS-TO-01.png'} alt="cheonsei ksto"/>
                </div>
            </div>
            <div className="row">
                <a href={process.env.PUBLIC_URL + "/Assets/download/KS-TO.pdf"} target="_blank" rel="noopener noreferrer" className="primary-btn normal-btn more-info" >More Info</a>
            </div>
            
        </div>
    )
}

export default itemKSTO
