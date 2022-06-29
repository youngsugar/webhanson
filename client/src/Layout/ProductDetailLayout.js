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
                </div>
            </div>
            
        </section>
    )
}

export default ProductDetailLayout
