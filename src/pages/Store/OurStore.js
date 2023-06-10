import { faBars, faFilter, faRotateRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Meta from '../../components/Meta/Meta';
import ProductCard from '../../components/Product/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(6);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="toggle-filter display-mobile mt-3 ms-3">
        <div className="d-inline-flex align-items-center justify-content-center" onClick={togglePopUp}>
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter products</span>
        </div>
      </div>

      {isOpen && (
        <div className="popup " onClick={togglePopUp}>
          <div className="overlay-modal"> </div>
          <div className="popup-content">
            <div onClick={(e) => e.stopPropagation()}>
              <div className="popup-header">
                <button onClick={togglePopUp}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                Filter your choice
                <FontAwesomeIcon icon={faRotateRight} />
              </div>
              <div className="d-flex  align-items-center justify-content-between">
                <p className="mb-0 d-block fs-3 sort">Sort By:</p>
                <select name="" className="form-control form-select fs-3" id="">
                  <option value>Filter</option>
                  <option value={''}>Sort name A-Z</option>
                  <option value={'Name-'}>Sort name Z - A</option>
                  <option value={'Price'}>Sort Price Low To High</option>
                  <option value={'Price-'}>Sort Price High To Low</option>
                  <option value={'View'}>Sort View</option>
                  <option value={'BestSale'}>Sort Sale</option>
                </select>
              </div>
              <div className="popup-filter">
                <div className="filter-card mb-3 bg-body rounded-3 ">
                  <h3 className="filter-title mb-3   fw-medium">Shop by categories </h3>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      cate
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      cate
                    </label>
                  </div>
                </div>
                <div className="filter-card mb-3 bg-body rounded-3 ">
                  <h3 className="filter-title mb-3   fw-medium">Shop by categories </h3>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      cate
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      cate
                    </label>
                  </div>
                </div>

                <div className="filter-card mb-3 bg-body rounded-3 ">
                  <h3 className="filter-title mb-3  fw-medium">Shop by brands </h3>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      brand
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      brand
                    </label>
                  </div>
                </div>
                <div className="filter-card mb-3 bg-body rounded-3 ">
                  <h3 className="filter-title mb-3  fw-medium">Filter by </h3>
                  <div className="filter-card mb-3 bg-body rounded-3 p-2">
                    <h3 className="filter-title mb-3  fw-medium">Avaiable </h3>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        out sock
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        in sock
                      </label>
                    </div>
                  </div>
                  <div className="filter-card mb-3 bg-body rounded-3 p-2">
                    <h3 className="filter-title mb-3  fw-medium">Color </h3>
                    <ul className="Colors ps-0 d-flex flex-wrap gap-2">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="filter-card mb-3 bg-body rounded-3 ">
                    <h3 className="filter-title mb-3  fw-medium">Color </h3>
                    <form
                      className="d-flex w-100 flex-column align-items-center justify-content-center from-price "
                      // onSubmit={handleSubmit} // sử dụng hàm handleSubmit để xử lý sự kiện submit
                    >
                      <div className="d-flex w-100 justify-content-between from-price ">
                        <input
                          type="input"
                          name="from"
                          placeholder="Price from"
                          // value={priceFrom}
                          // onChange={(e) => setPriceFrom(e.target.value)}
                          className="input-price fs-3 border rounded-3 border-1 p-2"
                        />
                        <input
                          type="input"
                          name="to"
                          placeholder="Price to"
                          // value={priceTo}
                          // onChange={(e) => setPriceTo(e.target.value)}
                          className="input-price  fs-3 border rounded-3 border-1 p-2"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-50 fs-3 bg-danger d-flex align-items-center justify-content-center"
                      >
                        Check
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Meta />
      <div className="store-wrapper py-5 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-3 display-desktop">
              <div className="filter-card mb-3 bg-body rounded-3 p-3">
                <h3 className="filter-title mb-3   fw-medium">Shop by categories </h3>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" value="" id="" />
                  <label className="form-check-label" htmlFor="">
                    cate
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" value="" id="" />
                  <label className="form-check-label" htmlFor="">
                    cate
                  </label>
                </div>
              </div>
              <div className="filter-card mb-3 bg-body rounded-3 p-3">
                <h3 className="filter-title mb-3  fw-medium">Shop by brands </h3>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" value="" id="" />
                  <label className="form-check-label" htmlFor="">
                    brand
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" value="" id="" />
                  <label className="form-check-label" htmlFor="">
                    brand
                  </label>
                </div>
              </div>
              <div className="filter-card mb-3 bg-body rounded-3 p-3">
                <h3 className="filter-title mb-3  fw-medium">Filter by </h3>
                <div className="filter-card mb-3 bg-body rounded-3 p-2">
                  <h3 className="filter-title mb-3  fw-medium">Avaiable </h3>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      out sock
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      in sock
                    </label>
                  </div>
                </div>
                <div className="filter-card mb-3 bg-body rounded-3 p-2">
                  <h3 className="filter-title mb-3  fw-medium">Color </h3>
                  <ul className="Colors ps-0 d-flex flex-wrap gap-2">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="filter-card mb-3 bg-body rounded-3 p-3">
                  <h3 className="filter-title mb-3  fw-medium">Color </h3>
                  <form
                    className="d-flex w-100 flex-column align-items-center justify-content-center from-price "
                    // onSubmit={handleSubmit} // sử dụng hàm handleSubmit để xử lý sự kiện submit
                  >
                    <div className="d-flex w-100 justify-content-between from-price ">
                      <input
                        type="input"
                        name="from"
                        placeholder="Price from"
                        // value={priceFrom}
                        // onChange={(e) => setPriceFrom(e.target.value)}
                        className="input-price fs-3 border rounded-3 border-1 p-2"
                      />
                      <input
                        type="input"
                        name="to"
                        placeholder="Price to"
                        // value={priceTo}
                        // onChange={(e) => setPriceTo(e.target.value)}
                        className="input-price  fs-3 border rounded-3 border-1 p-2"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-50 fs-3 bg-danger d-flex align-items-center justify-content-center"
                    >
                      Check
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <button className="toggle-button rounded-" onClick={togglePopUp}>
              Toggle Popup
            </button> */}

            <div className="col-lg-9 col-12">
              <div className="filter-sort-grid bg-body p-2 round-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="display-desktop d-flex  align-items-center justify-content-between">
                    <p className="mb-0 d-block fs-3 sort">Sort By:</p>
                    <select name="" className="form-control form-select fs-3" id="">
                      <option value>Filter</option>
                      <option value={''}>Sort name A-Z</option>
                      <option value={'Name-'}>Sort name Z - A</option>
                      <option value={'Price'}>Sort Price Low To High</option>
                      <option value={'Price-'}>Sort Price High To Low</option>
                      <option value={'View'}>Sort View</option>
                      <option value={'BestSale'}>Sort Sale</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center  ">
                    <p className="totalProducts mb-0 fs-3 ">21 Products</p>
                    <div
                      className="hideproduct bg-body-tertiary border border-1 rounded-3 display-desktop"
                      onClick={() => setGrid(3)}
                    >
                      <FontAwesomeIcon icon={faBars} className="p-3 text-black " />
                    </div>
                    <div className="hideproduct bg-body-tertiary border border-1 rounded-3" onClick={() => setGrid(6)}>
                      <FontAwesomeIcon icon={faBars} className="p-3 text-black " />
                    </div>
                    <div className="hideproduct bg-body-tertiary border border-1 rounded-3" onClick={() => setGrid(12)}>
                      <FontAwesomeIcon icon={faBars} className="p-3 text-black " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-2 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
