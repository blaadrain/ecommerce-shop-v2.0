import './scss/app.scss';

import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Default from './layouts/Default';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Default />}
      >
        <Route
          path=""
          element={<HomePage />}
        />
        <Route
          path="product/:id"
          element={<ProductPage />}
        />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
