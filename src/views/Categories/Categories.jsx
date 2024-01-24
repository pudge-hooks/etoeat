import './Categories.scss';
import categories from '../../data/categories';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Categories = () => {
  return (
    <section className="categories">
      <ul className="categories__list">
        {categories.map(category => {
          return <CategoryCard category={category} key={category.id} />;
        })}
      </ul>
    </section>
  );
};

export default Categories;
