import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ProductItem({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td className="fw-semibold">{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString('vi-VN')}đ</td>
      <td>
        <Button
          as={Link}
          to={`/products/${product.id}`}
          variant="primary"
          size="sm"
        >
          Chi tiết
        </Button>
      </td>
    </tr>
  );
}
export default ProductItem;