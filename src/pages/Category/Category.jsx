import { useParams } from 'react-router-dom';

import categories from '../../data/categories';
import products from '../../data/products';

import CategoryBanner from '../../views/CategoryBanner/CategoryBanner';
import Products from '../../views/Products/Products';

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find(category => category.id === categoryId);

  if (!category) {
    return <div>Продуктів в цій категорії не знайдено</div>;
  }

  const filteredProducts = products.filter(product =>
    category.productsList.includes(product.id),
  );

  return (
    <div>
      <CategoryBanner image={category.img} name={category.name} icon={category.icon} />
      <Products productsArray={filteredProducts} />
    </div>
  );
};

export default Category;
