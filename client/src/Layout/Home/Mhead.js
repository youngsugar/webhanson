import React from 'react'

function Mhead() {
    return (
        <div className="">
        <div id="preloder ">
                <div className="loader"></div>
            </div>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper bg-black  ">
                <div className="offcanvas__logo">
                    <a href="#s"><img src="img/logo.png" alt="" /></a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__btn">
                    <a href="#s" className="primary-btn text-white">Contact us</a>
                </div>

                <div className="offcanvas__social text-white">
                    <a href="#s"><i className="fa fa-facebook"></i></a>
                    <a href="#s"><i className="fa fa-twitter"></i></a>
                    <a href="#s"><i className="fa fa-instagram"></i></a>
                    <a href="#s"><i className="fa fa-dribbble"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Mhead
