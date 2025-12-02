import { useMemo, useState } from "react";

const STORIES_PER_PAGE = 30;

export function usePagination(data: Array<any>) {
  const [currentPage, setCurrentPage] = useState(0);

  const items = useMemo(() => {
    const startIndex = currentPage * STORIES_PER_PAGE;
    return data.slice(startIndex, startIndex + STORIES_PER_PAGE);
  }, [data, currentPage, STORIES_PER_PAGE]);

  function prevOnClick() {
    setCurrentPage((page) => page - 1);
  }

  function nextOnClick() {
    setCurrentPage((page) => page + 1);
  }

  const prevDisabled = currentPage < 1;
  const nextDisabled =
    currentPage >= Math.ceil(data.length / STORIES_PER_PAGE) - 1;

  return {
    currentPage,
    items,
    nextDisabled,
    prevDisabled,
    nextOnClick,
    prevOnClick,
    storiesPerPage: STORIES_PER_PAGE,
  };
}
