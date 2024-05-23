import { useState } from "react";

const usePagination = (data, pageSize = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    paginatedData,
    handlePageChange,
  };
};

export default usePagination;
