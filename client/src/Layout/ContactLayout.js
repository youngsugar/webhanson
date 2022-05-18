import React,{useState} from 'react'
import Axios from 'axios'
function ContactLayout() {
    const [data,setData] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })
    const [error,setError] = useState({
         name:'',
         email:'',
         phone:'',
         message:''
    })
    const handleChangeForm = (e)=> {
        let value = e.target.value
        let name = e.target.name
        setData({...data,[name]:value})
    }
    const sendMessage = (e)=>{
        e.preventDefault()
        let formData = {
            name:data.name,
            email:data.email,
            phone:data.phone,
            message:data.message
        }
        if(!data.name){
            setError({...error,name:"Please enter a name"})
        }else if(!data.email){
            setError({...error,email:"Please enter an email"})
        }else if(!data.phone){
            setError({...error,phone:"Please enter a phone number"})
        }else if(!data.message){
            setError({...error,message:"Please enter a message"})
        }else{
            Axios.post('http://localhost:8080/api/inbox/create',formData).then(response=>{
            if(response.status === 200){
                setData({...data,name:'',email:'',phone:'',message:''})
                console.log('sukses')
            }else{
                console.log('gagal')
            }
        }).catch(err=>{
            console.log(err.message)
            })
        }    
    }
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div class="contact__widget">
                            <div class="contact__widget__icon">
                                <i class="fa fa-map-marker"style={{color:'red'}}></i>
                            </div>
                            <div class="contact__widget__text">
                                <h5>Alamat</h5> 
                                <p>Komplek industri multiguna<br/>Jln Selayar no 6 KIM II Mabar,<br/>Percut Sei Tuan, Deli Serdang, <br/> sumatera utara</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="contact__widget">
                            <div class="contact__widget__icon">
                                <i class="fa fa-phone" style={{color:'red'}}></i>
                            </div>
                            <div class="contact__widget__text">
                                <h5>Hunting</h5>
                                    <p>(061) 6871590/6871592</  p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="contact__widget">
                            <div class="contact__widget__icon">
                                <i class="fa fa-envelope"style={{color:'red'}}></i>
                            </div>
                            <div class="contact__widget__text">
                                <h5>Email</h5>
                                <p>sales@hansonprima.com, sales.temsitek@gmail.com, sales.engineeringmalea@gmail.com</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact__content" style={{marginBottom:'30px'}}>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="contact__pic">
                            <img src={process.env.PUBLIC_URL+"/Assets/img/contact-pic.jpg"} alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="contact__form">
                            <h3>Need Inquiry ?</h3>
                            <div className="formse">
                                {error.name && <span className="error-text">{error.name}</span>}
                                <input type="text" placeholder="Name" name="name" onChange={(e)=>handleChangeForm(e)} value={data.name}/>
                                {error.email && <span className="error-text">{error.email}</span>}                               
                                <input type="text" placeholder="Email" name="email"onChange={(e)=>handleChangeForm(e)} value={data.email}/>
                                {error.phone && <span className="error-text">{error.phone}</span>}
                                <input type="text" placeholder="Phone Call" name="phone" onChange={(e)=>handleChangeForm(e)} value={data.phone}/>
                                {error.message && <span className="error-text">{error.message}</span>}
                                <textarea placeholder="Message" name="message" onChange={(e)=>handleChangeForm(e)} value={data.message}></textarea>
                                <button class="site-btn" onClick={(e)=>sendMessage(e)}>Send Message</button>
                            </div>
                        </div>
                        <div className="data">
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ContactLayout
