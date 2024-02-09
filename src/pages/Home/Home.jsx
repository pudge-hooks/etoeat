import CategoryCard from '../../components/CategoryCard/CategoryCard';

import categories from '../../data/categories';

import Footer from '../../layout/Footer/Footer';

import Hero from '../../views/Hero/Hero';

const Home = () => {

  return (
    <div className="scroll-snap__container">
      <Hero />
      {categories.map(category => {
        const link = `/${category.id}`;
        return (
          <CategoryCard category={category} key={category.id} link={link} />
        );
      })}
      <Footer />
    </div>
  );
};

export default Home;
