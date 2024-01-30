import './Categories.scss';
import categories from '../../data/categories';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Categories = () => {
  return (
    <section className="categories">
      <ul className="categories__list">
        {categories.map(category => {
          const link = `/${category.id}`;
          return (
            <CategoryCard category={category} key={category.id} link={link} />
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
