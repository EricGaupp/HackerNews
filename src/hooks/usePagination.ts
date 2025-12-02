import { useMemo, useState } from "react";

export function usePagination(data: Array<any>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const items = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  function prevOnClick() {
    setCurrentPage((page) => page - 1);
  }

  function nextOnClick() {
    setCurrentPage((page) => page + 1);
  }

  const prevDisabled = currentPage < 1;
  const nextDisabled = currentPage >= Math.ceil(data.length / itemsPerPage) - 1;

  return {
    currentPage,
    items,
    nextDisabled,
    prevDisabled,
    nextOnClick,
    prevOnClick,
    setItemsPerPage,
    itemsPerPage,
  };
}
