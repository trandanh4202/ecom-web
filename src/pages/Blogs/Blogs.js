import React from 'react';
import Blog from '../../components/Blog/Blog';

const Blogs = () => {
  return (
    <div className="blog-wrapper py-5">
      <div className="container-xl">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3 bg-body rounded-3 p-3">
              <h3 className="filter-title mb-3 fs-2 fw-medium">Shop by categories </h3>
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
          </div>
          <div className="col-9">
            <div className="row">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
