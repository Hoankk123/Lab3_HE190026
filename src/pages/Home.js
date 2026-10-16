import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center py-5">
      <h1 className="fw-bold mb-3">Welcome to ProductStore</h1>
      <p className="text-muted fs-5 mb-4">
        Manage and explore products for your needs.
      </p>
      <Button as={Link} to="/products" variant="primary" size="lg">
        View Products
      </Button>
    </Container>
  );
}
export default Home;