import React, { useState, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function SearchBar({ initialKeyword, onSearch }) {
  const [keyword, setKeyword] = useState(initialKeyword || '');

  useEffect(() => {
    setKeyword(initialKeyword || '');
  }, [initialKeyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex me-2">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
}
export default SearchBar;