import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styles";

const Pagination = () => {
  // const [currentPage, setCurrentPage] = useState(pageFromUrl ? pageFromUrl : 1);

  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={66}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        previousLabel={
          <span className="arrow-icons" data-direction="left">
            предыдущий
          </span>
        }
        nextLabel={
          <span className="arrow-icons" data-direction="right">
            следующий
          </span>
        }
        // initialPage={currentPage - 1}
        disableInitialCallback={true}
      />
    </PaginationContainer>
  );
};

export default Pagination;
