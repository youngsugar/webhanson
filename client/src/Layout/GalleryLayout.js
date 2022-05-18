import React,{useState,useCallback,useEffect} from 'react'
import Axios from 'axios'
function GalleryLayout() {
//     const [listGallery, setListGallery] = useState([])
// const [listCategory, setListCategory] = useState([])

// const getDataGallery = useCallback(()=>{
//     Axios({
//         url: 'http://localhost:8080/api/gallery/data',
//         method: 'GET',
//         params: { page: 1, query: '' }
//     }).then(result=>{
//         let data = result.data
//         setListCategory(data.info)
//         setListGallery(data.gallery)
//         console.log(data.gallery)
//     }).catch(err=>{
//         console.log(err.message)
//     })
// },[])
// const convertImage = (item)=>{
//     console.log(item)
//     let xdata = item ? 'data:image/png;base64,' + new Buffer(item, 'binary').toString('base64') : ""
//     return xdata
// }
// useEffect(()=>{
//     getDataGallery()
// },[])
    return (
        <React.Fragment>
            <div className="container">
            
                    
                <div class="photo-gallery" style={{marginBottom:'20px'}}>
        {/* <div class="container">
            <div class="intro">
                <h2 class="text-center font-bold">Event</h2>
                <p class="text-center">Updated 25 Agustus 2021 </p>
            </div>
            <div class="row photos">
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event1.jpg"} data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event1.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event2.jpg"} data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event2.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event3.jpg"} data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event3.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event4.jpg"} data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event4.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event5.jpg"} data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event5.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event6.jpg"} data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Event/event6.jpg"}/></a></div>
            </div>
        </div> */}
    </div>
    <div class="photo-gallery" style={{marginBottom:'20px'}}>
        <div class="container">
            <div class="intro">
                {/* <h2 class="text-center font-bold">Shipping and Commisioning</h2> */}
                <p class="text-center">Update 25 Maret 2022 </p>
            </div>
            <div class="row photos">
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "assets/img/Gallery/Shipping/shipping1.jpg"} target="_blank" data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/shipping1.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "assets/img/Gallery/Shipping/shipping2.jpg"} target="_blank"  data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/shipping2.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "assets/img/Gallery/Shipping/shipping3.jpg"} target="_blank" data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/shipping3.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "assets/img/Gallery/Shipping/shipping4.jpg"}  target="_blank" data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/shipping4.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "assets/img/Gallery/Shipping/shipping5.jpg"}  target="_blank" data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/shipping5.jpg"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL +  "assets/img/Gallery/Shipping/IMG_8410.JPG"} target="_blank" data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/IMG_8410.JPG"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "assets/img/Gallery/Shipping/IMG_9004.JPG"}  target="_blank"data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/IMG_9004.JPG"}/></a></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href={process.env.PUBLIC_URL + "assets/img/Gallery/Shipping/IMG_9510.JPG"}  target="_blank"data-lightbox="photos"><img class="img-fluid" src={process.env.PUBLIC_URL + "/Assets/img/Gallery/Shipping/IMG_9510.JPG"}/></a></div>
            
            </div>
        </div>
    </div>
             </div>   
           
        </React.Fragment>
    )
}

export default GalleryLayout
