import React from 'react'

export default function Pagination({ currentPage, totalPage, changePage }) {

  let pageList = [];
  if (totalPage < 5) for (let i = 0; i <= totalPage; i++) pageList.push(i)
  else pageList = [1, 2, 3, 4, 5];

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
