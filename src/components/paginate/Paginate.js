import React from "react";
import ReactPaginate from "react-paginate";
import './Pagination.css';

const Pagination = ({ pageNum, info, setPageNum }) => {
  let pageChange = (data) => {
    setPageNum(data.selected + 1);
  };

  return (
      <ReactPaginate
        className="pagination"
        nextLabel="Next"
        forcePage={pageNum === 1 ? 0 : pageNum - 1}
        previousLabel="Prev"
        previousClassName="action_prev"
        nextClassName="action_next"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
  );
};

export default Pagination;