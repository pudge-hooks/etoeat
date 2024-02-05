import { useParams } from 'react-router-dom';

import categories from '../../data/categories';
import products from '../../data/products';

import CategoryBanner from '../../views/CategoryBanner/CategoryBanner';

import Footer from '../../layout/Footer/Footer';

import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Category = () => {
  const { categoryId } = useParams();
  const [selectedProducts, setSelectedProducts] = useState({});

  const category = categories.find(category => category.id === categoryId);

  if (!category) {
    return <div>Продуктів в цій категорії не знайдено</div>;
  }

  const filteredProducts = products.filter(product =>
    category.productsList.includes(product.id),
  );

  return (
    <div className="scroll-snap__container">
      <CategoryBanner
        image={category.img}
        name={category.name}
        icon={category.icon}
      />
      {filteredProducts.map(product => {
        const isProductSelected = selectedProducts[product.id];
        return (
          <ProductCard
            product={product}
            isProductSelected={isProductSelected}
            setSelectedProducts={setSelectedProducts}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Category;
