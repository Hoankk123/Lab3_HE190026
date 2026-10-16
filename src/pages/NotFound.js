import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5">
      <h1 className="display-4 text-danger fw-bold">404</h1>
      <h2>Không tìm thấy trang</h2>
      <p className="text-muted">Trang bạn đang tìm kiếm không tồn tại.</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Về trang chủ
      </Button>
    </Container>
  );
}
export default NotFound;