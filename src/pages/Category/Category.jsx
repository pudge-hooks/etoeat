import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import categories from '../../data/categories';
import products from '../../data/products';

import ProductCard from '../../components/ProductCard/ProductCard';
import Container from '../../components/Container/Container';

import './Category.scss';

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find(category => category.id === categoryId);
  const topElementRef = useRef();

  useEffect(() => {
    if (topElementRef.current) {
      topElementRef.current.scrollIntoView();
    }
  }, [categoryId]);

  if (!category) {
    return <div>Продуктів в цій категорії не знайдено</div>;
  }

  const filteredProducts = products.filter(product =>
    category.productsList.includes(product.id),
  );

  return (
    <div className="category">
      <Container className="category__container">
        <ul className="category__list">
          {filteredProducts.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Category;
