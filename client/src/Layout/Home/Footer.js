import React from 'react'
import whatsapp from './img/whatsapp.png'
function Footer() {
    return (
        <footer className="footer">
        
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/product">Products</a></li>
                            <li><a href="/download">Download</a></li>
                            
                        </ul>
                    </div>
                    
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h5>Quick links</h5>
                        <ul>
                            <li><a href="/product/kewpump">Centrifugal Pump</a></li>
                            <li><a href="/product/brooks">Conveyor Chain</a></li>
                            <li><a href="/product/challenge">Power Transmission </a></li>
                            <li><a href="/product/benzlers">Gearbox & Gearmotor</a></li>
                           
                        </ul>
                        
                    </div>
                    
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="footer__address">
                        <h5>Contact Us</h5>
                        <ul>
                            <li style={{width:'280px'}}><i className="fa fa-map-marker"></i> Kompleks Industri Multiguna <br/> &nbsp; &nbsp; &nbsp; &nbsp;  Jl. Selayar no 6 KIM II-Mabar,<br/>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Percut Sei Tuan Deli Serdang<br/>&nbsp; &nbsp; &nbsp; &nbsp; Sumatera utara</li>
                            <li><i className="fa fa-phone"></i><span >(061) 6871589/6871592</span></li>
                            <li><i className="fa fa-envelope"></i> sales@hansonprima.com <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  sales.temsitek@gmail.com <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  sales.engineeringmalea@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-6">
                    <div className="row">
                        <div className="col-12">
                        <div className="footer__map">
                        <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.6194009491483!2d98.68910631532646!3d3.6737853507264564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303132ef1190880f%3A0x9e7287723f76412a!2sHanson%20Prima%20Engineering!5e0!3m2!1sid!2sid!4v1603187402474!5m2!1sid!2sid" height="190"  allowFullScreen=""></iframe>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="whatsapp-footer">
                        <a href="https://api.whatsapp.com/send?phone=6281260090018&lang=id" rel="noopener noreferrer" target="_blank"><img alt="whatsapp-icon" src={whatsapp}/></a>
                    </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </div>
        <div className="footer__copyright">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-7">
                        
                        <div className="footer__copyright__text">
                            <p>Copyright ©  2020 All rights reserved</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-5">
                        <ul>
                            <li>All Rights Reserved</li>
                            <li>Terms &amp; Use</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
