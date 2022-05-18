import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from './img/whatsapp.png'
import hansonMobile from './img/logomobile-hanson.png'
function Head() {
    return (
        <React.Fragment>
            
            <div class="offcanvas-menu-overlay"></div>
            <div class="offcanvas-menu-wrapper ">
            <div class="offcanvas__logo">
            <a href="/"><img src={hansonMobile} alt="logo hanson"/></a>
        </div>
                <div id="mobile-menu-wrap"></div>
               
                <ul class="offcanvas__widget mt-4">
                    <li><i class="fa fa-phone"></i> (061) 6871589/6871592</li>
                    <li><i class="fa fa-map-marker"></i> Kompleks Industri Multiguna
                                        Jl. Selayar no 6 KIM II-Mabar,
                                        Percut Sei Tuan Deli Serdan</li>
                    <li><i class="fa fa-clock"></i> Mon to Sat 9:00am to 17:00pm</li>
                </ul>
               
            </div>
            <header class="header">
                <div class="header__top">
                    <div class="canvas__open">
                        <i class="fa fa-bars"></i>
                    </div>
                    <div class="container">
                        <div class="row mt-0">
                            <div class="col-lg-8">
                                <ul class="header__top__left">
                                    <li><i class="fa fa-phone"></i> (061) 6871589/6871592</li>
                                    <li><i class="fa fa-map-marker"></i>  Kompleks Industri Multiguna
                                        Jl. Selayar no 6 KIM II-Mabar,
                                        Percut Sei Tuan Deli Serdang, sumatera utara</li>
                                    <li><i class="fa fa-clock"></i>Mon to Sat 9:00am to 17:00pm</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="row  flex content-center justify-center" style={{marginTop:'0px'}}>
                        {/* <div className="flex justify-center content-center col-xl-2 col-lg-12 col-sm-6 col-md-12">
                            <div className="header__logo">
                                <Link to="/"><img src={process.env.PUBLIC_URL + "/Assets/img/hansonlogo.png"} alt="Hanson Prima Engineering" /></Link>
                            </div>
                        </div> */}
                        <div className="flex justify-center content-center col-xl-5 col-lg-12 col-sm-6 col-md-12">
                            <div className="header__nav flex flex-column  justify-center content-center text-center">
                                {/* <h2 className="head-m ">HANSON PRIMA GROUP</h2> */}
                                <div className="header__logo">
                                <Link to="/"><img src={process.env.PUBLIC_URL + "/Assets/img/Logo/Temsitek-Emi.png"} alt="Hanson Prima Engineering" /></Link>
                            </div>
                            <p className="head-sm font-semibold"> Conveyor Chain & Sprocket - Pump - Motor - Gearbox - Belt & Pulley - Coupling</p>
                            </div>
                        </div>
                       
                       
                     
                        <div className=" col-xl-2 col-lg-12 col-sm-12 flex justify-center content-center">
                            <a href="https://api.whatsapp.com/send?phone=6281260090018&lang=id" rel="noopener noreferrer" target="_blank"><img className="whatsapp-icon-head" alt="whatsapp-icon" src={whatsapp} /></a>
                        </div>

                    </div>

                    <div className="row ">
                        <div className="col-lg-12 flex justify-center">
                            <div className="header__menu__option">
                                <nav className="header__menu">
                                    <ul>
                                        <li className="active "><Link to="/">Home</Link></li>

                                        <li><a className="text-black" href="/product"><span  className="text-black font-semibold">Products</span></a>
                                            <ul className="dropdown pl-4">
                                                <li><a className="text-black" href="/product/kewpump">Kewpump</a></li>
                                                <li><a  href="/product/brooks">Brooks</a></li>
                                                <li><a href="/product/benzlers">Benzlers</a></li>
                                                <li><a  href="/product/challenge">Challenge</a></li>
                                                <li><a  href="/product/cheonsei">Cheonsei</a></li>
                                            </ul>
                                        </li>
                                        <li><a  href="/Gallery">Gallery</a></li>
                                        <li className="font-semibold navbar-top-padding"><Link to="/about-us">About Us</Link></li>
                                    <li className="font-semibold navbar-top-padding"><Link to="/contact-us">Contact Us</Link></li>
                                        {/* <li><a  href="/partner">Our Customers</a></li>
                                        <li><a  href="/shipping">Shipping</a></li> */}
                                        {/* <li><a  href="/download">Catalog</a>
                                        </li> */}
                                    </ul>
                                </nav>
                                <div class="canvas__open">
                                    <i class="fa fa-bars"></i>
                                </div>

                            </div>.
                        </div>
                    </div>
                    <div class="canvas__open">
                <i class="fa fa-bars"></i>
            </div>
                </div>
            </header>
            {/* <div className="container-fluid">
            <div className="row px-10 flex content-center justify-center">
                <div className="flex justify-center content-center col-xl-1 col-lg-12 col-sm-12 col-md-12">
                        <div className="header__logo">
                            <Link to="/"><img   src={process.env.PUBLIC_URL+"/Assets/img/hansonlogo.png"} alt="Hanson Prima Engineering"/></Link>
                        </div>
                </div>
                <div className="flex justify-center content-center col-xl-5 col-lg-12 col-sm-12 col-md-12">
                        <div className="header__nav flex flex-column  justify-center content-center text-center">
                            <h2 className="head-m ">CV.HANSON PRIMA ENGINEERING</h2>   
                            <p className="head-sm font-semibold"> Conveyor Chain & Sprocket - Pump - Motor - Gearbox - Belt & Pulley - Coupling</p>                      
                        </div>                       
                </div>  
                <div>
                    <div className="header__menu__option">
                            <nav className="header__menu flex content-center justify-center ">
                                 <li className="font-semibold px-4 "><Link  to="/about-us">About Us</Link></li>
                                 <li className="font-semibold px-4"><Link to="/contact-us">Contact Us</Link></li> 
                            </nav>
                    </div>
                </div> 
                <div className=" col-xl-2 col-lg-12 col-sm-12 flex justify-center content-center">
                    <a href="https://api.whatsapp.com/send?phone=081260090018&lang=id" rel="noopener noreferrer" target="_blank"><img  className="whatsapp-icon-head" alt="whatsapp-icon" src={whatsapp}/></a>
                </div>              
            </div>            
            <div className="row bg-black ">
                <div className="col-lg-12 flex justify-center">
                    <div className="header__menu__option">
                        <nav className="header__menu">
                            <ul>
                                <li className="active "><Link className="nav-c" to="/">Home</Link></li>                               
                                <li><a  className="nav-c" href="/product">Products</a>
                                    <ul className="dropdown">
                                        <li><a  className="nav-c" href="/product/kewpump">Kewpump</a></li>
                                        <li><a className="nav-c" href="/product/brooks">Brooks</a></li>
                                        <li><a className="nav-c" href="/product/benzlers">Benzlers</a></li>
                                        <li><a  className="nav-c" href="/product/challenge">Challenge</a></li>
                                        <li><a className="nav-c" href="/product/cheonsei">Cheonsei</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-c" href="/Gallery">Gallery</a></li>
                                <li><a className="nav-c" href="/partner">Our Customers</a></li>
                                <li><a className="nav-c" href="/shipping">Shipping</a></li>
                                <li><a className="nav-c" href="/download">Downloads</a></li>                                
                            </ul>
                        </nav>                                             
                    </div>
                </div>
            </div>           
            <div className="canvas__open">
                <i className="fa fa-bars"></i>
            </div>           
        </div> */}
        </React.Fragment>
    )
}

export default Head
