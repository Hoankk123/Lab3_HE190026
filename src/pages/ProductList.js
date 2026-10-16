import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Table, Row, Col, Card, Form } from 'react-bootstrap';
import { products } from '../data/products';
import SearchBar from '../components/Searchbar';
import CategoryFilter from '../components/CategoryFilter';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || 'Tất cả';
  const sort = searchParams.get('sort') || 'default';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const ITEMS_PER_PAGE = 4;

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchKeyword = p.name.toLowerCase().includes(keyword.toLowerCase());
      const matchCategory = category === 'Tất cả' || p.category === category;
      return matchKeyword && matchCategory;
    });
  }, [keyword, category]);

  const sortedProducts = useMemo(() => {
    let result = [...filteredProducts];
    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [filteredProducts, sort]);

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE) || 1;
  const currentPage = Math.min(Math.max(1, page), totalPages);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedProducts, currentPage]);

  const updateQueryParams = (newParams) => {
    const updated = new URLSearchParams(searchParams);
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === '' || newParams[key] === 'Tất cả' || newParams[key] === 'default') {
        updated.delete(key);
      } else {
        updated.set(key, newParams[key]);
      }
    });
    setSearchParams(updated);
  };

  return (
    <Container className="py-2">
      <Card className="p-3 mb-4">
        <Row className="g-2 align-items-center">
          <Col md={4}>
            <SearchBar initialKeyword={keyword} onSearch={(kw) => updateQueryParams({ keyword: kw, page: 1 })} />
          </Col>
          <Col md={4}>
            <CategoryFilter
              categories={categories}
              selectedCategory={category}
              onSelectCategory={(cat) => updateQueryParams({ category: cat, page: 1 })}
            />
          </Col>
          <Col md={4}>
            <Form.Select
              value={sort}
              onChange={(e) => updateQueryParams({ sort: e.target.value, page: 1 })}
            >
              <option value="default">Sắp xếp: Mặc định</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
              <option value="name-asc">Tên: A - Z</option>
            </Form.Select>
          </Col>
        </Row>
      </Card>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>Tổng: {totalProducts} sản phẩm</div>
        <div>Trang: {currentPage} / {totalPages}</div>
      </div>

      {currentProducts.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center">
          <h5>Không tìm thấy sản phẩm nào phù hợp!</h5>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => updateQueryParams({ page: newPage })}
      />
    </Container>
  );
}

export default ProductList;