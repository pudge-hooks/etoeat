import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { useMenu } from '../../data/MenuContext';

import ProductCard from '../../components/ProductCard/ProductCard';
import Container from '../../components/Container/Container';

import './Category.scss';

const Category = () => {
  const { menu } = useMenu();
  const categories = menu.Groups?.slice(0, menu.Groups?.length - 3);

  const { categoryId } = useParams();
  const category = categories?.find(
    category => category.ID === Number(categoryId),
  );

  const topElementRef = useRef();
  useEffect(() => {
    if (topElementRef.current) {
      topElementRef.current.scrollIntoView();
    }
  }, [categoryId]);

  if (!category) {
    return <div className="category__null"></div>;
  }

  return (
    <div className="category">
      <Container className="category__container">
        <ul className="category__list">
          {category?.Items.map(product => {
            return <ProductCard key={product.ID} product={product} />;
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Category;
