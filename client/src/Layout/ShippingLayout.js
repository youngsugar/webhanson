import React from 'react'

function ShippingLayout() {
    return (
        <section className="partner">
            <div className="container">
                <div className="row" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="col-lg-9 table-partner-list">
                        <table class="table table-bordered" >
                            <thead>
                                <tr >
                                    <th colSpan="2" class="text-center row-2">Shipping Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >PT. Royal Express Indonesia</td>
                                    <td >Matrex (Sumatra Transport Express)</td>
                                </tr>
                                <tr>
                                    <td >PT. Nusantara Jaya Express</td>
                                    <td >Indah Logistic Cargo</td>
                                </tr>
                                <tr>
                                    <td >CV. Sumber Mekar</td>
                                    <td >CV. Sumber Mulia Abadi</td>
                                    
                                </tr>
                                <tr>
                                    <td >CV. Karyatama Perintis Fajar</td>                                                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ShippingLayout
