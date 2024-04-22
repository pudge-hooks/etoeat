import CategoryCard from '../../components/CategoryCard/CategoryCard';

import { useMenu } from '../../data/MenuContext';

import Hero from '../../views/Hero/Hero';

const Home = () => {
  const { menu } = useMenu();
  const categories = menu.Groups?.slice(0, menu.Groups?.length - 3);

  return (
    <div className="scroll-snap__container">
      <Hero categories={categories} />
      {categories?.map(category => {
        const link = `/${category.ID}`;
        return (
          <CategoryCard category={category} key={category.ID} link={link} />
        );
      })}
    </div>
  );
};

export default Home;
