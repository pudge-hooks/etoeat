import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import categories from '../../data/categories';
import products from '../../data/products';

import CategoryBanner from '../../views/CategoryBanner/CategoryBanner';

import Footer from '../../layout/Footer/Footer';

import ProductCard from '../../components/ProductCard/ProductCard';
import Container from '../../components/Container/Container';

import './Category.scss';

const Category = () => {
  const { categoryId } = useParams();
  const [selectedProducts, setSelectedProducts] = useState({});
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
    <div>
      <CategoryBanner
        image={category.img}
        name={category.name}
        icon={category.icon}
        ref={topElementRef}
      />
      <Container className='category__container'>
        {filteredProducts.map(product => {
          const isProductSelected = selectedProducts[product.id];
          return (
            <ProductCard
              key={product.id}
              product={product}
              isProductSelected={isProductSelected}
              setSelectedProducts={setSelectedProducts}
            />
          );
        })}
      </Container>
      <Footer />
    </div>
  );
};

export default Category;
