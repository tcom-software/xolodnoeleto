import React from "react";
import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styles";

const Pagination = ({ isMobile, total, currentPage, setCurrentPage }) => {
  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={total >= 10 ? Math.floor(total / 10) : 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
        previousLabel={
          <span
            className="arrow-icons"
            data-direction="left"
            onClick={() => total > 0 && setCurrentPage(currentPage - 1)}
          >
            {isMobile ? `<<` : `предыдущий`}
          </span>
        }
        nextLabel={
          <span
            className="arrow-icons"
            data-direction="right"
            onClick={() =>
              total < currentPage && setCurrentPage(currentPage + 1)
            }
          >
            {isMobile ? `>>` : `следующий`}
          </span>
        }
        disableInitialCallback={true}
      />
    </PaginationContainer>
  );
};

export default Pagination;
