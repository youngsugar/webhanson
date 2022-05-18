import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { saveAs } from 'file-saver'
function DownloadLayout() {
    const [listDownload,setListDownload] = useState([])

    const getDataDownload = () =>{
      
        Axios({
            url:'http://localhost:8080/api/download/data',
            method:"GET",
            params:{page:'1',query:''},
         
        }).then(response=>{
           
            let data = response.data
            if(response.status === 200){
                let currrent_data = data.info
                console.log(currrent_data)
                setListDownload(currrent_data)
            }else{
                console.log('error')
            }
        }).catch(err=>{
            console.log(err.message)
        })
    }
    const convertBlob = (e,id,name)=>{
        e.preventDefault()
        Axios({
            url:'http://localhost:8080/api/download/data/pdf',
            method:'GET',
            params:{id:id},
            responseType: "blob"
        }).then(response=>{
            let data = response.data
            const file = new Blob([data], { type: 'application/pdf' })
            const fileURL = URL.createObjectURL(file);
    
        // window.open(fileURL);
            saveAs(file, name)
            // window.open(fileURL)
        }).catch(err=>{
            console.log(err.message);
        })
       
    }
    const previewFile = () =>{
        
    }
    useEffect(()=>{
        getDataDownload()
    },[])
    return (
        <section className="download" style={{marginBottom:'20px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>File download</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                                {listDownload && listDownload.map(item=>(
                                    <tr>
                                <td>{item.name}</td>
                                <td> <a href="#"  onClick={(e)=>convertBlob(e,item.id,item.name)}target="_blank" rel="noopener noreferrer" >Download</a></td>                              
                            </tr>
                                ))}
                                
                            {/* <tr>
                                <td>KEWPUMP KS-SR</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SR.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>                              
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SE2</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SE2.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SE3</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SE3.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SC</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SC.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-KDP</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-KDP.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SG2</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SG2.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEWCRACKER</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KCM.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEMPION</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/kd-series.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>  
                            </tr>
                            <tr>
                                <td>CONVEYOR CHAIN BROOKS ANDELL</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/palm_oil_chain.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>POWER TRANSMISSION PRODUCT</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/challenge.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>GEARBOX AND GEARMOTOR</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/Gearbox-gearmotor.rar"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr> */}
                            </tbody>
                        </table>
                                        </div>
                                        </div>
                                        </div>
                                </section>
       
        
    )
}

export default DownloadLayout
