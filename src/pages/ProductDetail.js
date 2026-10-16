import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <Container className="text-center py-5">
        <h3 className="text-danger mb-3">Sản phẩm không tồn tại!</h3>
        <p className="text-muted">ID sản phẩm không khớp với dữ liệu hệ thống.</p>
        <Button variant="secondary" onClick={() => navigate('/products')}>
          Quay lại danh sách
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button
        variant="outline-secondary"
        className="mb-3"
        onClick={() => navigate('/products')}
      >
        &larr; Quay lại danh sách
      </Button>

      <Card className="shadow-sm p-4">
        <h2 className="fw-bold mb-4">{product.name}</h2>
        <Row className="g-3 fs-5">
          <Col xs={12} md={6}>
            <strong>ID:</strong> {product.id}
          </Col>
          <Col xs={12} md={6}>
            <strong>Danh mục:</strong> {product.category}
          </Col>
          <Col xs={12} md={6} className="">
            <strong>Giá:</strong> {product.price.toLocaleString('vi-VN')}đ
          </Col>
          <Col xs={12}>
            <strong>Mô tả:</strong>
            <p>{product.description}</p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
export default ProductDetail;