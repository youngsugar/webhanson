import React, { useState, useEffect } from "react";
const brooksData = [
  {
    name: "Roller Chain Type Hollow",
    image: "RollerChain-Hollow.jpg",
    file: ["4in 20K hollow","4in26K-HP6P"],
    type: "chain",
    size: "4"
  },
  {
    name: "Roller Chain Type Extended",
    image: "RollerChain-Extended.jpg",
    file: ["4in22K EP8P"],
    type: "chain",
    size: "6"
  },
  {
    name: "Roller Chain Type Solid",
    image: "RollerChain-Solid.jpg",
    file: ["6in 22K EP4P.pdf"],
    type: "chain",
    size: "6"
  },
  {
    name: "Roller Chain Type Solid Hollow",
    image: "6in 22K EP4P-2.png",
    file: ["6in 22K EP4P.pdf"],
    type: "chain",
    size: "6"
  },
  {
    name: "Sprocket",
    image: "101508.png",
    file: ["165512.pdf"],
    type: "sproket",
    size: "10" 
  }
];

function BrooksCategory() {
  const [page, setPage] = useState(1);
  
  const [products,setProducts] = useState([
    {name:"Roller Chain Type Hollow",image: "RollerChain-Hollow.jpg", size:["4in 20K hollow","4in26K-HP6P","6in 20K hollow","6in40K EP8P"],type: "chain",selected:""},
    {name: "Roller Chain Type Extended",image: "RollerChain-Extended.jpg",size: ["4in22K EP8P",'6in 22K EP4P','6in 65K EP6P','6in 80K EP'],type: "chain",selected:""},
    {name: "Roller Chain Type Solid",image: "RollerChain-Solid.jpg",size: ["6in22K solid"],type: "chain",selected:""},
    // {name: "Roller Chain Type Solid Hollow",image: "6in 22K EP4P-2.png",size: ["6in 22K EP4P.pdf"],type: "chain",selected:""},
    {name: "Sprocket",image: "BrooksAndell.jpg",size: ["165512"],type: "sproket",selected:""}
  ])
  const [typeProduct, selectTypeProduct] = useState();
  const [sizeProduct, setSizeProduct] = useState()
  const  handleChangeCatalog = (e,index)=>{
    console.log(e.target.value)
    let value = e.target.value
    setProducts(prevProducts=>{return prevProducts.map((product,idx)=>{
      if(index === idx){     
        return {...prevProducts[index],selected:value}
      }else{
        return product;
      }
    })})
  }
  
  // Pagination 
  const itemPerPage = 15;
  var totalPage = Math.ceil(brooksData.length / itemPerPage);
  var startPage = page;
  var endPage = startPage + 2;
  
  var pages = [...new Array(endPage + 1 - startPage).keys()].map(
    (i) => startPage + i
  );
  const increaseIncrement = (e) => {
    e.preventDefault()
    if (page >= totalPage) {
      return;
    } else {
      setPage(prevState => prevState + 1)
    }
  }
  const decreaseIncrement = (e) => {
    e.preventDefault()
    if (page <= 1) {
      return;
    } else {
      setPage(prevState => prevState - 1)
    }

  }
  const addCurrentPage = (e, item) => {
    e.preventDefault()
    setPage(item)
  }
  // end pagination

  return (
    <div className="col-lg-12 order-lg-2 productlist">

      <div className="row">
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            alt="brooks-product"
            src={
              process.env.PUBLIC_URL +
              "/Assets/img/Gallery/brooks-limited-icon.jpg"
            }
          />
        </div>
      </div>
      
      <div className="row">
        {products.map((item,itemIndex) => {return(
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item">
              <a
                href={
                  process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.selected}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >

                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/Assets/img/Product/brooksandell/${item.image}`
                  }
                  alt="40inch-20k"
                />
              </a>
              <h5>{item.name}</h5>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select size</label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>{handleChangeCatalog(e,itemIndex)}}>
                  <option value="">Select Size</option>
                  {item.size.map(itemC=>(
                   
                    <option value={itemC}>{itemC}</option>
                  ))}
                </select>
              </div>
              {item.selected?<a
                href={
                  process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.selected}.pdf`
                }
                
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn normal-btn"
              >
                View Catalog
              </a>:""}
              
            </div>
          </div>
        )})}

      </div>
      {brooksData.length >= itemPerPage && (
        <div className="row flex justify-center align-center">
          <nav>
            <ul className="pagination cursor-pointer">
              <li className={`page-item  ${page === 1 ? "disabled" : ""}`} onClick={(e) => decreaseIncrement(e)}>
                <span className="page-link" tabIndex="-1">
                  Previous
                </span>
              </li>

              {pages.map((item, index) => (
                <li
                  key={index}
                  className={`page-item ${page === item ? "active" : ""}`}
                >
                  <span className="page-link " href="#" onClick={(e) => addCurrentPage(e, item)}>
                    {item}
                  </span>
                </li>
              ))}

              <li
                className={`page-item  ${page === brooksData.length ? "disabled" : ""
                  }`}
                onClick={(e) => increaseIncrement(e)}
              >
                <span className="page-link">Next</span>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default BrooksCategory;
