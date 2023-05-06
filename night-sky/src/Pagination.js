import React from 'react';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul>
       {/* Left navigation arrow */}
      <li
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={pageNumber}>&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li key="rightArrow"
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;