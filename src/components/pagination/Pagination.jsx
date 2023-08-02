import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const { currentPage, totalPage, productId, search = "", queryParams } = props;
  return (
    totalPage > 1 && (
    <nav aria-label="Page navigation ">
        <ul className="pagination justify-content-center pagination-lg ">
          <li className="page-item">
            <Link
              className="page-link"
              to={`/Products?page=${currentPage > 1 ? currentPage - 1 : 1}`}
            >
              Previous
            </Link>
          </li>
          {[...Array(totalPage).keys()].map((x) => (
            <li
              className={`page-item ${x + 1 === +currentPage ? 'active' : ''}`}
              key={x + 1}
            >
              <Link
                className="page-link"
                to={`/Products?page=${x + 1}`}
              >
                {x + 1}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link"
              to={`/Products?page=${currentPage < totalPage ? +currentPage + 1 : totalPage}`}
            >
              Next
            </Link>
          </li>
        </ul>
    </nav>
    )
  );
};

export default Pagination;
