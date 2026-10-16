import React from 'react';
import { Button } from 'react-bootstrap';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 my-4">
      <Button
        variant="outline-primary"
        size="sm"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Trước
      </Button>
      
      <span className="fw-semibold mx-2">
        Trang: {currentPage} / {totalPages}
      </span>

      <Button
        variant="outline-primary"
        size="sm"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Sau
      </Button>
    </div>
  );
}
export default Pagination;