import React, { useEffect, useState } from 'react'

export default function Pagination({ currentPage, totalPage, changePage }) {
  
  // State Management
  const [pageList, setPageList] = useState([]);

  const handlePage = () => {
    let newPageList = [];
    
    if (totalPage < 5) for (let i = 1; i <= totalPage; i++) {
      newPageList.push(i);
      setPageList(newPageList);
    } else if (Math.floor(currentPage / 2 >= 1)) {
      let minPage = (currentPage - 2 > 0) ? currentPage - 2 : 1;
      let maxPage = currentPage + 2;
      for (minPage; minPage <= maxPage; minPage++) newPageList.push(minPage);
      setPageList(newPageList);
    } 
    else {
      setPageList([1, 2, 3, 4, 5]);
    } 
  }

  // Run Everytime Page is changed
  useEffect(() => {
    handlePage()
  }, [currentPage, totalPage]);

  return (
    <div className="pagination-component">
      <ol className="pagination-list">
        <li className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`} key="<" onClick={() => changePage(currentPage - 1)}>&lt;</li>
        {pageList.map((item, index) => 
          <li className={`pagination-item ${currentPage === item ? "active" : ""}`} key={index} onClick={() => changePage(index + 1)}>{item}</li>   
        )}
        <li className={`pagination-item ${currentPage === totalPage ? "disabled" : ""}`} key=">" onClick={() => changePage(currentPage + 1)}>&gt;</li>
      </ol>
    </div>
  )
}
