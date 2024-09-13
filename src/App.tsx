import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Head from './components/Head/Head';

const CatalogPage = lazy(() => import('./pages/Catalog/CatalogPage'));
const DetailsPage = lazy(() => import('./pages/Details/DetailsPage'));
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

function App() {
  return (
    <>
      <Head />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
