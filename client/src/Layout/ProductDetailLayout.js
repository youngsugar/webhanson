import React from 'react'

import {Formik,Field}from 'formik'
import * as Yup from 'yup'
import  {RouterProduct}  from '../Navigation/RouterConfig'

const initialValues = {
    name : "",
    email : "",
    phone :""
}
const validatioSchema = Yup.object({
    name : Yup.string().required(),
    email : Yup.string().required(),
    phone: Yup.string().required()
})

function ProductDetailLayout() {
  const handleDownload = (e)=>{
      e.preventDefault()
      window.location.href = process.env.PUBLIC_URL + "/Assets/download/hanson-catalog2020.rar"
  }

    return (
        <section className="productcategory">
            
            <div className="container">
                <div className="row" style={{marginBottom:"20px"}}>
                
                   <RouterProduct/>
                
                    {/* <Formik
                        initialValues={initialValues}
                        validationSchema={validatioSchema}
                    >
                        {formik=>{return(
                    <div className="col-lg-3 order-lg-1">
                        
                        <div className="services__appoinment">
                            <div className="services__title" style={{ marginBottom: '20px' }}>
                                <h5><img src="img/icons/services-icon.png" alt="" /> Download Our Catalog</h5>
                            </div>
                            
                            <div className="formse">
                                <Field type="text" name="name" placeholder="Name" />
                                <Field type="email"  name="email" placeholder="Email" />
                                <Field type="number"  name="phone"  placeholder="Phone Number/Whatsapp"/>
                                <button className="site-btn" disabled={!formik.isValid || formik.isSubmitting || !formik.dirty} onClick={(e)=>handleDownload(e)}>Download</button>
                                </div>
                                
                        </div>

                        
                    </div>
                    )}}
                    </Formik> */}
                    
                </div>
            </div>
            
        </section>
    )
}

export default ProductDetailLayout
