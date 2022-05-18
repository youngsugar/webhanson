import React, { useState, useEffect } from "react";
const brooksData = [
  {
    name: "Roller Chain Type Hollow",
    image: "RollerChain-Hollow.jpg",
    file: "4in 20K hollow.pdf",
    type: "chain",
    size: "4"
  },
  {
    name: "Roller Chain Type Extended",
    image: "RollerChain-Extended.jpg",
    file: "6in 22K EP4P.pdf",
    type: "chain",
    size: "6"
  },
  {
    name: "Roller Chain Type Solid",
    image: "RollerChain-Solid.jpg",
    file: "6in 22K EP4P.pdf",
    type: "chain",
    size: "6"
  },
  {
    name: "Roller Chain Type Solid Hollow",
    image: "6in 22K EP4P-2.png",
    file: "6in 22K EP4P.pdf",
    type: "chain",
    size: "6"
  },
  {
    name: "Sprocket",
    image: "101508.png",
    file: "165512.pdf",
    type: "sproket",
    size: "10"
  }
];

function BrooksCategory() {
  const [page, setPage] = useState(1);
  const itemPerPage = 15;
  const [productList, setProductList] = useState([]);
  const [sizeList, setSizeList] = useState([])
  const [typeProduct, selectTypeProduct] = useState();
  const [sizeProduct, setSizeProduct] = useState()
  const updateList = () => {
    var indexOfLastItem = page * itemPerPage;
    var indexOfStartItem = indexOfLastItem - itemPerPage;
    var currentItem = brooksData.slice(indexOfStartItem, indexOfLastItem);
    setProductList(currentItem);
  };
  var totalPage = Math.ceil(brooksData.length / itemPerPage);
  var startPage = page;
  var endPage = startPage + 2;
  const handleSearch = (e) => {
    e.preventDefault()
    if (!typeProduct) {
      return;
    }
    if (!sizeProduct) {
      const curData = brooksData.filter(({ type, size }) => type === typeProduct)
      const newData = Array.from(curData)
      setPage(1)
      setProductList(newData)
    } else {
      const curData = brooksData.filter(({ type, size }) => type === typeProduct && size === sizeProduct)
      const newData = Array.from(curData)

      setProductList(newData)
    }
  }
  const handleChangeType = (e) => {
    e.preventDefault()
    setSizeProduct('')
    var value = e.target.value
    var sizeArr = [];
    selectTypeProduct(value)
    var selectedProduct = brooksData.filter(item => item.type === value)
    for (var i = 0; i < selectedProduct.length; i++) {
      sizeArr.push(selectedProduct[i].size)
    }
    var updateSize = new Set(sizeArr)
    var arr = Array.from(updateSize)
    setSizeList(arr)

  }
  const handleChangeSize = (e) => {
    var value = e.target.value
    setSizeProduct(value)
  }
  if (page + 2 >= totalPage && totalPage >= 3) {
    startPage = totalPage - 2;
    endPage = totalPage;
  } else if (totalPage < 3) {
    startPage = 1;
    endPage = totalPage;
  } else {
    startPage = page;
    endPage = startPage + 2;
  }
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
  useEffect(() => {
    updateList();
  }, [page]);
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
        <div className="col-lg-5 my-2">
          <div className="form-group">

            <select value={typeProduct} className="form-control" onChange={(e) => handleChangeType(e)}>
              <option >Choose Product</option>
              <option value="chain">Roller Chain</option>
              <option value="sproket">Sproket</option>
            </select>
          </div>

        </div>
        {totalPage > 0 && <div className="col-lg-5 my-2">
          <div className="form-group">
            <select className="form-control" value={sizeProduct} onChange={(e) => handleChangeSize(e)} >
              <option value=" ">Select size</option>
              {sizeList.map(item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>}

        <div className="col-lg-2 my-2">
          <div className="form-group">

            <div className="form-control-wrap">
              <button className="btn" style={{ backgroundColor: "black", color: "#fff" }} onClick={(e) => handleSearch(e)}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {productList.map((item) => (
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item">
              <a
                href={
                  process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.file}`
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
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <a
                href={
                  process.env.PUBLIC_URL + `/Assets/ViewCatalog/${item.file}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn normal-btn"
              >
                View Catalog
              </a>
            </div>
          </div>
        ))}

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
