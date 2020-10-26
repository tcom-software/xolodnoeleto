import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styles";

const Pagination = ({ isMobile }) => {
  // const [currentPage, setCurrentPage] = useState(pageFromUrl ? pageFromUrl : 1);

  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={66}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        previousLabel={
          <span className="arrow-icons" data-direction="left">
            {isMobile ? `<<` : `предыдущий`}
          </span>
        }
        nextLabel={
          <span className="arrow-icons" data-direction="right">
            {isMobile ? `>>` : `следующий`}
          </span>
        }
        // initialPage={currentPage - 1}
        disableInitialCallback={true}
      />
    </PaginationContainer>
  );
};

export default Pagination;
