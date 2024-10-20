import { useState, useEffect } from 'react';
import './index.css'

function Pagination({ totalPlants, plantsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalPlants / plantsPerPage);
  
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (totalPlants === 0) {
      setCurrentPage(1);
    } else if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPlants, plantsPerPage, totalPages]);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (page) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
      <button className='non-active' disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button 
          key={page}
          onClick={() => handlePageChange(page)}
          className={page === currentPage ? 'active' : 'non-active'}
        >
          {page}
        </button>
      ))}
      <button className='non-active' disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
