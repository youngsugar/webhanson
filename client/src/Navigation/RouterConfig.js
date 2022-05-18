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
import itemksse3 from '../Layout/ProductDetails.js/kewpump/itemKSSE3'
import ItemKSSE2detail from "../Layout/ProductDetails.js/kewpump/itemKSSE2detail";
import ItemKSSR from "../Layout/ProductDetails.js/kewpump/ItemKSSR";
import itemKSSG from "../Layout/ProductDetails.js/kewpump/itemKSSG";
import itemKSSC from "../Layout/ProductDetails.js/kewpump/itemKSSC";
import itemKSTO from "../Layout/ProductDetails.js/kewpump/itemKSTO";
import itemKSDP from "../Layout/ProductDetails.js/kewpump/itemKSDP";
import itemKCM from "../Layout/ProductDetails.js/kewpump/itemKCM";
import PalmOil from "../Layout/ProductDetails.js/Brooks/PalmOil";
import itemBenzlersH from "../Layout/ProductDetails.js/Benzlers/itemBenzlersH";
import itemBenzlersG from "../Layout/ProductDetails.js/Benzlers/itemBenzlersG";
import itemBenzlersF from "../Layout/ProductDetails.js/Benzlers/itemBenzlersF";
import itemCouplingFFX from "../Layout/ProductDetails.js/Challenge/itemCouplingFFX";
import itemCouplingHRC from "../Layout/ProductDetails.js/Challenge/itemCouplingHRC";
import itemCouplingCNI from "../Layout/ProductDetails.js/Challenge/itemCouplingCNI";
import itemCouplingSC from "../Layout/ProductDetails.js/Challenge/itemCouplingSC";
import itemKD from "../Layout/ProductDetails.js/Cheonsei/itemKD";
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
                {/* <Route path={`${path}/kewpump/ks-se03`} component={itemksse3}/>
                <Route path={`${path}/kewpump/ks-se02`} component={ItemKSSE2detail}/>
                <Route path={`${path}/kewpump/ks-sr`} component={ItemKSSR}/>
                <Route path={`${path}/kewpump/ks-sg2`} component={itemKSSG}/>
                <Route path={`${path}/kewpump/ks-sc`} component={itemKSSC}/>
                <Route path={`${path}/kewpump/ks-to`} component={itemKSTO}/>
                <Route path={`${path}/kewpump/ks-kdp`} component={itemKSDP}/>
                <Route path={`${path}/kewpump/kcm`} component={itemKCM}/>
                <Route path={`${path}/brooks/palm-oil`} component={PalmOil}/>
                <Route path={`${path}/benzlers/series-h`} component={itemBenzlersH}/>
                <Route path={`${path}/benzlers/series-g`} component={itemBenzlersG}/>
                <Route path={`${path}/benzlers/series-f`} component={itemBenzlersF}/>
                <Route path={`${path}/challenge/ffx`} component={itemCouplingFFX}/>
                <Route path={`${path}/challenge/hrc`} component={itemCouplingHRC}/>
                <Route path={`${path}/challenge/coupling-natural-insert-070`} component={itemCouplingCNI}/>
                <Route path={`${path}/challenge/shaft-coupling-090b`} component={itemCouplingSC}/>
                <Route path={`${path}/cheonsei/kdv`} component={itemKD}/> */}
                <Route path={`${path}/benzlers`} component={BenzlersCategory}/>
                <Route path={`${path}/cheonsei`} component={CheonseiCategory}/>
                <Route path={`${path}/kewpump`} component={KewpumpCategory}/>
                <Route path={`${path}/brooks`} component={BrooksCategory}/>
                <Route path={`${path}/challenge`} component={ChallengeCategory}/>
            </Switch>
       
    )
}