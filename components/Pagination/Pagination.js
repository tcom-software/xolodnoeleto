import React, { useEffect, useState } from "react";
import { Scroll } from "@utils";
import Paginationa from "rc-pagination";
import { PaginationContainer } from "./styles";

const Pagination = ({ page: fromUrl, isMobile, total, callback }) => {
  const [currentPage, setCurrentPage] = useState(fromUrl);
  const { To } = Scroll;

  const setPageToSelectedData = (page) => callback && callback(page);

  useEffect(() => {
    setCurrentPage(fromUrl);
  }, [fromUrl]);

  return (
    <PaginationContainer>
      <Paginationa
        total={total}
        defaultCurrent={currentPage === undefined ? 1 : parseInt(currentPage)}
        current={currentPage === undefined ? 1 : parseInt(currentPage)}
        prevIcon={<span>{isMobile ? `<<` : `предыдущий`}</span>}
        nextIcon={<span>{isMobile ? `>>` : `следующий`}</span>}
        jumpNextIcon={<span>...</span>}
        jumpPrevIcon={<span>...</span>}
        onChange={(selected) => {
          To("default");
          setCurrentPage(selected);
          setPageToSelectedData(selected);
        }}
      />
    </PaginationContainer>
  );
};
export default Pagination;
