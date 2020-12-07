import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styles";

const Pagination = ({ page, isMobile, total, updateSelectedDataPage }) => {
  const [currentPage, setCurrentPage] = useState(page);
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const setPageToSelectedData = (page) => updateSelectedDataPage(page);

  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={total >= 10 ? Math.floor(total / 10) : 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        initialPage={currentPage !== undefined ? parseInt(currentPage) - 1 : 0}
        forcePage={currentPage !== undefined ? parseInt(currentPage) - 1 : 0}
        onPageChange={({ selected }) => {
          setCurrentPage(selected + 1);
          setPageToSelectedData(selected + 1);
        }}
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
    </PaginationContainer>
  );
};
function areEqual(prevProps, nextProps) {
  /**
   *  возвращает true, если nextProps рендерит
   *  тот же результат что и prevProps,
   *  иначе возвращает false
   * * * * */
  if (prevProps.page !== nextProps.page) {
    return true;
  } else {
    return false;
  }
}

export default React.memo(Pagination);
