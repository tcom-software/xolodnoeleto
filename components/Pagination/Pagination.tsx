import React, { useEffect, useState } from "react";
import { Scroll } from "@utils";
import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styles";

const Pagination = ({ page: fromUrl, isMobile, total, callback }) => {
  const [currentPage, setCurrentPage] = useState(fromUrl);
  const { To } = Scroll;
  // callback update catalogue selected page
  const setPageToSelectedData = (page) => callback && callback(page);

  const handleClick = ({ target: { tagName } }) => {
    if (tagName === "A" || tagName === "SPAN") {
      To("default");
    }
  };

  return (
    <PaginationContainer>
      <div onClick={(event) => handleClick(event)}>
        <ReactPaginate
          pageCount={total >= 10 ? Math.floor(total / 10) : 1}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          initialPage={
            currentPage !== undefined ? parseInt(currentPage) - 1 : 0
          }
          forcePage={currentPage !== undefined ? parseInt(currentPage) - 1 : 0}
          onPageChange={({ selected }) => {
            setCurrentPage(selected + 1);
            setPageToSelectedData(selected + 1);
          }}
          breakLabel={<span>adsfasdfa</span>}
          previousLabel={
            <span
              className="arrow-icons"
              data-direction="left"
              onClick={() => {
                if (total > 0) {
                  setCurrentPage(currentPage - 1);
                  setPageToSelectedData(currentPage + 1);
                }
              }}
            >
              {isMobile ? `<<` : `предыдущий`}
            </span>
          }
          nextLabel={
            <span
              className="arrow-icons"
              data-direction="right"
              onClick={() => {
                if (total < currentPage) {
                  setCurrentPage(currentPage + 1);
                  setPageToSelectedData(currentPage - 1);
                }
              }}
            >
              {isMobile ? `>>` : `следующий`}
            </span>
          }
          disableInitialCallback={true}
        />
      </div>
    </PaginationContainer>
  );
};
export default React.memo(Pagination);
