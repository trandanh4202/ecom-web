import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '~/components/Blog/Blog';

const News = () => {
  return (
    <section className="home-news py-5">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <h1 className="home-news__title text-center text-uppercase">News about Technology</h1>
          </div>
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <div className="text-center">
            <Link to="blogs" className="btn p-3 border border-1 rounded-3 text-center bg-danger">
              <FontAwesomeIcon icon={faDownLong} />
              <span>View all!</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
