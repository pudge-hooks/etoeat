import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './data/CartContext';

const Layout = lazy(() => import('./layout/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Category = lazy(() => import('./pages/Category/Category'));

function App() {
  return (
    <CartProvider>
      <Suspense>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryId" element={<Category />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Suspense>
    </CartProvider>
  );
}

export default App;
