import React from 'react';

const Blog = () => {
  return (
    <div className="col-lg-3 col-6">
      <a href="" className="w-100 blog-card bg-body p-3  border border-secondary-subtle rounded-4">
        <div className="card-image">
          <img className="img-fluid w-100" src="image/Brand/News.png" alt="" />
        </div>
        <div className="card-content">
          <p className="date text-black fs-3">23 May, 2023</p>
          <h2 className="card-title text-black fs-2">A beautiful sunday morning renaissance</h2>
          <p className="desc text-black fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat accusamus officia
          </p>
        </div>
      </a>
    </div>
  );
};

export default Blog;
