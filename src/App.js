import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./layout/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <Suspense>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
