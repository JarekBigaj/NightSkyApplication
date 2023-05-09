import React from 'react';
import { usePagination, DOTS } from './usePagination';
import styled,{ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    primary: "blue",
    lightGrey: "#f5f5f5"
  }
};

const Pagination = (props,{className}) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    if(currentPage < lastPage) onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if(currentPage > 1) onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ThemeProvider theme={theme}>
      <PaginationWrapper className={className}>
        <PaginationItem 
          key="arrowLeft" 
          onClick={onPrevious} 
          className={currentPage === 1 ? "disabled" : ""}
        >
          <PaginationArrow direction="left" />
        </PaginationItem>
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            const random = Math.random()*10;
            return <PaginationItem key={random}>&#8230;</PaginationItem>;
          }
          return (
                <PaginationItem 
                  active={pageNumber === currentPage}
                  key={pageNumber+"pageNumber"}
                  onClick={() => onPageChange(pageNumber)
                }>
                {pageNumber}
                </PaginationItem>
              );
        })}

        <PaginationItem  
          key="rightArrow" 
          onClick={onNext} 
          className={currentPage === lastPage ? "disabled" : ""}
        >
          <PaginationArrow direction="right"/>
        </PaginationItem>
      </PaginationWrapper>
    </ThemeProvider>
  );
};


const PaginationWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const PaginationItem = styled.li`
  padding: 0.5rem;
  margin: 0 0.25rem;
  background-color: ${props =>
    props.active ? props.theme.colors.primary : "white"};
  color: ${props => (props.active ? "white" : "black")};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.lightGrey};
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PaginationArrow = styled.div`
  border: solid ${props => props.theme.colors.primary};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${props =>
    props.direction === "left" ? "rotate(135deg)" : "rotate(-45deg)"};
`;
export default Pagination;