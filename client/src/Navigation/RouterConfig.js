import { Switch, Route,useRouteMatch} from "react-router-dom";
import Index from '../Layout/Home/Index';
import React from 'react'
import ContactLayout from "../Layout/ContactLayout";
import AboutLayout from "../Layout/AboutLayout";
import DownloadLayout from "../Layout/DownloadLayout";
import GalleryLayout from "../Layout/GalleryLayout";
import NoMatch from "./NoMatch";
import ProductDetailLayout from "../Layout/ProductDetailLayout";
import ProductCategoryLayout from "../Layout/ProductCategoryLayout";
import BenzlersCategory from "../Layout/ProductBrand/BenzlersCategory";
import CheonseiCategory from "../Layout/ProductBrand/CheonseiCategory";
import KewpumpCategory from "../Layout/ProductBrand/KewpumpCategorys";
import BrooksCategory from "../Layout/ProductBrand/BrooksCategory";
import ChallengeCategory from "../Layout/ProductBrand/ChallengeCategory";


export const RouterConfig = () =>{
    
    return(
        <Switch>
                  <Route exact path="/" component={Index}></Route>
                  <Route path='/product' component={ProductDetailLayout}></Route>
                  <Route exact path='/contact-us' component={ContactLayout}></Route>
                  <Route exact path='/about-us' component={AboutLayout}></Route>
                  <Route exact path='/download' component={DownloadLayout}></Route>
                  {/* <Route  exact path="/shipping" component={Shipping}></Route>
                  <Route exact path="/partner" component={Partner}></Route> */}
                  <Route exact path="/gallery" component={GalleryLayout}></Route>
                  <Route path='*' component={NoMatch}/>
                  
        </Switch>       
    )
}

export const RouterProduct = () =>{
    let {path} = useRouteMatch()
    return(     
            <Switch>              
                <Route exact path={`${path}/`} component={ProductCategoryLayout}/>
                <Route exact path={`${path}/benzlers`} component={BenzlersCategory}/>
                <Route exact path={`${path}/cheonsei`} component={CheonseiCategory}/>
                <Route exact path={`${path}/kewpump`} component={KewpumpCategory}/>
                <Route exact path={`${path}/brooks`} component={BrooksCategory}/>
                <Route exact path={`${path}/challenge`} component={ChallengeCategory}/>
            </Switch>
       
    )
}