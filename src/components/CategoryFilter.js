import React from 'react';
import { Form } from 'react-bootstrap';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <Form.Select
      value={selectedCategory || 'Tất cả'}
      onChange={(e) => onSelectCategory(e.target.value)}
      style={{ minWidth: '180px' }}
    >
      <option value="Tất cả">Tất cả danh mục</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </Form.Select>
  );
}
export default CategoryFilter;